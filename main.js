var pageNum = 70;



document.onkeyup = checkKey;




function checkKey(e) {
    document.getElementById('logo').style.display = "block";
    e = e || window.event;
    if (e.keyCode == '39') {
        if (pageNum < 68){   
            var imageUrl = 'img/bg%20('+ pageNum + ").png";
            document.getElementById("bg").style.backgroundImage="url('"+ imageUrl + "')";
            console.log(imageUrl);
                    }
        if (pageNum < 3){
            document.getElementById("text").innerHTML = "Hey, could you hit the right arrow key and help us move this car?</br></br></br></br></br></br></br></br></br></br></br></br>";
        }
        else if (pageNum == 69){
            document.getElementById("text").innerHTML = "Nice team work! Will you press the key again?</br></br></br></br></br></br></br></br></br></br></br></br>";
        }
        else if (pageNum >= 70){
            document.getElementById("text").innerHTML = "Hi, I'm Soyeon Hwang, an experience designer.</br>I am passionate about concpets and discourse and obviously enjoy team-work and iteration. </br> This portfolio can be navigated through the logo in the bottom left corner or the right arrow key. </br>contact & more </br></br></br></br></br></br></br></br></br>";
            document.getElementById("logo").style.visibility="visible";
        }
        else {
            document.getElementById("text").innerHTML = "";
        }
        pageNum ++;

    }

}


var timer2 = null;
var s = 10;

function stepBall2()
{    
var obj = document.getElementsByClassName('submenu');  
  
  for(var i = 0; i < obj.length; i++) {
    obj[i].style.left = 5*s +"px";

}
  console.log(s);

  s++;


  if (s<15)
  {
    timer2 = setTimeout(stepBall2, 3);
  }
  else if (s<22)
  {
    timer2 = setTimeout(stepBall2, 4);
  }
  else if (s<24)
  {
    timer2 = setTimeout(stepBall2, 6);
  }
  else
  {
    s = 10;     // so we can do it again
  }
}

function startBall2()
{

  timer2 = setTimeout(stepBall2, 3);
}

var menuOpen = 0;

function menu_open() {
      console.log("clicked");

    if (menuOpen === 0){
            console.log("0");
var elems = document.getElementsByClassName('submenu');
for(var i = 0; i < elems.length; i++) {
      elems[i].style.visibility = 'visible';

    startBall2();
    menuOpen = 1- menuOpen;
}
                      }
    
    else{
            console.log("1");
var elems = document.getElementsByClassName('submenu');
for(var i = 0; i < elems.length; i++) {
    elems[i].style.visibility = 'hidden';
    elems[i].style.left = 0 + "px";

    menuOpen = 1- menuOpen;
}
      }
}
