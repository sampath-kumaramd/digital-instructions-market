import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-workflow-card',
  templateUrl: './workflow-card.component.html',
  styleUrls: ['./workflow-card.component.scss']
})
export class WorkflowCardComponent implements  OnInit{
  card: any;
  @Input() text: string= '';
  @Input() subText: string= '';
  @Input() imageSrc: string ='';
  @Input() category: string = '';
  @Input() index: number = 0 ;
  @Input() parent!: HomeComponent;
  @Output() cardClick = new EventEmitter<number>();

  next() {
    const nextIndex = this.index + 1;
    if (nextIndex < this.parent.workFlowCards.length) {
      this.card = this.parent.workFlowCards[nextIndex];
      this.index = nextIndex;
    }
  }
  ngOnInit() {
    this.card = this.parent.workFlowCards[this.index];
    console.log(this.card);
    console.log(this.index);
  }
  previous() {
    const previousIndex = this.index - 1;
    if (previousIndex >= 0) {
      this.card = this.parent.workFlowCards[previousIndex];
      this.index = previousIndex;
    }
  }

  openCard() {
  }

}