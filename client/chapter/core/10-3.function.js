/* eslint no-unused-vars: off */
/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a,b,c,d) => a+b+c+d;


// 화살표 함수와 this
function normalFunction(){
  console.log('일반함수 : ',this);
}

const arrowFunction = () => {
  console.log('화살표함수 : ',this);
}

// 객체의 메서드로 함수를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾습니다.
// 메서드 안에서의 함수는 this를 찾기 위해서는 arrowFunction이 오히려 좋아.

const user = {
  name: '자영',
  age: 24,
  address: '경기도 수원시',
  grades: [80,90,100],
  totalGrades: function() {
    console.log(this);
  }
}

user.totalGrades();


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numberic, powerCount) => {
  let result = 1;
  for (let i=0; i<powerCount; i++) {
    result *= numberic;
  }
  return result;
}

let powExpression = (numberic, powerCount) => Array(powerCount).fill(null).reduce(acc => acc * numberic ,1)


// console.log(powExpression(2,4));
// pow(2,53) // 2의53승 결과값을 제대로 내보낼 수 있게


//   return Array(powerCount).fill(null).reduce((acc) => {
//  (acc * numberic ,1)}
// }
// 위가 줄인 함수





// repeat(text: string, repeatCount: number): string;

let repeat = (text, repeatCount) => {
  let result = '';
  for (let i=0; i<repeatCount; i++) {
    result += text;
  }
  return result;
}

let repeatExpresstion = (text, repeatCount) => Array(repeatCount).fill(null).reduce(acc => acc + text, '')



//repeat('hello',3) // 'hellohellohello' 특정 문자를 반복시켜주기