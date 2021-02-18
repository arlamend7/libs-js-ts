interface Date {
  SameAs(Date: Date): boolean;
  isBeetween(dateStart: Date, dateEnd: Date): boolean;
}
Date.prototype.SameAs = function (Date: Date) {
  return this.valueOf() == Date.valueOf();
};
Date.prototype.isBeetween = function (dateStart: Date, dateEnd: Date): boolean {
  return dateStart.valueOf() < this.valueOf() && this.valueOf() < dateEnd.valueOf();
};
