import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

import { Subscription } from 'rxjs/Rx';

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
	minY: number;
	maxY: number;
	iterationsSubscription: Subscription;
	minXSubscription: Subscription;
	maxXSubscription: Subscription;
	minYSubscription: Subscription;
	maxYSubscription: Subscription;

	constructor( private fractalService: FractalDataService ) { }

	ngOnInit() {
		
		this.minXSubscription = this.fractalService.getMinXSubscription(  n => this.minX = n );
		this.maxXSubscription = this.fractalService.getMaxXSubscription( n => this.maxX = n );
		this.minYSubscription = this.fractalService.getMinYSubscription( n => this.minY = n );
		this.maxYSubscription = this.fractalService.getMaxYSubscription( n => this.maxY = n );
		this.iterationsSubscription = this.fractalService.getEscapeSubscription( n => this.iterations = n );
	}

	ngOnDestroy() {
    	//this.running = false;
    	this.minXSubscription.unsubscribe();
    	this.maxXSubscription.unsubscribe();
    	this.minYSubscription.unsubscribe();
    	this.maxYSubscription.unsubscribe();
    	this.iterationsSubscription.unsubscribe(); 
  	}

	iterationsChange(value) {
		this.fractalService.setIterations(value);
	}
	minXChange(value) {
		this.fractalService.setMinX(value);
	}
	maxXChange(value) {
		this.fractalService.setMaxX(value);
	}

	minYChange(value) {
		this.fractalService.setMinY(value);
	}
	maxYChange(value) {
		this.fractalService.setMaxY(value);
	}
}
