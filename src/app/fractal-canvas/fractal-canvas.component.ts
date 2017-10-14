import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input} from '@angular/core';

import { Pixel } from '../pixel';

@Component({
	selector: 'fractal-canvas',
	templateUrl: './fractal-canvas.component.html',
	styleUrls: ['./fractal-canvas.component.css']
})

export class FractalCanvasComponent implements OnInit {

	@Input('data') data: Pixel[];
	@Input('width') width: number;
	@Input('height') height: number;
	@ViewChild('fractalCanvas') canvasRef: ElementRef;

	private running: boolean;

	constructor() { }

	ngOnInit() {
		this.canvasRef.nativeElement.width = this.width;
		this.canvasRef.nativeElement.height = this.height;
		//this.running = true;
		this.paint();
	}

	ngOnDestroy() {
    	//this.running = false;
  	}

  	ngOnChanges() {
  		this.paint();
  	}
 
 	private paint() {

 		/*
 		if (!this.running) {
 			return;
 		}
 		*/

 		let ctx: CanvasRenderingContext2D =
		  this.canvasRef.nativeElement.getContext('2d');

		for (let {x, y, c} of this.data) {
			ctx.fillStyle = c;
			ctx.fillRect(x, y, 1, 1);
		}
		
		//requestAnimationFrame(() => this.paint());
 	}
  
}
