/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */


/* 버블링 ----------------------------------------------------------------- */


const visual = getNode('.visual');
const news = getNode('.news');
const desc = getNode('.desc');


visual.addEventListener('click',function(e){
  // console.log(e.target);
  // console.log(e.currentTarget);
  console.log(this); // == e.currentTarget 근데 this는 arrowFunction에서 사용X
  console.log('%c visual','background:dodgerblue;color:black');
  css('.pop','display','block');
})


getNode('.pop').addEventListener('click',(e)=>{
  e.stopPropagation();
  css('.pop','display','none');
})


// news.addEventListener('click',function(e){
//   e.stopPropagation();
//   console.log('%c news','background:orange;color:black');
// })

// desc.addEventListener('click',function(e){
//   e.stopPropagation();
//   console.log('%c desc','background:hotpink;color:black');
// })


/* 캡처링 ----------------------------------------------------------------- */