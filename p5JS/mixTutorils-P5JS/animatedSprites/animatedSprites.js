let spritesheet;// variable for image.
let spritedata;// variable for the data. 

let animation = [];

function preload(){
    spritedata = loadJSON('animatedSprites.json');
    spritesheet = loadImage('horse/horse-run-00.png');
}

function setup (){
    createCanvas(600, 600);
    let frames = spritedata.frames;
    for (let i = 0; i < frames.length; i++){

        let pos = frames[i].position;

        let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
        animation.push(img)
    }
    console.log(spritedata);
}

function draw(){
    background(0);
    image(animation[frameCount % animation.length], 0, 0);