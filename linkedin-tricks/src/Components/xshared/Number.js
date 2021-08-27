export class Number {
  static seprateByComma(number) {
    return (
      (number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) ||
      number
    );
  }
}
