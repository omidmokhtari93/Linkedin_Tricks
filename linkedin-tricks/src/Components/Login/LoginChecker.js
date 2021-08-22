const key = "linkedin_tricks";

export default class User {
  static async checkLogin() {
    const token = this.getToken();
    const response = await fetch("/check_login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    });

    return await response.json();
  }

  static setToken(token) {
    if (token) {
      localStorage.setItem(key, window.btoa(token));
      return true;
    }
    return false;
  }

  static getToken() {
    const localToken = localStorage.getItem(key);
    if (localToken) {
      return window.atob(localToken);
    }
    return "";
  }

  static removeToken() {
    localStorage.removeItem(key);
    return true;
  }
}
