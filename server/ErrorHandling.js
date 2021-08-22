module.exports = class Response {
  static error(message, data) {
    return JSON.stringify({
      result_code: 0,
      result_message: message,
      data: data || {},
    });
  }

  static success(data, message) {
    return JSON.stringify({
      result_code: 1,
      result_message: message || "done",
      data: data,
    });
  }
};
