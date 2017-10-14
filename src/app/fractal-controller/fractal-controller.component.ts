import { Component, OnInit, OnChanges, Input  } from '@angular/core';

@Component({
	selector: 'fractal-controller',
	templateUrl: './fractal-controller.component.html',
	styleUrls: ['./fractal-controller.component.css']
})
export class FractalControllerComponent implements OnInit {

	@Input('minX') minX: number;
	@Input('maxX') maxX: number;
	@Input('minY') minY: number;
	@Input('maxY') maxY: number;
	
	canvasData = [ ];
	colors = [];

	constructor() { }

	ngOnInit() {
		this.colors = this.generateColor('#FF0000', '#0000FF', 1000 );
	}

	private ngOnChanges() {
		this.populate();
	}

	private onPopulate() {
		this.populate();
	}

	private populate() {
		this.canvasData = [ ];
		for (var i = 0; i < 800; i++) {
			for (var k = 0; k < 500; k++) {

				let x0 = this.scaleX(i);
				let y0 = this.scaleY(k);
				let _x = 0.0;
				let _y = 0.0;

				let iter = 0;
				let max_iter = this.colors.length;

				while ( ((_x*_x + _y*_y) < 4) && (iter < max_iter)) {
					let xtemp = _x*_x - _y*_y + x0;
					_y = 2*_x*_y + y0;
					_x = xtemp;
					iter = iter + 1;
				}

				//console.log(i +","+k+": "+iter);
				if (iter < max_iter) {
					this.canvasData.push(
						{x: i, y: k, c: this.colors[iter] }
					);
				}
				else {
					this.canvasData.push({x: i, y: k, c: '#000000'});
				}
				
				
			}
		}
	}

	scaleX(_x) {
		return this.minX * (1 - (_x/799)) + this.maxX * (_x/799);
	}

	scaleY(_y) {
		return this.minY * (1 - (_y/499)) + this.maxY * (_y/499);
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

	generateColor(colorStart,colorEnd,colorCount){

		// The beginning of your gradient
		let start = this.convertToRGB (colorStart);    
		// The end of your gradient
		let end   = this.convertToRGB (colorEnd);    
		//Alpha blending amount
		let alpha = 0.0;
		let saida = [];

		for (let i = 0; i < colorCount; i++) {
			let c = [];

			alpha += (1.0/colorCount);
			
			c[0] = start[0] * alpha + (1 - alpha) * end[0];
			c[1] = start[1] * alpha + (1 - alpha) * end[1];
			c[2] = start[2] * alpha + (1 - alpha) * end[2];

			console.log(i+": "+this.convertToHex(c));
			saida.push(this.convertToHex (c));
		}

		return saida;
	}

}
