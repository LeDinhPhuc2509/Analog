document.addEventListener("DOMContentLoaded",function(){
    var body = document.querySelector("body");
    var checked = document.querySelector(".app-3d-checkbox");
    var iphonex = document.querySelector(".iphoneX");
    var screenoff = document.querySelector(".screen-off");
    var borderscreen = document.querySelector(".border-screen");
    var light = document.querySelector(".light");
    var light2 = document.querySelector(".light2");
    var glasses = document.querySelector(".glasses");
    var image3d = document.querySelector(".image-3d");
    var star1 = document.querySelector(".star1");
    var star2 = document.querySelector(".star2");
    var clouds = document.querySelector(".clouds");
    var image = document.querySelector(".image-3d img");
    var notephone = document.querySelector(".note-phone");
    var backgroundiphoneX = document.querySelector(".background-iphoneX");
    
    checked.addEventListener("change",function(){
        if(checked.checked){
          body.classList.add("body-off");
          iphonex.classList.add("rotate-iphoneX");
          screenoff.style.zIndex = "3";
          screenoff.style.background = "linear-gradient(45deg,#7A8B8B,#000)";
          backgroundiphoneX.style.display = "none";
          setTimeout(function(){
            borderscreen.style.display = "block";
            light.style.display = "block";
            light2.style.display = "block";
            glasses.style.display = "block";
            star1.style.display = "block";
            star2.style.display = "block";
           clouds.style.display = "block";
             setTimeout(function(){
               image3d.style.display = "block";
             },2000);
          },2500);
        }
     });
    
    image3d.addEventListener("click",function(){
       borderscreen.style.display = "none";
       light.style.display = "none";
       light2.style.display = "none";
       glasses.style.display = "none";
       image3d.style.display = "none";
       star1.style.display = "none";
       star2.style.display = "none";
       clouds.style.display = "none";
       body.classList.remove("body-off");
       iphonex.classList.remove("rotate-iphoneX");
       screenoff.style.zIndex = "3";
       backgroundiphoneX.style.display= "block";
       setTimeout(function(){ 
         screenoff.style.zIndex = "-1";
         screenoff.style.background = "#000";
       },2200);
       
    });
  });