import { insertLast, xhrData, xhrPromise } from "./lib/index.js"


/* xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (res)=>{
    insertBefore('body',JSON.stringify(res));
  },
  (err)=>{
    insertBefore('body','데이터 로딩에 실패했습니다.');
  }
) */


/* //1. XHR을 새로운 객체로 선언
const xhr = new XMLHttpRequest();

//2. 비동기통신포탈생성 (XHR.open(method(CRUD중하나),객체링크(url))
xhr.open("GET",'https://jsonplaceholder.typicode.com/users/1');
xhr.send(JSON.stringify(xhr));
console.log(xhr.readyState);
console.log(xhr.status); */


/* //1. XHR을 새로운 객체로 선언
const xhr = new XMLHttpRequest();

//2. 비동기통신포탈생성 (XHR.open(method(CRUD중하나),객체링크(url))
xhr.open("GET",'https://jsonplaceholder.typicode.com/users');


// console.log(xhr.readyState);
// console.log(xhr.status);


xhr.addEventListener('readystatechange',()=>{
    if (xhr.status >= 200 && xhr.status < 400) {
      if (xhr.readyState === 4) {
        console.log("통신 성공");
      }
    }else{
      console.log("통신 실패");
    }
    console.log(xhr.readyState);
    console.log(xhr.status);
});

xhr.send(); */




xhrPromise
.get('https://jsonplaceholder.typicode.com/users/1')
.then((res)=>{
  insertLast(document.body,JSON.stringify(res));
})
.catch((err)=>{
  console.log(err);
})