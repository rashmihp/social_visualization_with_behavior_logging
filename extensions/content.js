

console.log("Welcome to chrome extension")

let paragraphs = document.getElementsByClassName('d-inline-flex ai-center ws-nowrap s-btn s-btn__primary')
for(elt of paragraphs){
  elt.style['background-color'] = '#FF00F0'
}
//for random clicks on the screen
var classname = document.getElementsByClassName("tagged-questions-page unified-theme new-topbar")
classname[0].addEventListener("click", getClickPosition, false);
function getClickPosition(e) {
    var d = new Date()
    var xPosition = e.clientX;
    var yPosition = e.clientY;

    console.log("x =" +xPosition + ", y= "+ yPosition + d.getHours()+":"+d.getMinutes()+":"+d.getSeconds())
    var myObj = { x: xPosition, y: yPosition, date: d.getHours()+":"+d.getMinutes()+":"+d.getSeconds() };
    var myJSON = JSON.stringify(myObj);
    console.log(myObj);

}

var classname = document.getElementsByClassName("d-inline-flex ai-center ws-nowrap s-btn s-btn__primary")
classname[0].addEventListener("click", askQuestion);
function askQuestion() {
    var d = new Date()
    console.log("Question asked" + d.getHours()+":"+d.getMinutes()+":"+d.getSeconds())
  }
var classname = document.getElementsByClassName("tagged-questions-page unified-theme new-topbar")
classname[0].addEventListener("wheel", myFunction, false);

  function myFunction(e) {
      var d = new Date()
      var xPosition = e.clientX;
      var yPosition = e.clientY;
      console.log("scrolling " + " x = " + xPosition + " y = " + yPosition + "time:" + d.getHours()+":"+d.getMinutes()+":"+d.getSeconds())
  }


  $(document).ready(function() {
    console.log('jquery loaded');
    $('tagged-questions-page unified-theme new-topbar').click(function() {
      var x = this.clientX
      var y = this.clientY
      let url = "https://project-aw.herokuapp.com/temp/" + x + "/" + y
      $.get(url, function(res) {
        console.log("Sent from server")
        console.log("X: " + res.x + " Y: " + res.y);
      })
    })

  })
