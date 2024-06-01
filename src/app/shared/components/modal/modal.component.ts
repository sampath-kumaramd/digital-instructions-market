import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() card: any;
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  onNext() {
    this.next.emit();
  }

  onPrevious() {
    this.previous.emit();
  }
}
