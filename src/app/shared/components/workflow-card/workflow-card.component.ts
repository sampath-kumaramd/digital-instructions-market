import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';
import { Workflow } from '../../types/Workflow';

@Component({
  selector: 'app-workflow-card',
  templateUrl: './workflow-card.component.html',
  styleUrls: ['./workflow-card.component.scss']
})
export class WorkflowCardComponent implements OnInit {
  nextCard: Workflow = {
    text: '',
    subText: '',
    imageSrc: '',
    category: '',
    heading: '',
    about: '',
    FAQ: []
  }
  @Input() card: Workflow = {
    text: '',
    subText: '',
    imageSrc: '',
    category: '',
    heading: '',
    about: '',
    FAQ: []
  }
  @Input() index: number = 0;
  @Input() parent!: any;
  @Output() cardClick = new EventEmitter<number>();
  curentIndex: number = 0;
  showDetails = false;
  showModal = false;


  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
  next() {
    const nextIndex = this.index + 1;
    if (nextIndex < this.parent.workFlowCards.length) {
      this.card = this.parent.workFlowCards[nextIndex];
      this.nextCard = this.parent.workFlowCards[nextIndex + 1];
      this.index = nextIndex;
    }
  }
  ngOnInit() {
    this.card = this.parent.workFlowCards[this.index];
    this.nextCard = this.parent.workFlowCards[this.index + 1];
    console.log(this.card);
    console.log(this.index);
    this.curentIndex = this.index;
    this.isOpen = new Array(this.card.FAQ.length).fill(false);
}
  previous() {
    const previousIndex = this.index - 1;
    if (previousIndex >= 0) {
      this.card = this.parent.workFlowCards[previousIndex];
      this.index = previousIndex;
    }
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  isOpen: boolean[] = [];

  toggle(index: number): void {
    this.isOpen[index] = !this.isOpen[index];
  }

}