// Linear search in an array

function linearSearch(arr, target) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      index = i;
      break;
    }
  }

  return index;
}

console.log(linearSearch([1, 2, 3, 4, 5], 3));
console.log(linearSearch([7, 8, 9, 10], 6));
console.log(linearSearch([1, 4, 5, 8, 9, 12], 8));

// Binary search in an array

function binarySearch(arr, target) {
  let start = 0,
    end = arr.length - 1,
    index = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      index = mid;
      break;
    } else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return index;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([7, 8, 9, 10], 6));
console.log(binarySearch([1, 4, 5, 8, 9, 12], 8));

// Bubble Sort

function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([3, 2, 9, 10, 5, 6, 7, 3, 4]));
console.log(bubbleSort([-17, 25, 13, 14]));
console.log(bubbleSort([6, 27, -19, 6, -10]));

// Insertion Sort

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([3, 2, 9, 10, 5, 6, 7, 3, 4]));
console.log(insertionSort([-17, 25, 13, 14]));
console.log(insertionSort([6, 27, -19, 6, -10]));

// Selection Sort

function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

console.log(selectionSort([3, 2, 9, 10, 5, 6, 7, 3, 4]));
console.log(selectionSort([-17, 25, 13, 14]));
console.log(selectionSort([6, 27, -19, 6, -10]));
