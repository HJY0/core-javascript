const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const done = getNode('#done');
const result = getNode('.result');

// 내 코드
/* function clearText(target){
  target.value = "";
}


function handler(e){
  e.preventDefault();

  let value = parseInt(first.value) + parseInt(second.value);
  
  if(value) {
    result.innerHTML = value; // innerHTML은 보안이 안 좋음 (textContent 쓰기)

    clearText(first);
    clearText(second);
  }

}

done.addEventListener('click',handler); */


// 범쌤 코드 (함수형 프로그램을 지향하자)
function getInputValue(node){ // 재사용성을 고려해서 만듬
  if(typeof node === 'string') node = getNode(node);
  if(node.tagName !== 'INPUT') ReferenceError('getInputVlaue 함수는 INPUT ELEMENT만 허용');
  return node.value;
}


const sum = (valueA,valueB) => valueA + valueB;


function clearContents(node){
  if(typeof node === 'string') node = getNode(node);
  node.textContent = '';
}


function handler(e){
  e.preventDefault();

  let firstValue = +getInputValue(first);
  let secondValue = +getInputValue(second);

  let total = sum(firstValue, secondValue);

  clearContents('.result');

  insertLast('.result',total);

}


function inputHandler(){
  let firstValue = +getInputValue(first);
  console.log(firstValue);
}


done.addEventListener('click',handler);

first.addEventListener('change',inputHandler);