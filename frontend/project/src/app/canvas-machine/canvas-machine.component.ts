import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Machine } from '../models/machine';
import {Map} from '../models/map';


@Component({
  selector: 'app-canvas-machine',
  templateUrl: './canvas-machine.component.html',
  styleUrls: ['./canvas-machine.component.css']
})

export class CanvasMachineComponent {
@ViewChild('canvas') myCanvas!:ElementRef;
imgWidth:   number=50;
imgHeight:  number=50;
img = new Image(this.imgWidth,this.imgHeight); 
instruction:string ="";
lengthString!: number;
message!: string;
showMessage:boolean =false;
grilleX!:number;
grilleY!:number;
affiche:boolean=false;

machine:Machine ={
  x : 250,
  y : 200,
  angle : 0,
  oldx: 250,
  oldy: 200,
}

map: Map ={
  x : 0,
  y : 0,
  height: 500,
  width:  500,
}

ngAfterViewInit(): void {
  this.img.src= "../../assets/vc_up.png";
  this.img.onload= ()=>{
    const canvas:HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');
    if (context){
    context.drawImage(this.img, this.machine.x, this.machine.y, 50, 50);
    }
  }
  
}

ngOnInit(){
  this.getPosition();
}

async start(){
  let i = 0;
  this.lengthString = this.instruction.length;
  this.checkInput();
  while (i < this.lengthString)
  {
    if(this.instruction[i]=="D")
      this.turnRight();
    if (this.instruction[i]=="G")
      this.turnLeft();
    if (this.instruction[i]=="A")
    {
      this.move(); 
      await this.delay(10);
      if (this.machine.x!= this.machine.oldx || this.machine.y != this.machine.oldy)  
      {
        this.delImage();
      }
    }
  
    i++;
    
    await this.delay(200);
  }
}


checkInput(){
  let i = 0;
  this.lengthString = this.instruction.length;
  if (this.instruction==""){
      this.message = "Please Input the instruction ! D G or A";
      this.showMessage=true;
  }
  while(i < this.lengthString){
    if (this.instruction[i]!="D" && this.instruction[i]!="G" && this.instruction[i]!="A")
    {
      this.message = "Please Input ONLY D G or A in uppercase";
      this.showMessage=true;
      break;
    }
    i++;
  }
}

async delay(ms: number) 
{
  return new Promise( resolve => setTimeout(resolve, ms) );
}

delImage()
{
  this.selectImg();
  this.img.onload= ()=>{
    const canvas:HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');
    if (context){
      context.clearRect(this.machine.oldx, this.machine.oldy, this.imgWidth, this.imgHeight);    
    }
  }
}

selectImg()
{
  if(this.machine.angle == 0)
  {
    this.img.src="../../assets/vc_up.png";
  } 
  if (this.machine.angle == 90)
  {
    this.img.src="../../assets/vc_right.png";
  }
  if (this.machine.angle == 180)
  {
    this.img.src="../../assets/vc_down.png";
  }
  if (this.machine.angle == 270)
  {
    this.img.src="../../assets/vc_left.png";
  }
}

showImg()
{
  this.img.onload= ()=>
  {
    const canvas:HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');
    if (context)
    {
    context.drawImage(this.img, this.machine.x, this.machine.y, this.imgWidth, this.imgHeight);
    }
  }
}

turnRight()
{
  this.machine.angle +=90;
  if (this.machine.angle ==360)
    this.machine.angle = 0;
  this.selectImg();
  this.showImg();
}


turnLeft()
{
  this.machine.angle -= 90;
  if (this.machine.angle < 0)
    this.machine.angle=this.machine.angle + 360;
  this.selectImg();
  this.showImg();
}

move()
{
  if (this.machine.angle == 0)
  {
    this.machine.oldx=this.machine.x;
    this.machine.oldy=this.machine.y;
    this.machine.y -= this.imgHeight;
    if (this.machine.y < 0)
    {
      this.machine.y = 0;
    }
  }

  if (this.machine.angle == 90)
  {
    this.machine.oldx=this.machine.x;
    this.machine.oldy=this.machine.y
    this.machine.x += this.imgWidth; 
    if (this.machine.x == this.map.width)
      this.machine.x = this.map.width - this.imgWidth;
  }
  if (this.machine.angle == 180)
  {
    this.machine.oldx=this.machine.x;
    this.machine.oldy=this.machine.y;
    this.machine.y += this.imgHeight;
    if (this.machine.y == this.map.height)
      this.machine.y = this.map.height-this.imgHeight;
  }
  if (this.machine.angle == 270)
  {
    this.machine.oldx=this.machine.x;
    this.machine.oldy=this.machine.y;
    this.machine.x -= this.imgWidth;
    if (this.machine.x <0)
        this.machine.x = 0;
  }
  this.selectImg();
  this.showImg();
  this.getPosition();
}



async clickMove(){
  if (!this.affiche)
  {
    this.affiche = true;
    this.move();
    await this.delay(10);
    if (this.machine.x!= this.machine.oldx || this.machine.y != this.machine.oldy)  
    {
      this.delImage();
    }
    this.affiche = false;
  }
}


getPosition(){
  this.grilleX= this.machine.x / this.imgWidth;
  this.grilleY= 10 - ((this.machine.y / this.imgHeight) +1);
}

receiveShowMessageEvent($event:boolean){
  this.showMessage= $event;
}


}

