import { Component, AfterViewInit, ElementRef, OnInit,ViewChild } from '@angular/core';
import { RouterState } from '@angular/router';
import { Machine } from '../models/machine';
import { Map } from '../models/map';

@Component({
  selector: 'app-canvas-img',
  templateUrl: './canvas-img.component.html',
  styleUrls: ['./canvas-img.component.css']
})

export class CanvasImgComponent implements AfterViewInit{
@ViewChild('canvas') myCanvas!: ElementRef;


img = new Image(50,50);
instruction:string ="";
lengthString!:number ;
i!:number;
machine: Machine={
  x: 250,
  y: 200,
  angle: 90, 
  oldx: 250,
  oldy: 200,
}
// direction: Direction{
//   x: 
// }



ngAfterViewInit(): void{
  //this.processImage();

  this.img.src = "../../assets/up.png";
  
  this.img.onload= () => {
    const canvas:HTMLCanvasElement =this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');
        if (context){
               
    context.drawImage(this.img, this.machine.x, this.machine.y, 50, 50);    
          
    }


    
  }


}

async ft_do(){
  this.lengthString=this.instruction.length;
  let j = 0;
  while(j < this.lengthString)
  {
    
    if (this.instruction[j]=="A"){
      this.goAhead();
    }else if(this.instruction[j]=="G"){
      this.turnLeft();
    }else if(this.instruction[j]=="D"){
      this.turnRight();
    }
    this.print();
    await this.delay(500);

    j++;
  }
}

async delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

ngOnInit():void{



}

processImage(){
    
  this.img.src = "../../assets/up.png";
  
  this.img.onload= () => {
    const canvas:HTMLCanvasElement =this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');
        if (context){
               
      context.drawImage(this.img, this.machine.x, this.machine.y, 50, 50);    

          
    }


    
  }

  
}

animate(){
  // this.lengthString=this.instruction.length;
  // console.log(this.instruction);
  // console.log("yyyyy=" + String(this.lengthString));
  // console.log(this.instruction[0]);

  if (this.instruction[0]=="A"){
    this.goAhead();
  }else if(this.instruction[0]=="G"){
    this.turnLeft();
  }else if(this.instruction[0]=="D"){
    this.turnRight();
  }


 

}

turnRight(){
  this.machine.angle += 90;
  if (this.machine.angle >= 360)
  {
    this.machine.angle = this.machine.angle - 360;
  }
  this.select_img();
}

turnLeft(){
  this.machine.angle -= 90;
  if (this.machine.angle < 0)
  {
    this.machine.angle = this.machine.angle + 360;
  }
  this.select_img();
}

goAhead(){
  if (this.machine.angle == 0)
  {
    this.machine.x -= 50;
    if(this.machine.x < 0)
      this.machine.x = 0;
  }
  if (this.machine.angle == 90)
  {
    this.machine.y -= 50;
    if(this.machine.y < 0)
      this.machine.y = 0;
  }

if (this.machine.angle == 180)
  {
    this.machine.x += 50;
    if(this.machine.x > 500)
      this.machine.x = 500;
  }

  if (this.machine.angle == 270)
  {
    this.machine.y += 50;
    if(this.machine.y > 500)
      this.machine.y = 500;
  }
  this.select_img();
  console.log(this.machine.y / 50);
  console.log(this.machine.x / 50);
  
}

select_img(){
  if(this.machine.angle == 0)
  {
    this.img.src = "../../assets/left.png";
  }
  if(this.machine.angle == 90)
  {
    this.img.src = "../../assets/up.png";
  }
  if(this.machine.angle == 180)
  {
    this.img.src = "../../assets/right.png";
  }
  else{
    if(this.machine.angle == 270)
  {
    this.img.src = "../../assets/down.png";
  }
  }

}

print(){
  this.img.onload= () => {

    const canvas:HTMLCanvasElement =this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');
    if (context){
      // context.clearRect(this.machine.x, this.machine.y, 50,50);
      context.drawImage(this.img, this.machine.x, this.machine.y, 50, 50);
     
  
     }
  }
}

// turnRight(){
//   this.img.src = "../../assets/right.png";
//   this.img.onload= () => {
//     const canvas:HTMLCanvasElement =this.myCanvas.nativeElement;
//     const context = canvas.getContext('2d');
//     if (context){
              
//       context.drawImage(this.img, this.machine.x, this.machine.y, 50, 50);
  
//      }
//   }
  
// }

// turnLeft(){
//   this.img.src = "../../assets/left.png"
  
//   this.img.onload= () => {
//     const canvas:HTMLCanvasElement =this.myCanvas.nativeElement;
//     const context = canvas.getContext('2d');
//     if (context){
            
//       context.drawImage(this.img, this.machine.x, this.machine.y, 50, 50);
  
  
//      }
//   }
// }

// goAhead(){
//   this.machine.x = this.machine.x + 50;
//   this.img.src = "../../assets/goAhead.png";
  
//   this.img.onload= () => {
//     const canvas:HTMLCanvasElement =this.myCanvas.nativeElement;
//     const context = canvas.getContext('2d');
//     if (context){
      
        
//       context.drawImage(this.img, this.machine.x, this.machine.y, 50, 50);
//       this.machine.x = this.machine.x -50;
//       context.clearRect(this.machine.x, this.machine.y, 50, 50);
//       this.machine.x =this.machine.x +50;
//      }
//   }
   
}

