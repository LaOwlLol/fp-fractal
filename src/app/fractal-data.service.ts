import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Pixel } from './pixel';
import { Fractal } from './fractal';
import { AppFractal } from './app-data';

@Injectable()
export class FractalDataService {

	getPixels(): Observable<Pixel> {
		return AppFractal.pixelBuffer;
	}

	getWidth(): number {
		return AppFractal.width;
	}

	getHeight(): number {
		return AppFractal.height;
	}

}
