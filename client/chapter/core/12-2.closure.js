/* eslint no-unused-vars: off */


function earth() {



  function tiger() {

  }


  return tiger

}




function handler() {
  let isClicked = false;

  return function () {
    if (isClicked === true) {
      // this = .first
      this.style.background = "transparent";
    } else {
      this.style.background = "red";
    }

    isClicked = !isClicked;
  };
}

document.querySelector(".first").addEventListener("click", handler());