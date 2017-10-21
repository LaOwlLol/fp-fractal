import { Pixel } from './pixel';

export class Fractal {

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
	pixelData: Pixel[];

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
	}

	EscapeColor(newColor) {
		this.EscapeColor = newColor;
	}

	LowColor(newColor) {
		this.LowColor = newColor;
	}

	HighColor(newColor) {
		this.HighColor = newColor;
	}

	private onIterChanged(newVal) {
		this.iterations = newVal;
		this.generateColor(this.iterations);
	}

	private OnReCalc() {
		let newPixels = [];

		for (var i = 0; i < this.width; i++) {
			for (var k = 0; k < this.height; k++) {

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
					newPixels.push(
						{x: i, y: k, c: this.palette[iter] }
					);
				}
				else {
					newPixels.push({x: i, y: k, c: this.escapeColor});
				}
			}
		}

		this.pixelData = newPixels;
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

	generateColor(colorCount){

		// The beginning of your gradient
		let start = this.convertToRGB (this.LowColor);    
		// The end of your gradient
		let end   = this.convertToRGB (this.HighColor);    
		//Alpha blending amount
		let alpha = 0.0;
		let saida = [];

		for (let i = 0; i < colorCount; i++) {
			let c = [];

			alpha += (1.0/colorCount);
			
			c[0] = start[0] * alpha + (1 - alpha) * end[0];
			c[1] = start[1] * alpha + (1 - alpha) * end[1];
			c[2] = start[2] * alpha + (1 - alpha) * end[2];

			//console.log(i+": "+this.convertToHex(c));
			saida.push(this.convertToHex (c));
		}

		this.palette = saida;
	}

}
