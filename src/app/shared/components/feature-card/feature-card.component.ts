import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() imgSrc: string = '';
  
}
