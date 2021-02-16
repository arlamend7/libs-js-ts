interface String {
  RemoveAccents(): string;
  isNullOrEmpty(): boolean;
}
Array.prototype.isNullOrEmpty = function () {
  return this == null || this.length == 0;
};
String.prototype.RemoveAccents = function () {
  return this.normalize('NFD').replace(/[^a-zA-Zs]/g, '');
};
