import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent {

  @Input() crumbs: {text: string, link: string}[] = [];
  constructor( private router: Router){}

  handleClick(route: string) {
    this.router.navigate([route]);
  }
}
