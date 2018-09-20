

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

    // console.log("x =" +xPosition + ", y= "+ yPosition + d.getHours()+":"+d.getMinutes()+":"+d.getSeconds())
    var myObj = { x: xPosition, y: yPosition, date: d.getHours()+":"+d.getMinutes()+":"+d.getSeconds() };
    var myJSON = JSON.stringify(myObj);
    //console.log(myObj);

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
      //console.log("scrolling " + " x = " + xPosition + " y = " + yPosition + "time:" + d.getHours()+":"+d.getMinutes()+":"+d.getSeconds())
  } // its from here..okok...comment it offf..


  $(document).ready(function() {

    // this is the begining of jqyery code..
    console.log('jquery loaded');
    $('.tagged-questions-page, .unified-theme, .new-topbar').click(function(e) {
      let x = e.pageX
      let y = e.pageY
      console.log('here');
      console.log(x,y)
      let url = "https://project-aw.herokuapp.com/temp/" + x + "/" + y
      $.ajax({
        type: "GET",
        url: url,
        success: function (res) {
          console.log('server response')
          console.log(JSON.stringify(res))
        }
      })
    })
    $('.d-inline-flex, .ai-center, .ws-nowrap, .s-btn, .s-btn__primary').click(function(e){
      var x,d = new Date()
      let x = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
      console.log(x)
      let url = "https://project-aw.herokuapp.com/ask_question/" + x //
      $.ajax({
        type: "GET",
        url: url,
        success: function (res) {
          console.log('server response ask')
          console.log(JSON.stringify(res))
        }
      })
    })
    $(document).scroll(function(e){
      var d = new Date()
      let x = $(document).scrollTop()
      let y = $(document).scrollLeft()
      let z = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
      console.log('scroll fired ' + x) //try now...shrink the window size..height of what? browser
      let url = "https://project-aw.herokuapp.com/scroll/" + x + "/" + y + "/" + z
      $.ajax({
        type: "GET",
        url: url,
        success: function (res) {
          console.log('server response scroll')
          console.log(JSON.stringify(res))
        }
      })
    }) // wrap this whole thing in a function n call it maybe something like detect scroll...
      // include underscore.js library just like how u included jquery, and add the two lines given on that page to the begining of jquery code...



  })
