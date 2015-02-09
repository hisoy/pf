//logo down css

var menuOpen = 0;

function showImage(name){
    console.log("function works" + name);
      var bg = document.getElementsByClassName('main');
        for(var i = 0; i < bg.length; i++) {
            bg[i].style.backgroundImage = 'url("ryou/'+ name + '.jpg")';
        }
}


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
