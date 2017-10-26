import { Component, OnInit, OnChanges } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { FractalDataService } from '../fractal-data.service';
import { Fractal } from '../fractal';

@Component({
	selector: 'fractal-controller',
	templateUrl: './fractal-controller.component.html',
	styleUrls: ['./fractal-controller.component.css'],
	providers: [FractalDataService]
})
export class FractalControllerComponent implements OnInit {

	iterations: number;
	minX: number;
	maxX: number;
	minY: number
	maxY: number;


	constructor( private fractalService: FractalDataService ) { }

	ngOnInit() {
		
		this.fractalService.getMinX().subscribe( i => { this.minX = i; });
		this.fractalService.getMaxX().subscribe( i => this.maxX = i);
		this.fractalService.getMinY().subscribe( i => this.minY = i);
		this.fractalService.getMaxY().subscribe( i => this.maxY = i);
		this.fractalService.getIterations().subscribe( i =>  this.iterations = i );
	}

	iterationsChange(value) {
		this.fractalService.setIterations(value);
	}

	maxYChange(value) {
		this.fractalService.setMaxY(value);
	}
}
