import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent {
  @Input() subHeaderText: string= '';
  @Input() subHeaderCount: number = 0;
  @Input() categoryId: number = 0;

  constructor(private router : Router) { }

  hanndleRoute(categoryId: number) {
    if(categoryId === 0){
      this.router.navigate(['market']);
      return;
    }
    this.router.navigate(['category/', categoryId]);
  }
}
