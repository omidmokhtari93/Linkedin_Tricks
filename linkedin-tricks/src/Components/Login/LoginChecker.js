import { CHECK_LOGIN, LOG_OUT } from "../xshared/Routes";

const local_storage_key = "linkedin_tricks";

export default class User {
  static async checkLogin() {
    const response = await fetch(CHECK_LOGIN, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    return await response.json();
  }
  static logout = async () => {
    const response = await fetch(LOG_OUT, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    return await response.json();
  };
}
