function invertHexColor(hex: string) {
  if (hex.startsWith("#")) {
    hex = hex.slice(1);
  }

  // Convert short hex (#RGB) to full hex (#RRGGBB)
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  // Ensure valid hex length
  if (hex.length !== 6) {
    throw new Error("Invalid hex color format");
  }

  // Invert the color
  let invertedColor = (parseInt(hex, 16) ^ 0xffffff)
    .toString(16)
    .padStart(6, "0");

  return `#${invertedColor.toUpperCase()}`;
}

export default invertHexColor;
