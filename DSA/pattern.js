// Right Triangle - Star Pattern

function printRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
}

printRightTriangle(5);
printRightTriangle(3);
printRightTriangle(7);

// Right Triangle - Number Pattern

function printRightTriangleNumbers(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${j} `);
    }
    process.stdout.write("\n");
  }
}

printRightTriangleNumbers(5);
printRightTriangleNumbers(3);
printRightTriangleNumbers(9);

// Right Triangle - Alphabet Pattern

function printRightTriangleAlphabets(n) {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(alphabets[j - 1] + " ");
    }
    process.stdout.write("\n");
  }
}

printRightTriangleAlphabets(5);
printRightTriangleAlphabets(3);
printRightTriangleAlphabets(9);

// Inverted Right Triangle - Star Pattern

function printInvertedRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
}

printInvertedRightTriangle(5);
printInvertedRightTriangle(3);
printInvertedRightTriangle(7);

// Mirrored Right Triangle - Star Pattern

function printMirroredRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write("  ");
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
}

printMirroredRightTriangle(5);
printMirroredRightTriangle(3);
printMirroredRightTriangle(7);

// Print a V-Shape Pattern

function printVShapePattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (j === i || j === 2 * n - i) process.stdout.write("*");
      else process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
}

printVShapePattern(5);
printVShapePattern(3);
printVShapePattern(7);

// Print an X-Shape Pattern

function printXShapePattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === j || i + j === n + 1) process.stdout.write("*");
      else process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
}

printXShapePattern(5);
printXShapePattern(3);
printXShapePattern(7);
