function formatNumber(num: number): string {
  if (num < 1000) {
    return num.toString(); // No need to convert if less than 1000
  } else if (num < 1000000) {
    const thousands = num / 1000;
    return thousands.toFixed(1) + "k";
  } else {
    const millions = num / 1000000;
    return millions.toFixed(1) + "m";
  }
}

function isStringNumeric(input: string): boolean {
  return !isNaN(parseFloat(input)) && isFinite(Number(input));
}

export { formatNumber, isStringNumeric };
