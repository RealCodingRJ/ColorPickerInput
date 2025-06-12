class ColorScheme {
  color = Number(0);
  //   name = null;
  constructor(colors) {
    // this.name = name;
    this.color = colors;
  }

  getConvertedSchemed() {
    return this.color;
  }
}
const button = document.getElementById("button");
button.onclick = () => {
  const input = document.getElementById("input");
  const value = parseInt(input.value, 16);

  const randomColor = new ColorScheme(value);

  const NewColor = randomColor.getConvertedSchemed();

  const color = document.getElementById("color");

  if (color) {
    color.textContent = "#" + NewColor + NewColor + NewColor;
  }
};
