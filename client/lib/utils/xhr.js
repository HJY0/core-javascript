/* readyState
  0: uninitalized // 초기화 
  1: loading // 로딩
  2: loaded // 로딩이 완료된 
  3: interactive // 인터랙티브
  4: complete // 완료 
*/


export function xhrData({
    url = '',
    method = 'GET',
    body = null,
    onSuccess = null,
    onFail = null
  }){

  const xhr = new XMLHttpRequest();

  // 비동기 통신 오픈
  xhr.open(method,url);

  // Object.entries(headers).forEach(([key,value])=>{
  //   xhr.setRequestHeader(key,value);
  // })

  xhr.addEventListener('readystatechange',()=>{
    const {status,readyState,response} = xhr;

    if(status >= 200 && status < 400){
      if(readyState === 4){
        console.log('통신 성공');
        onSuccess(JSON.parse(response));
        
      }
    } else {
      onFail('통신 실패');
    }
  })
  

  // 서버에 요청 (문자화)
  xhr.send(JSON.stringify(body));
}


// 비동기 통신 오픈
xhrData.get = (url,onSuccess,onFail)=>{
  xhrData({
    url,
    onSuccess,
    onFail
  })
}

xhrData.post = (body,url,onSuccess,onFail)=>{
  xhrData({
    method:'POST',
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.put = (body,url,onSuccess,onFail)=>{
  xhrData({
    method:'PUT',
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.delete = (body,url,onSuccess,onFail)=>{
  xhrData({
    method:'DELETE',
    url,
    onSuccess,
    onFail
  })
}


/* xhrData.post(
  'https://jsonplaceholder.typicode.com/users/1',
  {
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    }
  },
  (result)=>{
    console.log(result);
  },
  (err)=>{
    console.log(err);
  }
) */


/* xhrData({
  url: 'https://jsonplaceholder.typicode.com/user/1',
  onSuccess: (result)=>{
    console.log(result);
  },
  onFail: (err)=>{
    console.error(err);
  }
}) */


/* xhrData('POST','https://jsonplaceholder.typicode.com/users',{
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}); */