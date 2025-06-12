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

  if (color && value == "") {
    document.body.style.backgroundColor = "#" + NewColor + NewColor + NewColor;
    color.textContent = "#" + NewColor + NewColor + NewColor;
    // document.body.style.backgroundColor = "#fff";
  } else {
    document.body.style.backgroundColor = "#fff";
    color.textContent = "#" + NewColor + NewColor + NewColor;
  }
};
