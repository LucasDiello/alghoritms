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
    [10, 8, -12]
];

diagonalDifference(matrix); // Saída: 15


function plusMinus(arr) {
    // Write your code here
    const n = arr.length;
    let positiveArray = []
    let negativeArray = []
    let zeroArray = []
    arr.filter((numEqual) =>{
        numEqual > 0 && positiveArray.push(numEqual)
        numEqual === 0  && negativeArray.push(numEqual)
        numEqual < 0  && zeroArray.push(numEqual)
    })

    const numPositiveArray = positiveArray.length / n
    const numNegativeArray = negativeArray.length / n
    const numzeroArray = zeroArray.length / n


    const array = [numPositiveArray.toFixed(6),numzeroArray.toFixed(6), numNegativeArray.toFixed(6)]
    
    return array.forEach((nums) => console.log(nums))
}

plusMinus([-4, 3, -9, 0, 4, 1]) // Saída: 0.500000 0.333333 0.166667

function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i); // Espaços em branco
        let hashes = '#'.repeat(i);     // Caracteres '#'
        console.log(spaces + hashes);   // Imprime a linha
    }
}

staircase(6);

function miniMaxSum(arr) {
    // Write your code here

    const array = arr.sort((a,b) => a - b)

    const newArr = array.slice(0,4)
    const newArr2 = array.slice(1,5)
    const sum1NewArr = newArr.reduce((a,c) => a + c) 
    const sum2NewArr = newArr2.reduce((a,c) => a + c) 
    const arrReturn = [sum1NewArr, sum2NewArr]
    return console.log(arrReturn[0], arrReturn[1])
}

miniMaxSum([7, 69, 2, 221, 8974]) // Saída: 10 14


const functionCalcMedia = (arr, media) => {

   const objs = arr.map((arrGrade, index) => {

        const sum = arrGrade.grade.reduce((a,c) => a + c)

        const med = sum / arrGrade.grade.length

        const obj = {
           [arrGrade["name"]]: med >= media
        }
        return obj
    }
)
    console.log(objs) // Saída: [ { joao: false }, { maria: true }, { pedro: false } ]
}



functionCalcMedia([
    {name: 'joao', grade: [5,5,5]},
    {name: 'maria', grade: [6,6, 6]},
    {name: 'pedro', grade: [6,6,5]},
], 6
) 

function birthdayCakeCandles(candles) {
    const array = candles.sort((a,b) => b - a)
    let count = 0
    for (let i = 0; i < array.length; i ++) {
        if(array[0] === array[i]) { count += 1 }
    }
        console.log(count)
}

birthdayCakeCandles([3,2,1,3])