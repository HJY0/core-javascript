/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */


/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(null); // null

// 2. 값이 할당되지 않은 상태
console.log(undefined); // undefined

/* eslint no-unused-vars: off */
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message1 = "hello";

let nickName = '자영';

let message2 = `안녕 내 이름은 ${nickName} 이야`;
let message3 = `안녕 내 이름은 ${ '안녕' / 3 } 이야`;

console.log(message2); // 
console.log(message3);

// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 100.123

console.log('number : ',typeof number) // number


// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
console.log(typeof 12341n); // BigInt


// 6. 참(true, yes) 또는 거짓(false, no)
console.log(typeof true); //boolean


// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log(typeof {}); //object


// 8. 고유한 식별자(unique identifier)
console.log(typeof Symbol('uid')); //symbol

console.log(typeof Math); //object

const fuc = function () {

}

console.log(typeof fuc); //function


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object
/* key value */
// const user = new Object()
const user = {
  name: '자영',
  age: 23
}

// Array
// let list = new Array()
let list = [10, 100, 1000, 1, 2, 3]

// function
function sum(a, b) {
  return a + b
}

console.log(sum(1, 4));

// this