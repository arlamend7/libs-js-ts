interface String {
  WithoutAccent(): string;
}

String.prototype.WithoutAccent = function () {
  return this.normalize('NFD').replace(/[^a-zA-Zs]/g, '');
};
