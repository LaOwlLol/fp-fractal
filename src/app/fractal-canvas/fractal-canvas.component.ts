import { Component, OnInit, OnChanges, DoCheck, ViewChild, ElementRef} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { FractalDataService } from '../fractal-data.service';
import { Pixel } from '../pixel';

@Component({
	selector: 'fractal-canvas',
	templateUrl: './fractal-canvas.component.html',
	styleUrls: ['./fractal-canvas.component.css'],
	providers: [FractalDataService]
})

export class FractalCanvasComponent implements OnInit {

	@ViewChild('fractalCanvas') canvasRef: ElementRef;
	canvasContext: CanvasRenderingContext2D;
	pixelBuffer: any;

	private running: boolean;

	constructor(private fractalService: FractalDataService) { }

	ngOnInit() {

		//console.log("w: "+this.width+" h: "+this.height);
		
		//this.running = true;
		this.canvasContext = this.canvasRef.nativeElement.getContext('2d');
		this.canvasRef.nativeElement.width = this.fractalService.getWidth();
		this.canvasRef.nativeElement.height = this.fractalService.getHeight();
		//this.canvasRef.nativeElement.style.width = this.fractal.width;
		//this.canvasRef.nativeElement.style.height = this.fractal.height;

		this.pixelBuffer = this.fractalService.getPixels().subscribe( p =>  this.paint(p) );
	}

	ngOnDestroy() {
    	//this.running = false;
    	this.pixelBuffer.unsubscribe();
  	}

  	ngOnDoCheck() {
  		//this.pixelBuffer.unsubscribe();
  		this.pixelBuffer = this.fractalService.getPixels().subscribe( p =>  this.paint(p) );
  	}

  	ngOnChanges() {
  	}
 
 	private paint(pixel: Pixel) {

 		/*
 		if (!this.running) {
 			return;
 		}
 		*/

 		//console.log(pixel.c);
		this.canvasContext.fillStyle = pixel.c;
		this.canvasContext.fillRect(pixel.x, pixel.y, 1, 1);

		/*

		let ctx: CanvasRenderingContext2D =
		  this.canvasRef.nativeElement.getContext('2d');

		for (let {x, y, c} of this.fractal.pixelData) {
			ctx.fillStyle = c;
			ctx.fillRect(x, y, 1, 1);
		}

		*/
		
		//requestAnimationFrame(() => this.paint());
 	}
  
}
