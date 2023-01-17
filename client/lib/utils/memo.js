


export const memo = (key,callback) => {
  const cache = {}

  return (key,callback) => {

    if(!callback) return cache[key];

    if(cache[key]){
      console.warn('이미 캐시된 값이 존재합니다.');
      return;
  }

  cache[key] = callback();

  }
}


memo('cube',()=> document.querySelector('#cube'))
memo('cube',()=> '이것은 큐브')