function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });

  return result;
}

const isPrime = (number) => {
  if (number === 2) return true;

  if (number % 2 === 0 || number < 2) return false;

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) return false;
  }

  return true;
};

function solution(numbers) {
  let arr = [];
  for (let i = numbers.length; i >= 1; i--) {
    arr.push(...permutation(numbers.split(""), i));
  }

  arr = [...new Set(arr.map((v) => Number(v.join(""))))];

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      result++;
    }
  }

  return result;
}

console.log(solution("011"));
