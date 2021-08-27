export class APICall {
  static async post(url, body, callBack) {
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      ...(body ? { body: JSON.stringify(body) } : null),
    })
      .then((x) => x.json())
      .then((x) => callBack(null, x))
      .catch((x) => callBack(x, null));
  }

  static async get(url, body, callBack) {
    await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      ...(body ? { body: JSON.stringify(body) } : null),
    })
      .then((x) => x.json())
      .then((x) => callBack(null, x))
      .catch((x) => callBack(x, null));
  }
}
