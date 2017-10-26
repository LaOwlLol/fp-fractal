import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Pixel } from './pixel';
import { Fractal } from './fractal';

@Injectable()
export class FractalDataService {
	AppFractal: Fractal;

	constructor() {
		this.AppFractal = new Fractal( -2.5, 1, -1, 1,
		  1024, 600, 15, "#000000", "#ffc200", "#0000ff");
	}

	getPixels(): Observable<Pixel> {
		return this.AppFractal.pixelBuffer.concatAll();
	}

	getWidth(): number {
		return this.AppFractal.width;
	}

	getHeight(): number {
		return this.AppFractal.height;
	}

	getEscapeColor(): string {
		return this.AppFractal.escapeColor;
	}
	
	getLowColor(): string {
		return this.AppFractal.lowColor;
	}

	getHighColor(): string {
		return this.AppFractal.highColor;
	}

	getIterations(): Observable<number> {
		return this.AppFractal.iterationsBuffer.concatAll();
	}

	getMinX(): Observable<number> {
		return this.AppFractal.minXBuffer.concatAll();
	};

	getMaxX(): Observable<number> {
		return this.AppFractal.maxXBuffer.concatAll();
	};

	getMinY(): Observable<number> {
		return this.AppFractal.minYBuffer.concatAll();
	};

	getMaxY(): Observable<number> {
		return this.AppFractal.maxYBuffer.concatAll();
	};
	
	setMinX(value): void {
		this.AppFractal.MinX(value);
	}

	setMaxX(value): void {
		this.AppFractal.MaxX(value);
	}

	setMinY(value): void {
		this.AppFractal.MinY(value);
	}

	setMaxY(value): void {
		this.AppFractal.MaxY(value);
	}

	setWidth(value): void {
		this.AppFractal.Width(value);
	}

	setHeight(value): void {
		this.AppFractal.Height(value);
	}

	setIterations(value): void {
		this.AppFractal.Iterations(value);
	}

	setEscapeColor(value): void {
		this.AppFractal.EscapeColor(value);
	}

	setLowColor(value): void {
		this.AppFractal.LowColor(value);
	}

	setHighColor(value): void {
		this.AppFractal.HighColor(value);
	}

}
