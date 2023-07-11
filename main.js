canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var canvas_images = ["mars.jpg", "pic1.jpg", "pic2.jpg", "pic3.jpg"];
var random_number = Math.floor(Math.random() * 4);
console.log(random_number);

rover_width = 100;
rover_height = 90;

rover_x = 20;
rover_y = 20;

background_image = canvas_images[random_number];
rover_image = "rover.png";

function add() {
    background_img = new Image();
    background_img.onload = upload_background();
    background_img.src = background_image;

    rover_img = new Image();
    rover_img.onload = upload_rover();
    rover_img.src = rover_image;
}

function upload_background() {
   ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function upload_rover() {
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
 }

 canvas.addEventListener("keydown", my_keydown);

 function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed == '38') {
      up();
      console.log("up");
    }

    if (keypressed == '40') {
      down();
      console.log("down");
    }

    if (keypressed == '39') {
      right();
      console.log("right");
    }

    if (keypressed == '37') {
      left();
      console.log("left");
    }
 }

 function left() {
   if(rover_x >= 0) {
      rover_x = rover_x - 10;
      upload_background();
      upload_rover();
   }

 }

 function right() {
   if(rover_x <= 800) {
      rover_x = rover_x + 10;
      upload_background();
      upload_rover();
   }

 }

 function up() {
   if(rover_y >= 0) {
      rover_y = rover_y - 10;
      upload_background();
      upload_rover();
   }

 }

 function down() {
   if(rover_y <= 600) {
      rover_y = rover_y + 10;
      upload_background();
      upload_rover();
   }

 }


