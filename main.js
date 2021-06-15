canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
background_image="https://i.postimg.cc/bv5d35nK/racing.jpg";
car1_image="https://i.postimg.cc/9rqYz9HM/car1.png";
car2_image="https://i.postimg.cc/tnnW1Kff/car2.png"
car1_x=10;
car1_y=10;
car2_x=10;
car2_y=100;

function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;

    car1_imgtag=new Image();
    car1_imgtag.onload=uploadCar1;
    car1_imgtag.src=car1_image;

    car2_imgtag=new Image();
    car2_imgtag.onload=uploadCar2;
    car2_imgtag.src=Car2_image;
}
function  uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}
function  uploadCar1(){
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height);

}
function  uploadCar2(){
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);

}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        car1_up();
        console.log("up");

    }
    if(keyPressed == '40'){
        car1_down();
        console.log("down");

    }
    if(keyPressed == '37'){
        car1_left();
        console.log("left");

    }
    if(keyPressed == '39'){
        car1_right();
        console.log("right");
    }

if(keyPressed == '87'){
    car2_up();
    console.log("w");

}
if(keyPressed == '83'){
    car2_down();
    console.log("s");

}
if(keyPressed == '65'){
    car2_left();
    console.log("a");

}
if(keyPressed == '68'){
    car2_right();
    console.log("d");
}
}
