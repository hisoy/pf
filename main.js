var pageNum =69;



document.onkeyup = checkKey;




function checkKey(e) {
             console.log(pageNum);

    document.getElementById('logo').style.display = "block";
    e = e || window.event;
    if (e.keyCode == '39') {
        pageNum ++;
    }
    else if ((e.keyCode == '37')&&(pageNum > 70)){
          pageNum --;
    }
    
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
            document.getElementById("text").innerHTML = "Team-work and iteration can be fun, right? <br> I am Soyeon, an interaction designer who is passionate about conceptualization and quick-prototyping. <br><br>This portfolio can be navigated through the logo in the bottom left or the right arrow key. <br>When you feel the click, contact me. I will probably feel the same about you.<br><br><br><br><br><br><br><br>";
            
            document.getElementById("logo").style.visibility="visible";
        }
    
    
        else {
            document.getElementById("text").innerHTML = "";
        }

}





var menuOpen = 0;

function menu_open() {
      console.log("clicked");

    if (menuOpen === 0){
        startBall();
        var elems = document.getElementsByClassName('submenu');
        for(var i = 0; i < elems.length; i++) {
            elems[i].style.visibility = 'visible';
        }
        menuOpen = 1- menuOpen;

    }
    
    else{
        endBall();
        
         menuOpen = 1- menuOpen;
    }
        console.log("this/"+menuOpen);

}





function startBall()
{
  timer2 = setTimeout(stepBall2, 3);
}


function endBall()
{
    console.log("iknow youwill");
  timer2 = setTimeout(stepBall1, 3);
    console.log("whataboutthis");
}





var timer2 = null;
var s = 10;
function stepBall1()
{    
console.log("stepin");
var obj = document.getElementsByClassName('submenu');  
  
  for(var i = 0; i < obj.length; i++) {
    obj[i].style.left = -s +"px";
  }
  console.log(s);

  s++;


  if (s<15)
  {
    timer2 = setTimeout(stepBall1, 1);
  }
  else if (s<22)
  {
    timer2 = setTimeout(stepBall1, 3);
  }
  else if (s<24)
  {
    timer2 = setTimeout(stepBall1, 4);
  }
  else
  {
      var elems = document.getElementsByClassName('submenu');

      for(var i = 0; i < elems.length; i++) {
            console.log("hide");
            elems[i].style.visibility = 'hidden';
        }
    s = 10;     // so we can do it again
  }
}


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
