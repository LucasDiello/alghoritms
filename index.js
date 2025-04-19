// Função para calcular a diferença absoluta entre as somas das diagonais
function diagonalDifference(matrix) {
  const n = matrix.length;
  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  for (let i = 0; i < n; i++) {
    primaryDiagonalSum += matrix[i][i];
    secondaryDiagonalSum += matrix[i][n - i - 1];
  }

  return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

// Exemplo de uso
const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

diagonalDifference(matrix); // Saída: 15

function plusMinus(arr) {
  // Write your code here
  const n = arr.length;
  let positiveArray = [];
  let negativeArray = [];
  let zeroArray = [];
  arr.filter((numEqual) => {
    numEqual > 0 && positiveArray.push(numEqual);
    numEqual === 0 && negativeArray.push(numEqual);
    numEqual < 0 && zeroArray.push(numEqual);
  });

  const numPositiveArray = positiveArray.length / n;
  const numNegativeArray = negativeArray.length / n;
  const numzeroArray = zeroArray.length / n;

  const array = [
    numPositiveArray.toFixed(6),
    numzeroArray.toFixed(6),
    numNegativeArray.toFixed(6),
  ];

  return array.forEach((nums) => console.log(nums));
}

plusMinus([-4, 3, -9, 0, 4, 1]); // Saída: 0.500000 0.333333 0.166667

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i); // Espaços em branco
    let hashes = "#".repeat(i); // Caracteres '#'
    console.log(spaces + hashes); // Imprime a linha
  }
}

staircase(6);

function miniMaxSum(arr) {
  // Write your code here

  const array = arr.sort((a, b) => a - b);

  const newArr = array.slice(0, 4);
  const newArr2 = array.slice(1, 5);

  const sum1NewArr = newArr.reduce((a, c) => a + c);
  const sum2NewArr = newArr2.reduce((a, c) => a + c);
  const arrReturn = [sum1NewArr, sum2NewArr];
  return console.log(arrReturn[0], arrReturn[1]);
}

miniMaxSum([7, 69, 2, 221, 8974]); // Saída: 10 14

const functionCalcMedia = (arr, media) => {
  const objs = arr.map((arrGrade, index) => {
    const sum = arrGrade.grade.reduce((a, c) => a + c);

    const med = sum / arrGrade.grade.length;

    const obj = {
      [arrGrade["name"]]: med >= media,
    };
    return obj;
  });
  console.log(objs); // Saída: [ { joao: false }, { maria: true }, { pedro: false } ]
};

functionCalcMedia(
  [
    { name: "joao", grade: [5, 5, 5] },
    { name: "maria", grade: [6, 6, 6] },
    { name: "pedro", grade: [6, 6, 5] },
  ],
  6
);

function birthdayCakeCandles(candles) {
  const array = candles.sort((a, b) => b - a);
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[0] === array[i]) {
      count += 1;
    }
  }
  console.log(count);
}

birthdayCakeCandles([3, 2, 1, 3]); // Saída: 2

function convertTo24HourFormat(timeString) {
  const [hour, minute, seconds] = timeString.split(":");
  const period = seconds.match(/[a-zA-Z]+/g);
  const formattedSeconds = seconds.match(/\d+/g);

  let formattedHour = parseInt(hour);
  if (period[0] === "PM" && formattedHour < 12) {
    formattedHour += 12;
  }
  if (period[0] === "AM" && formattedHour >= 12) {
    formattedHour -= 12;
  }

  formattedHour = formattedHour < 10 ? `0${formattedHour}` : formattedHour;

  return `${formattedHour}:${minute}:${formattedSeconds}`;
}

const inputTime = "12:40:03PM";
const formattedTime = convertTo24HourFormat(inputTime);

function extraLongFactorials(n) {
  n = BigInt(n);

  let result = 1n;

  for (let i = result; i <= n; i++) {
    result *= i;
  }

  return console.log(result.toString());
}

extraLongFactorials(25);

function nonDivisibleSubset(k, s) {
  const arr = [];
  for (let i = 0; i < k.length; i++) {
    for (let j = i + 1; j < k.length; j++) {
      arr.push(k[i] + k[j]);
    }
  }
  return arr.map((arr) => arr % s).length;
}

console.log(nonDivisibleSubset([3, 5, 8, 2], 2));

// s: inteiro, ponto inicial da casa de Sam
// t: inteiro, ponto final da casa de Sam
// a: inteiro, posição da macieira
// b: inteiro, posição da laranjeira
// apples: array de inteiros, distâncias de cada maçã em relação à macieira
// oranges: array de inteiros, distâncias de cada laranja em relação à laranjeira

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const apples_filter = apples.map((apple, index) => {
    const sum = a + apple;
    if (sum >= s && sum <= t) return console.log(index);
  });

  const oranges_filter = oranges.map((orange, index) => {
    const sum = b + orange;
    if (sum >= s && sum <= t) return console.log(index);
  });
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
