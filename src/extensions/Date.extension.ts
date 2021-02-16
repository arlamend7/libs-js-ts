interface Date {
  SameAs(Date: Date): boolean;
  isBeetween(dateStart: Date, dateEnd: Date): boolean;
}

Date.prototype.SameAs = function (Date: Date) {
  return this.getDate() == Date.getDate();
};
Date.prototype.isBeetween = function (dateStart: Date, dateEnd: Date): boolean {
  return dateStart.getDate() < this.getDate() && this.getDate() < dateEnd.getDate();
};
