import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workflow-card',
  templateUrl: './workflow-card.component.html',
  styleUrls: ['./workflow-card.component.scss']
})
export class WorkflowCardComponent {
  @Input() text: string= '';
  @Input() subText: string= '';
  @Input() imageSrc: string ='';
}