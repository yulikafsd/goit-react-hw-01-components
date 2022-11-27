export function getRandomColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  if (randomColor.length === 5) {
    randomColor = randomColor.concat('0');
  }
  return '#' + randomColor;
}
