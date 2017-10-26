import { OnChanges } from '@angular/core';

import {Observable} from 'rxjs/Rx';
import { Pixel } from './pixel';

export class Fractal {

	//dirtyPixels: boolean;
	dirtyPalette: boolean;
	minX: number;
	maxX: number;
	minY: number;
	maxY: number;
	width: number;
	height: number;
	iterations: number;
	escapeColor: string;
	lowColor: string;
	highColor: string;
	palette: string[];

	minXBuffer: Observable<Observable<number>>;
	maxXBuffer: Observable<Observable<number>>;
	minYBuffer: Observable<Observable<number>>;
	maxYBuffer: Observable<Observable<number>>;
	widthBuffer: Observable<Observable<number>>;
	heightBuffer: Observable<Observable<number>>;
	iterationsBuffer: Observable<Observable<number>>;
	pixelBuffer: Observable<Observable<Pixel>>;
	//observer: any;

	constructor(_minX: number, _maxX: number, _minY: number, _maxY: number,
		_width: number, _height: number, _iter: number,
		_escapeColor: string, _lowColor: string, _highColor: string) {

		//this.dirtyPixels = true;
		this.dirtyPalette = true;
		this.minX = _minX;
		this.maxX = _maxX;
		this.minY = _minY;
		this.maxY = _maxY;
		this.width = _width;
		this.height = _height;
		this.iterations = _iter;
		this.escapeColor = _escapeColor;
		this.lowColor = _lowColor;
		this.highColor = _highColor;

		//reoccuring observable on a timer
		let timer = Observable.timer(300);

		//range of pixels
		let pixelSource = Observable.range(0, this.width*this.height);

		//map pixels to the escape test function 
		this.pixelBuffer = pixelSource.map(x => {
			return this.escapeTestPixel(x);
		}).window(timer);

		// "Edges" min and max x and Y values
		let minXSource = Observable.of(this.minX);
		let minYSource = Observable.of(this.minY);
		let maxXSource = Observable.of(this.maxX);
		let maxYSource = Observable.of(this.maxY);

		this.minXBuffer = minXSource.window(timer);
		this.minYBuffer = minYSource.window(timer);
		this.maxXBuffer = maxXSource.window(timer);
		this.maxYBuffer = maxYSource.window(timer);

		let iterationSource = Observable.of(this.iterations);
		this.iterationsBuffer = iterationSource.window(timer);
		
	}

	ngOnChanges() {
  		//this.refreshPixelData(this.observer);
  	}

	/*DirtyPixels(value) {
		this.dirtyPixels = value;
	}*/

	DirtyPalette(value) {
		this.dirtyPalette = value;
	}

	MinX(newMin) {
		this.minX = newMin;
	}

	MaxX(newMax) {
		this.maxX = newMax;
	}

	MinY(newMin) {
		this.minY = newMin;
	}

	MaxY(newMax) {
		this.maxY = newMax;
	}

	Width(newWidth) {
		this.width = newWidth;
	}

	Height(newHeight) {
		this.height = newHeight;
	}

	Iterations(newEscape) {
		this.iterations = newEscape;
		this.dirtyPalette = true;
	}

	EscapeColor(newColor) {
		this.EscapeColor = newColor;
	}

	LowColor(newColor) {
		this.LowColor = newColor;
		this.dirtyPalette = true;
	}

	HighColor(newColor) {
		this.HighColor = newColor;
		this.dirtyPalette = true;
	}

	escapeTestPixel(p) {
		//let newPixels = [];

		
		if (this.dirtyPalette) {
			this.refreshPalette();
		}

		let i = p % this.width;
		let k = Math.floor(p / this.width);

		let x0 = this.scaleX(i);
		let y0 = this.scaleY(k);
		let _x = 0.0;
		let _y = 0.0;

		let iter = 0;

		while ( ((_x*_x + _y*_y) < 4) && (iter < this.iterations)) {
			let xtemp = _x*_x - _y*_y + x0;
			_y = 2*_x*_y + y0;
			_x = xtemp;
			iter = iter + 1;
		}

		//console.log(i +","+k+": "+iter);
		if (iter < this.iterations) {
			return { x: i, y: k, c: this.palette[iter] };
		}
		else {
			return { x: i, y: k, c: this.escapeColor };
		}

	}

	refreshPalette(){

		// The beginning of your gradient
		let start = this.convertToRGB(this.lowColor);    
		// The end of your gradient
		let end   = this.convertToRGB(this.highColor);    
		//Alpha blending amount
		let alpha = 0.0;
		let saida = [];

		for (let i = 0; i < this.iterations; i++) {
			let c = [];

			alpha += (1.0/this.iterations);
			
			c[0] = start[0] * alpha + (1 - alpha) * end[0];
			c[1] = start[1] * alpha + (1 - alpha) * end[1];
			c[2] = start[2] * alpha + (1 - alpha) * end[2];

			//console.log(i+": "+this.convertToHex(c));
			saida.push(this.convertToHex(c));
		}

		this.palette = saida;
		this.DirtyPalette(false);
	}

	scaleX(_x) {
		return this.minX * (1 - (_x/(this.width-1))) + this.maxX * (_x/(this.width-1));
	}

	scaleY(_y) {
		return this.minY * (1 - (_y/(this.height-1))) + this.maxY * (_y/(this.height-1));
	}

	hex (c) {
		var s = "0123456789abcdef";
		var i = parseInt (c);
		if (i == 0 || isNaN (c))
			return "00";
		i = Math.round (Math.min (Math.max (0, i), 255));
		return s.charAt ((i - i % 16) / 16) + s.charAt (i % 16);
	}

	convertToHex (rgb) {
		return '#' + this.hex(rgb[0]) + this.hex(rgb[1]) + this.hex(rgb[2]);
	}

	trim (s) { return (s.charAt(0) == '#') ? s.substring(1, 7) : s }

	convertToRGB (hex) {
		var color = [];
		color[0] = parseInt ((this.trim(hex)).substring (0, 2), 16);
		color[1] = parseInt ((this.trim(hex)).substring (2, 4), 16);
		color[2] = parseInt ((this.trim(hex)).substring (4, 6), 16);
		return color;
	}

}

	


	
