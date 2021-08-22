import { CHECK_LOGIN } from "../xshared/Routes";

const local_storage_key = "linkedin_tricks";

export default class User {
  static async checkLogin() {
    const token = this.getToken();
    const response = await fetch(CHECK_LOGIN, {
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
      localStorage.setItem(local_storage_key, window.btoa(token));
      return true;
    }
    return false;
  }

  static getToken() {
    const localToken = localStorage.getItem(local_storage_key);
    if (localToken) {
      return window.atob(localToken);
    }
    return "";
  }

  static removeToken() {
    localStorage.removeItem(local_storage_key);
    return true;
  }
}
