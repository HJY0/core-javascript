/* global gsap */

import { delayP, hong, insertLast, xhrData, xhrPromise, getNode as $, renderUserCard, changeColor, renderSpinner, renderEmptyCard, attr } from "./lib/index.js"


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



/* promise */

/* xhrPromise
.get('https://jsonplaceholder.typicode.com/users/1')
.then((res)=>{
  insertLast(document.body,JSON.stringify(res));
})
.catch((err)=>{
  console.log(err);
}) */



// rendingUserList 함수 만들기
// ajax (hong) 

// 유저 카드 생성
// 생성된 카드로 랜더링

// 1. userList.js로 가서
// 2. renderUserCard 함수 만들기
// 3. 만들어진 함수 안에 createUserCard를 던지고,
// 4. renderUserCard 함수를 사용했을 때 랜더링이 잘 될 수 있도록.

const userCardContainer = $('.user-card-inner');

const rendingUserList = async () => {

  renderSpinner(userCardContainer);

  try {
    await delayP(2000)

    $('.loadingSpinner').remove();

    let response = await hong.get('http://localhost:3000/users');
    let userData = response.data;
  
    // return이 필요 한 건 map, reduce 사용 | 필요 없는 건 forEach 사용
    userData.forEach(data => renderUserCard(userCardContainer, data));
  
    changeColor('.user-card');
  
    gsap.to(gsap.utils.toArray('.user-card'),{
      x: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2
    })

  } catch(err) {
    renderEmptyCard(userCardContainer);
  }

}

rendingUserList();


// 삭제 버튼을 클릭하면 콘솔창에 '삭제' 글자 출력

function deleteHandler(e) {

  let deleteButton = e.target.closest('button');
  let article = e.target.closest('article');

  if(!deleteButton || !article) return;

  let id = attr(article,'data-index');

  hong.delete(`http://localhost:3000/users/${id}`).then(()=>{
    userCardContainer.innerHTML = ''; // 화면 비우는 용도
    rendingUserList();
  })

}

userCardContainer.addEventListener('click',deleteHandler)