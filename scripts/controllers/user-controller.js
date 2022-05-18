class UserController {
  static BASE_URL = "https://api-kenzie-food.herokuapp.com/auth/";
  static token = localStorage.getItem("Token");

  static async registerUser(userData) {
    return await fetch(this.BASE_URL+"register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData)
    })
    .then((response) => {
      return response.status;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  static async loginUser(userData) {
    return await fetch(this.BASE_URL+"login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData)
    })
    .then(async (response) => {
      if (response.status === 200) {
        const token = await response.json();
        console.log(token);
        localStorage.setItem("Token", token);
        window.location = '../../index.html'
      }
      return response.status;
    })
    .catch((error) => {
      console.error(error);
    });
  }
}

export default UserController
