import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  categories = [
    { text: 'Industrial Machinery' },
    { text: 'User manuals' },
    { text: 'Electronics' },
    { text: 'Pharma & Biotech' },
    { text: 'Automotive' }
  ];

}
