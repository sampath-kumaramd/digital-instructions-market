import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  workFlowCards = [
    {
      text: 'Multipacker - running the machine guide',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-1.svg'
    },
    {
      text: 'Becher Identifizierung ',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-2.svg'
    },
    {
      text: 'MULTIVAC R240 - Start guide',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-3.svg'
    },
    {
      text: 'Multipacker - Safety checks',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-4.svg'
    },
    {
      text: 'Multipacker - Safety checks',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-5.svg'
    },
    {
      text: 'MULTIVAC R240 - Start guide',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-6.svg'
    },
    {
      text: 'Becher Identifizierung ',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-7.svg'
    },
    {
      text: 'Multipacker - running the machine guide',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-8.svg'
    },
    {
      text: 'Multipacker - running the machine guide',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-1.svg'
    },
    {
      text: 'Becher Identifizierung ',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-2.svg'
    },
    {
      text: 'MULTIVAC R240 - Start guide',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-3.svg'
    },
    {
      text: 'Multipacker - Safety checks',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-4.svg'
    },
    {
      text: 'Multipacker - Safety checks',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-5.svg'
    },
    {
      text: 'MULTIVAC R240 - Start guide',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-6.svg'
    },
    {
      text: 'Becher Identifizierung ',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-7.svg'
    },
    {
      text: 'Multipacker - running the machine guide',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-8.svg'
    }
  ];
  id:  string | null = '';
  categoryName = 'Industrial Machinery';
  searchTerm: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('id')) {
      this.id = this.route.snapshot.paramMap.get('id');
    }
  }
  getSearchResultCount(): number {
    if (!this.searchTerm) {
      return this.workFlowCards.length;
    }
    return this.workFlowCards.filter(card => card.text.toLowerCase().includes(this.searchTerm.toLowerCase())).length;
  }

}
