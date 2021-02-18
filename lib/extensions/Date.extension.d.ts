interface Date {
    SameAs(Date: Date): boolean;
    isBeetween(dateStart: Date, dateEnd: Date): boolean;
}
