/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number -> '2022'
const YEAR = 2022;
console.log(String (YEAR));

// undefined -> 'undefined'
// null -> 'null'

console.log(String (undefined));

let days = null;
console.log(String(days));

// boolean -> 'true' or 'false'
let isKind = true;
console.log(String(isKind));
console.log(isKind + ''); // 빈 문자열을 더하면 자동으로  문자형 변환


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefiend -> NaN
console.log(Number(undefined));

// null -> 0
let money = null;
console.log(Number(money));

// boolean
let cutie = true; // 1
console.log(Number(cutie));
console.log(Number(cutie / 1)); // 연산자를 쓰면 자동으로 숫자형 변환
 
let ugly = false; // 0
console.log(Number(ugly));

// string
let num = '123';
console.log(+num);

// numeric string
let width1 = '320px';
console.log(width1);
console.log(parseInt(width1, 10)); // 10은 10진수를 의미

let width2 = '320.3214px';
console.log(parseFloat(width2, 10));


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, '' -> false
// 위에 나열한 것 이외의 것들  -> true

console.log(Boolean(null));
console.log(Boolean(" "));