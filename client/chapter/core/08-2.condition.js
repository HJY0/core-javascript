/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */
/* eslint no-unused-vars: off */

let age = ('몇살인가요?', 23);

if (age >= 14 && age <=90) {
  console.log('답변 감사');
} else {
  console.log('ㅇㅎ');
}



let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};



// let userName = ('이름을 입력해주세요');
// let userPw;

// if (userName === 'Admin') {
//   userPw = prompt('비밀번호를 입력해주세요');
//   if (userPw === "TheMaster") {
//     alert('환영합니다!');
//   } else {
//     alert('인증에 실패하였습니다.');
//   }
// } else if (userName === '' || userName === null) {
//   alert('취소되었습니다.')
// } 

let userName = prompt("이름을 입력해주세요.", '');
let userPw;

if (userName?.toUpperCase() === 'ADMIN') {
	userPw = prompt('비밀번호:', ''); 

    if (userPw?.toUpperCase() === 'THEMASTER') {
    alert('환영합니다!'); 

    } else if (userPw === '' || userPw === null) {
      alert('취소되었습니다.'); 

    } else { 
      alert('인증에 실패하였습니다.'); 
    }

  } else if (userName === '' || userName === null) {
    alert( '취소되었습니다.' );

  } else { alert('인증되지 않은 사용자입니다.');
}

