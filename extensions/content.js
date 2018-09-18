

console.log("Welcome to chrome extension")

let paragraphs = document.getElementsByClassName('d-inline-flex ai-center ws-nowrap s-btn s-btn__primary')
for(elt of paragraphs){
  elt.style['background-color'] = '#FF00F0'
}

//for random clicks on the screen
var classname = document.getElementsByClassName("tagged-questions-page unified-theme new-topbar")
classname[0].addEventListener("click", getClickPosition, false);
function getClickPosition(e) {
    //var xPosition = e.clientX;
    //var yPosition = e.clientY;
    //console.log("x =" +xPosition + ", y= "+ yPosition + Date())

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/temp?key=value", true);
  xhttp.send(); // 2min......ur site (localhost) is not running in https...thats y error. yreah thats what i was tellling
  //https://stackoverflow.com/questions/11744975/enabling-https-on-express-js
  //use this link to setup https then it will work... yeahh okk ill try



}
// for asking a question
var classname = document.getElementsByClassName("d-inline-flex ai-center ws-nowrap s-btn s-btn__primary")
classname[0].addEventListener("click", askQuestion);
function askQuestion() {
    console.log("Question asked" + Date())
  }
var classname = document.getElementsByClassName("tagged-questions-page unified-theme new-topbar")
classname[0].addEventListener("wheel", myFunction);

  function myFunction() {
      console.log("scrolling")
  }
