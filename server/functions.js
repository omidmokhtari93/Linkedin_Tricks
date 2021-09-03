const request = require("request");

exports.apiRequest = {
  send: (url) => {
    return new Promise((resolve, reject) => {
      request(
        {
          uri: url,
        },
        (err, response, body) => {
          if (body) {
            resolve(body);
          }
          if (err) {
            reject(err);
          }
        }
      );
    });
  },
};

exports.cookieParser = function (cookies) {
  let list = {};
  cookies &&
    cookies
      .replace(/\s/g, "")
      .split(";")
      .forEach(function (cookie) {
        let splitted = cookie.split("=");
        list[splitted[0]] = splitted[1];
      });
  return list;
};
