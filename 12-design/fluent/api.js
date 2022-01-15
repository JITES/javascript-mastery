const dog = {
  status: null,
  log() {
    console.log(this.status);
  },
  updateStatus() {
    console.log(this.status);
  },
  bark() {
    this.status = 'woofing';
    this.log();
    return this;
  },
  walk() {
    this.status = 'walking';
    this.log();
    return this;
  },
  eat() {
    this.status = 'eating';
    this.log();
    return this;
  },
};

dog.bark().eat().walk();
