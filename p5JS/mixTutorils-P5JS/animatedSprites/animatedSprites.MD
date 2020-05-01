#### load a sprite sheet and create multiple animated sprites with the p5.js

**Making** animation with one picture.

```javascript
let spritesheet;// variable for image.
let spritedata;// variable for the data. 

let animation = [];// it will be any array for each clip of animation.

function preload(){
    spritedata = loadJSON('sketch.json');
    spritesheet = loadImage('horse/horse-run-00.png');
}

function setup (){
    createCanvas(600, 600);
    let frames = spritedata.frames;
    for (let i = 0; i < frames.length; i++){
       // to know about every picture possition, which is important x, y, h
        let pos = frames[i].position;
        // get() is p5 function which allow you to select an image or a part of image.
        let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
        animation.push(img)
    }
    console.log(spritedata);
}

function draw(){
    background(0);
    image(animation[frameCount % animation.length], 0, 0);
 // The Operator's modulo is modulus of animation.length.
 /* what this operation do in side this code, the modulo operation is giving the modulus value between 0 to 7 in this code*/
}
```