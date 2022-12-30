/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */
/* eslint no-unused-vars: off */

// let number = prompt("숫자", 0);

// if (number > 0) {
//   alert('1');
// } else if (number < 0) {
//   alert('-1');
// } else if (number == 0 ) {
//   alert('0');
// }


// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = prompt('영화 봤니?');

// 영화 볼거니?
// let goingToWatchMovie = prompt('영화 볼거니?');

// if 문(statement)
if (didWatchMovie == 'ㅇㅇ') {
  console.log('ㅇㅇ');
} else if (didWatchMovie == 'ㄴㄴ') {
  let goingToWatchMovie = prompt('영화 볼거니?');
    if (goingToWatchMovie == 'ㅇㅇ') {
      console.log('ㅇㅇ');
    } else {
      console.log('ㄴㄴ');
    }
} else {
  console.log('뭐라고?');
}

// else 절(caluse)


// else if 복수 조건 처리


// 조건부 연산자

// 멀티 조건부 연산자 식