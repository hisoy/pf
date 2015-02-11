var pageNum =68;

//(1~67)images sequence exists.

document.onkeyup = checkKey;

function checkKey(e) {
console.log(pageNum);
    e = e || window.event;
    
    //arrow key react
    if ((e.keyCode == '39')&&(pageNum <= 75)) {
        pageNum ++;
    }
    else if ((e.keyCode == '37')&&(pageNum > 70)){
        pageNum --;
    }
    
    //change image
     if (pageNum < 68){   
        var imageUrl = 'img/bg%20('+pageNum+").png";
        document.getElementById("bg").style.backgroundImage="url('"+ imageUrl + "')";
    }
    
    //first message
    if (pageNum > 3){
        document.getElementById("intro").style.display="none";
     }
    
    if (pageNum == 69){
        document.getElementById("intro").innerHTML = "Nice team work! <br>Team-work and iteration can be fun, at least we make some memories. <br> Hi, I'm Soyeon, an interaction designer. <br>I am passionate about conceptualization and quick prototyping. <br>This portfolio can be navigated through the logo in the bottom left or the right arrow key. <br>When you feel the click, contact me. I will probably feel the same about you.<br>More?<br><br><br><br><br><br><br>";
        document.getElementById("intro").style.display = "block";
        document.getElementById("logo").style.visibility="visible";
        }
    
    if (pageNum == 70){
        empty();    document.getElementById("youshare_field").style.display="block";
        document.getElementById("logo").style.visibility="visible";
        }

    if (pageNum == 71){
         empty();
        document.getElementById("lpify_field").style.display="block";
        document.getElementById("logo").style.visibility="visible";
        }
    if (pageNum == 72){
        empty();                document.getElementById("ryou_field").style.display="block";

        document.getElementById("logo").style.visibility="visible";
        }
    if (pageNum == 73){
         empty(); document.getElementById("vl_field").style.display="block";

        document.getElementById("logo").style.visibility="visible";
        }
    
       if (pageNum == 74){
         empty();
 document.getElementById("platypus_field").style.display="block";

        document.getElementById("logo").style.visibility="visible";
        }
    
    if (pageNum == 75){
         empty();
        document.getElementById("navpal_field").style.display="block";

        document.getElementById("logo").style.visibility="visible";
        }
      if (pageNum >= 76){
        empty(); document.getElementById("engage_field").style.display="block";

        document.getElementById("logo").style.visibility="visible";
        }

}

function content_open(page){
    empty();
        console.log(page)

    document.getElementById(page).style.display="block";
}
//emptying the page
function empty(){
    document.getElementById("intro").style.display="none";                    document.getElementById("youshare_field").style.display="none";
    document.getElementById("lpify_field").style.display="none";             document.getElementById("ryou_field").style.display="none";
    document.getElementById("vl_field").style.display="none";
    document.getElementById("platypus_field").style.display="none";
    document.getElementById("navpal_field").style.display="none";              document.getElementById("engage_field").style.display="none";
}

//image slider

function showImage(name){
    console.log("function works" + name);
      var bg = document.getElementsByClassName('main');
        for(var i = 0; i < bg.length; i++) {
            bg[i].style.backgroundImage = 'url("'+ name + '.png")';
        }
}


//logo
var menuOpen = 0;
function menu_open() {
    if (menuOpen == 0){
        startBall();
        var elems = document.getElementsByClassName('submenu');
        for(var i = 0; i < elems.length; i++) {
            elems[i].style.visibility = 'visible';
            console.log("show");
        }
        menuOpen = 1- menuOpen;

    }
    else{
        endBall();        
         menuOpen = 1- menuOpen;
    }

}


function startBall()
{
  timer2 = setTimeout(stepBall2, 3);
}


function endBall()
{
  timer2 = setTimeout(stepBall1, 3);
}


var timer2 = null;
var s = 10;
function stepBall1()
{    
var obj = document.getElementsByClassName('submenu');  
  
  for(var i = 0; i < obj.length; i++) {
    obj[i].style.left = -s +"px";
  }
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
    s = 10;     
  }
}


function stepBall2()
{    
var obj = document.getElementsByClassName('submenu');  
  for(var i = 0; i < obj.length; i++) {
    obj[i].style.left = 5*s +"px";

}
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
