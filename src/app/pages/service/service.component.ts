import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {

  private arrowMapRotated = {
    masonry : false,
    plumbing:false,
    electrical:false,
    gardening:false,
  }

  rotateIcon(arrowId:string) {
    const icon = document.getElementById(arrowId);
    const rotation = icon?.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
    if(icon){
      icon.style.transform = rotation;
    }
  }
}
