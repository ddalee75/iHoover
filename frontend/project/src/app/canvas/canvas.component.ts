import { Component, ElementRef, OnInit, ViewChild, NgZone } from "@angular/core";



@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})



export class CanvasComponent implements OnInit {

  @ViewChild('canvas', {static:true}) myCanvas!: ElementRef; 
  commandes:string="";
  lengthString:number =this.commandes.length;
  x:number=250;
  y:number=200;
  i!:number;
 

  constructor() {}


  ngOnInit(): void {
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');
    if(context){

     console.log("XXX=" + String(this.lengthString));
      this.#drawTriangle(context);
      this.#drawArc(context);
      this.#drawCurve(context);
      this.#drawUsingPath(context);
      this.#drawText(context);

    }
  }

 
  #drawTriangle(context:CanvasRenderingContext2D){
      context.beginPath();
      context.moveTo(this.x + 25, this.y + 25);
      context.lineTo(this.x + 50 , this.y + 50 );
      context.lineTo(this.y + 50 , this.y + 50);
      context.fill();

    }
  #drawArc(context:CanvasRenderingContext2D){
     context.beginPath();
     context.fillStyle='red';
     context.arc(this.x, this.y, 25, (Math.PI/ 180) * 0, (Math.PI/180) * 360,  true);
     context.fill();
  // context.stroke();
  // colse.Path();
  }
 

  #drawCurve(context:CanvasRenderingContext2D){
    context.beginPath();
    context.moveTo(200,200);
    context.quadraticCurveTo(250, 50, 300, 200);
    context.stroke();

  }

  #drawUsingPath(context:CanvasRenderingContext2D){
    const retangle= new Path2D();
    retangle.rect(20,150,100,100);
    context.stroke(retangle);
  }

  #drawText(context:CanvasRenderingContext2D){
    context.fillStyle='black';
    context.shadowOffsetX= 4;
    context.shadowOffsetY= 4;
    context.shadowBlur=3;
    context.shadowColor= 'rgba(0,0,0,0.5)';
    context.font= '48px Arial';
    context.fillText('Hello', 100, 400);
  }


  animate(){
    
  }
  }




  



