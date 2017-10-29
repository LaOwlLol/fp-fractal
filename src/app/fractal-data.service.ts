import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Rx';

import { Pixel } from './pixel';
import { Fractal } from './fractal';
import { AppFractal } from './app-fractal';

@Injectable()
export class FractalDataService {

	constructor() {
		
	}

	getPixelSubscription(obs): any {
		let subscription = AppFractal.pixelBuffer.subscribe(obs);
		AppFractal.escapeTestPixels();
		return subscription;
	}

	getWidth(): number {
		return AppFractal.width;
	}

	getHeight(): number {
		return AppFractal.height;
	}

	getEscapeColor(): string {
		return AppFractal.escapeColor;
	}
	
	getLowColor(): string {
		return AppFractal.lowColor;
	}

	getHighColor(): string {
		return AppFractal.highColor;
	}

	getEscapeSubscription(obs): any {
		let subscription = AppFractal.iterationsBuffer.subscribe(obs);
		AppFractal.iterationsBuffer.next(AppFractal.iterations);
		return  subscription;
	}

	getMinXSubscription(obs): any {
		let subscription =  AppFractal.minXBuffer.subscribe(obs);
		AppFractal.minXBuffer.next(AppFractal.minX);
		return subscription;
	};

	getMaxXSubscription(obs): any {
		let subscription =  AppFractal.maxXBuffer.subscribe(obs);
		AppFractal.maxXBuffer.next(AppFractal.maxX);
		return subscription;
	};

	getMinYSubscription(obs): any {
		let subscription = AppFractal.minYBuffer.subscribe(obs);
		AppFractal.minYBuffer.next(AppFractal.minY);
		return subscription;
	};

	getMaxYSubscription(obs): any {
		let subscription = AppFractal.maxYBuffer.subscribe(obs);
		AppFractal.maxYBuffer.next(AppFractal.maxY);
		return subscription;
	};
	
	setMinX(value): void {
		AppFractal.MinX(value);
	}

	setMaxX(value): void {
		AppFractal.MaxX(value);
	}

	setMinY(value): void {
		AppFractal.MinY(value);
	}

	setMaxY(value): void {
		AppFractal.MaxY(value);
	}

	setWidth(value): void {
		AppFractal.Width(value);
	}

	setHeight(value): void {
		AppFractal.Height(value);
	}

	setIterations(value): void {
		AppFractal.Iterations(value);
	}

	setEscapeColor(value): void {
		AppFractal.EscapeColor(value);
	}

	setLowColor(value): void {
		AppFractal.LowColor(value);
	}

	setHighColor(value): void {
		AppFractal.HighColor(value);
	}

}
