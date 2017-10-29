import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Rx';

import { Pixel } from './pixel';
import { Fractal } from './fractal';

@Injectable()
export class FractalDataService {
	AppFractal: Fractal;

	constructor() {
		this.AppFractal = new Fractal( -2.5, 1, -1, 1,
		  1024, 600, 15, "#000000", "#ffc200", "#0000ff");
	}

	getPixelSubscription(obs): any {
		let subscription = this.AppFractal.pixelBuffer.subscribe(obs);
		this.AppFractal.escapeTestPixels();
		return subscription;
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

	getEscapeSubscription(obs): any {
		let subscription = this.AppFractal.iterationsBuffer.subscribe(obs);
		this.AppFractal.iterationsBuffer.next(this.AppFractal.iterations);
		return  subscription;
	}

	getMinXSubscription(obs): any {
		let subscription =  this.AppFractal.minXBuffer.subscribe(obs);
		this.AppFractal.minXBuffer.next(this.AppFractal.minX);
		return subscription;
	};

	getMaxXSubscription(obs): any {
		let subscription =  this.AppFractal.maxXBuffer.subscribe(obs);
		this.AppFractal.maxXBuffer.next(this.AppFractal.maxX);
		return subscription;
	};

	getMinYSubscription(obs): any {
		let subscription =  this.AppFractal.minYBuffer.subscribe(obs);
		this.AppFractal.minYBuffer.next(this.AppFractal.minY);
		return subscription;
	};

	getMaxYSubscription(obs): any {
		let subscription =  this.AppFractal.maxYBuffer.subscribe(obs);
		this.AppFractal.maxYBuffer.next(this.AppFractal.maxY);
		return subscription;
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
