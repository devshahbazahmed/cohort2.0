// Compund Interest:

function calculateCompoundInterest(P, r, t, n) {
  let amount = P * Math.pow((1 + r / n), (n * t));
  let ci = (amount - P).toFixed(2);
  return ci;
}

// Swap numbers without third variable:

function swapNumbers(a, b) {
  return [b, a];
}

// Calculate area of triangle using Heron's formula:

function calculateTriangleArea(a, b, c) {
  const side = (a + b + c) / 2;
  const area = Math.sqrt(side * (side - a) * (side - b) * (side - c));
  return area.toFixed(2);
}

// Calculate properties of a circle:

function calculateCircleProperties(r) {
  const circumference = (2 * Math.PI * r).toFixed(2);
  const area = (Math.PI * Math.pow(r, 2)).toFixed(2);
  return [circumference, area];
}

console.log(Math.min(2, 0, -3, 5, -7));
console.log(Math.max(-10, -5));
console.log(Math.pow(2, 3));
console.log(Math.trunc(4.9));