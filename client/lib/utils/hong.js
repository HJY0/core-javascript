


const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body:null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect:'follow',
  referrerPolicy:'no-referrer',
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }
}


export const hong = async (optins = {}) => {

  // 합성해서 나온 결과의 url만 빼고 받아라 라는 의미 / 합성과 동시에 추출 하는 코드
  const {url, ...restOptions} = {
    ...defaultOptions,
    ...optins,
    headers: {...defaultOptions.headers, ...optins.headers} // 얕복을 한 번 더 한 거
  }

  let response = await fetch(
    'https://jsonplaceholder.typicode.com/users/1',
    {
      method:'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    }
  )

  if(response.ok){
    response.data = await response.json()
  }

  return response;

}


hong.get = (url,options) => {
  return hong({
    url,
    ...options
  })
}

hong.post = (url,body,options) => {
  return hong({
    method:'POST',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

hong.put = (url,body,options) => {
  return hong({
    method:'PUT',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

hong.delete = (url,options) => {
  return hong({
    method:'DELETE',
    url,
    ...options
  })
}