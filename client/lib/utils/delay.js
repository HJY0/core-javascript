import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";



const first = getNode('.first');


function delay(callback,timeout = 1000){
  setTimeout(callback,timeout);
}


/* delay(()=>{
  first.style.top = '-100px';

  delay(()=>{
    first.style.transform = 'rotate(360deg)';

    delay(()=>{
      first.style.top = '0px';
    })
  })
}) */


const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
}

export function delayP(options = {}){
  
  let config = {... defaultOptions};

  if(isNumber(options)){
    config.timeout = options;
  }

  // 객체 합성 mixin
  if(isObject(options)){
    config = {... config, ... options}
  }

  const {shouldReject, data, errorMessage, timeout} = config;

  return new Promise((resolve, reject)=>{

    setTimeout(()=>{
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout)

  })
}


// delayP(3000).then((res)=>{
//   console.log(res);
// })


/* delayP()
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
}) */




// async await

// async : 일반 함수를 primise를 반환하는 함수로 만든다.
// await : 1. promise가 반환하는 result를 가져오기
//         2. 코드 실행 흐름 제어
//         3. 원치않는 에러가 발생하는 걸 막아줌


async function delayA() {
  return '완료'
}

let result = await delayA();

// console.log(result);
