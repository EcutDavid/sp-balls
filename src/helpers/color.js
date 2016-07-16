export function generateRandomColor(opacity = 1) {
  const random = () => Number.parseInt(Math.random() * 255);

  return `rgba(${random()}, ${random()}, ${random()}, ${opacity})`;
}
