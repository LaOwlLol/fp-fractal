import { Component, OnInit, OnChanges, OnDestroy, DoCheck, ViewChild, ElementRef} from '@angular/core';

import { Subscription } from 'rxjs/Rx';

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
	pixelSubscription: Subscription;

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

		this.pixelSubscription = this.fractalService.getPixelSubscription( (n) => this.paint(n) );

	}

	ngOnDestroy() {
    	this.pixelSubscription.unsubscribe();
  	}

  	ngOnDoCheck() {
  		//this.pixelBuffer.unsubscribe();
  		//this.pixelBuffer = this.fractalService.getPixels().subscribe( p =>  this.paint(p) );
  	}

  	ngOnChanges() {
  	}
 
  	paint(pixel: Pixel) {

		this.canvasContext.fillStyle = pixel.c;
		this.canvasContext.fillRect(pixel.x, pixel.y, 1, 1);

 	}
  
}
