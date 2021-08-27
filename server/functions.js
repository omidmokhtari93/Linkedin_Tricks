const request = require("request");

module.exports = class ApiRequest {
  static do(url) {
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
  }
};
