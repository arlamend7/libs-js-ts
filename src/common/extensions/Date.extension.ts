interface Date {
  SameAs(date: Date): boolean;
  isBeetween(dateStart: Date, dateEnd: Date): boolean;
}
Date.prototype.SameAs = function (date: Date) {
  return this.valueOf() === date.valueOf();
};
Date.prototype.isBeetween = function (dateStart: Date, dateEnd: Date): boolean {
  return dateStart.valueOf() < this.valueOf() && this.valueOf() < dateEnd.valueOf();
};
