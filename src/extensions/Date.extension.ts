interface Date {
  SameAs(Date: Date): boolean;
}

Date.prototype.SameAs = function (Date: Date) {
  return this.getDate() == Date.getDate();
};
