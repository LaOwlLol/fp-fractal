import { OnChanges } from '@angular/core';

import { Subject } from 'rxjs/Rx';

import { Pixel } from './pixel';

export class Fractal {

	//dirtyPixels: boolean;
	dirtyPalette: boolean;
	PixelWindowOpen: boolean;
	cPixel: number;
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

	minXBuffer: Subject<number>;
	maxXBuffer: Subject<number>;
	minYBuffer: Subject<number>;
	maxYBuffer: Subject<number>;
	widthBuffer: Subject<number>;
	heightBuffer: Subject<number>;
	iterationsBuffer: Subject<number>;
	pixelBuffer: Subject<Pixel>;
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

		this.minXBuffer = new Subject();
		this.maxXBuffer = new Subject();
		this.minYBuffer = new Subject();
		this.maxYBuffer = new Subject();
		this.iterationsBuffer = new Subject();
		this.pixelBuffer = new Subject();
		
	}

	/*DirtyPixels(value) {
		this.dirtyPixels = value;
	}*/

	DirtyPalette(value) {
		this.dirtyPalette = value;
	}

	MinX(newMin) {
		this.minX = newMin;
		this.minXBuffer.next( this.minX );
		this.escapeTestPixels();
	}

	MaxX(newMax) {
		this.maxX = newMax;
		this.maxXBuffer.next( this.maxX );
		this.escapeTestPixels();
	}

	MinY(newMin) {
		this.minY = newMin;
		this.minYBuffer.next( this.minY );
		this.escapeTestPixels();
	}

	MaxY(newMax) {
		this.maxY = newMax;
		this.maxYBuffer.next( this.maxY );
		this.escapeTestPixels();
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
		this.iterationsBuffer.next( this.iterations );
		this.refreshPalette();
		this.escapeTestPixels();
	}

	EscapeColor(newColor) {
		this.EscapeColor = newColor;
		this.escapeTestPixels();
	}

	LowColor(newColor) {
		this.LowColor = newColor;
		this.dirtyPalette = true;
		this.refreshPalette();
		this.escapeTestPixels();
	}

	HighColor(newColor) {
		this.HighColor = newColor;
		this.dirtyPalette = true;
		this.refreshPalette();
		this.escapeTestPixels();
	}


	escapeTestPixels() {
		
		if (this.dirtyPalette) {
			this.refreshPalette();
		}

		for (let k = 0; k < this.height; ++k) {
			for (let i = 0; i < this.width; ++i ) {
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

				if (iter < this.iterations) {
					this.pixelBuffer.next({ x: i, y: k, c: this.palette[iter] });
				}
				else {
					this.pixelBuffer.next({ x: i, y: k, c: this.escapeColor });
				}		
			}
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

	


	
