// Задание 1
function getArrayParams(arr) {
    let min = arr[arr.length-1];
    let max = arr[arr.length-1];
    let sum = 0;
    let avg;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }
    avg = Number((sum / arr.length).toFixed(2));
    return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
    let sum = arr.reduce(
        (previousValue, currentValue) => previousValue + currentValue
    );
    return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  let subSum = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
      subSum = func(arrOfArr[i]);
      if (subSum > max) {
          max = subSum;
      }
  }

  return max;
}

// Задание 3
function worker2(arr) {
    let min = arr.reduce(
        (previousValue, currentValue) => Math.min(previousValue, currentValue)
    );
    let max = arr.reduce(
        (previousValue, currentValue) => Math.max(previousValue, currentValue)
    );
    return Math.abs(max-min);
}
