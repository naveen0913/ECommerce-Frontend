import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public location: Location, public router: Router, public spinner: NgxSpinnerService) { }

  public goingBack(): void {
    this.location.back();
  }

  public navigation(path: string): void {
    this.router.navigate([path]);
  }

  public loadSpinner(): void {
    this.spinner.show(undefined, {
      type: 'ball-clip-rotate',
      bdColor: 'rgba(51,51,51,0.8)',
      fullScreen: true,
      color: 'fff',
      size: 'medium'
    })
  }

  public stopSpinner():void {
    this.spinner.hide();
  }
}
