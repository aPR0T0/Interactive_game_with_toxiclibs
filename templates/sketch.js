const express = require("express")
const app = express()

var toxi = require('toxiclibsjs');
var p5 = require('p5');

const templatePath =  path.join(__dirname, './')

app.use(express.json())
app.set("views", templatePath)

app.get("/", (req,res)=>{
    res.sendFile(templatePath + "home.html");   
})

let {VerletPhysics2D, VerletParticle2D, VerletSpring2D} = toxi.physics2d;
let physics; // Declaring a variable
let particle1;

function setup(){
    p5.createCanvas(640,360);
    p5.createCanvas(640, 360);

    physics = new VerletPhysics2D();
    particle1 = new VerletParticle2D(320,100);
}

function draw(){
    background(255);

    fill(255);
    circle(particle1.x, particle1.y, 16);
}

setup()
draw()

app.listen(3000,()=> {
    console.log("port connected");
})