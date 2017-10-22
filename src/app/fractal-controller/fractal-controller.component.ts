import { Component, OnInit, OnChanges } from '@angular/core';

import { Fractal } from '../fractal';
import { AppFractal } from '../app-data';

@Component({
	selector: 'fractal-controller',
	templateUrl: './fractal-controller.component.html',
	styleUrls: ['./fractal-controller.component.css']
})
export class FractalControllerComponent implements OnInit {
	fractal: Fractal;

	constructor() { }

	ngOnInit() {
		this.fractal = AppFractal;
	}

	iterationsChange(value) {
		this.fractal.Iterations(value);
	}
}
