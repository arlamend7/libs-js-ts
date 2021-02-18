"use strict";
Date.prototype.SameAs = function (Date) {
    return this.getDate() == Date.getDate();
};
Date.prototype.isBeetween = function (dateStart, dateEnd) {
    return dateStart.getDate() < this.getDate() && this.getDate() < dateEnd.getDate();
};
//# sourceMappingURL=Date.extension.js.map