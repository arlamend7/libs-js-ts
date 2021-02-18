interface String {
  RemoveAccents(): string;
  isNullOrWhiteSpace(): boolean;
  JustNumbers(): string;
}
String.prototype.isNullOrWhiteSpace = function () {
  return this == null || this == '';
};
String.prototype.RemoveAccents = function () {
  return this.normalize('NFD').replace(/[^a-zA-Zs]/g, '');
};
String.prototype.JustNumbers = function () {
  return this.replace(/[^0-9]/g, '');
};
