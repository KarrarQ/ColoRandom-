Class Color {
  constructor(hexCode) {
    this.hex: hexCode;
    this.locked: false;
  }
}


Class Palette {
  constructor(id) {
    this.colors: [];
    this.id: id;
  }

  replaceColor() {

  }

  lockColor() {
    if (!this.locked) {
      this.locked = true;
    }
    //only replaces unlocked colors
  }
}
