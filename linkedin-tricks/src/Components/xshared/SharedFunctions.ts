export const comma = function (str: string): string {
  return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const reverseString = function (str: string): string {
  return str.split("").reverse().join("");
};
