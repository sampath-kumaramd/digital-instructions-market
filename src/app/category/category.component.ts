import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Workflow } from '../shared/types/Workflow';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  workFlowCards: Workflow[]= [
    {
      text: 'Multipacker - running the machine guide',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-1.svg',
      category: ' Industrial Machinery',
      heading: 'ABB: Asea Brown Boveri',
      about: 'One answer is that Truth pertains to the possibility that an event will occur. If true – it must occur and if false, it cannot occur. This is a binary world of extreme existential conditions.',
      FAQ: [{
        question: 'How use this workflow?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        question: 'What are the steps in launching?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        question: 'How i can update this workflow?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }],
    },
    {
      text: 'Becher Identifizierung',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-2.svg',
      category: ' Industrial Machinery',
      heading: 'ABB: Asea Brown Boveri',
      about: 'One answer is that Truth pertains to the possibility that an event will occur. If true – it must occur and if false, it cannot occur. This is a binary world of extreme existential conditions.',
      FAQ: [{
        question: 'How use this workflow?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        question: 'What are the steps in launching?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        question: 'How i can update this workflow?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }],
    },
    {
      text: 'MULTIVAC R240 - Start guide',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-3.svg',
      category: ' Industrial Machinery',
      heading: 'ABB: Asea Brown Boveri',
      about: 'One answer is that Truth pertains to the possibility that an event will occur. If true – it must occur and if false, it cannot occur. This is a binary world of extreme existential conditions.',
      FAQ: [{
        question: 'How use this workflow?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        question: 'What are the steps in launching?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        question: 'How i can update this workflow?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }],
    },
    {
      text: 'Multipacker - Safety checks',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-4.svg',
      category: ' Industrial Machinery',
      heading: 'ABB: Asea Brown Boveri',
      about: 'One answer is that Truth pertains to the possibility that an event will occur. If true – it must occur and if false, it cannot occur. This is a binary world of extreme existential conditions.',
      FAQ: [{
        question: 'How use this workflow?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        question: 'What are the steps in launching?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        question: 'How i can update this workflow?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }],
    },
    {
      text: 'Multipacker - Safety checks',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-5.svg',
      category: ' Industrial Machinery',
      heading: 'ABB: Asea Brown Boveri',
      about: 'One answer is that Truth pertains to the possibility that an event will occur. If true – it must occur and if false, it cannot occur. This is a binary world of extreme existential conditions.',
      FAQ: [{
        question: 'How use this workflow?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        question: 'What are the steps in launching?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        question: 'How i can update this workflow?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }],
    },
    {
      text: 'MULTIVAC R240 - Start guide',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-6.svg',
      category: ' Industrial Machinery',
      heading: 'ABB: Asea Brown Boveri',
      about: 'One answer is that Truth pertains to the possibility that an event will occur. If true – it must occur and if false, it cannot occur. This is a binary world of extreme existential conditions.',
      FAQ: [{
        question: 'How use this workflow?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        question: 'What are the steps in launching?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        question: 'How i can update this workflow?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }],
    },
    {
      text: 'Becher Identifizierung',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-7.svg',
      category: ' Industrial Machinery',
      heading: 'ABB: Asea Brown Boveri',
      about: 'One answer is that Truth pertains to the possibility that an event will occur. If true – it must occur and if false, it cannot occur. This is a binary world of extreme existential conditions.',
      FAQ: [{
        question: 'How use this workflow?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        question: 'What are the steps in launching?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        question: 'How i can update this workflow?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }],
    },
    {
      text: 'Multipacker - running the machine guide',
      subText: 'Industrial Machinery • Exopro',
      imageSrc: '../../../../assets/workflow-8.svg',
      category: ' Industrial Machinery',
      heading: 'ABB: Asea Brown Boveri',
      about: 'One answer is that Truth pertains to the possibility that an event will occur. If true – it must occur and if false, it cannot occur. This is a binary world of extreme existential conditions.',
      FAQ: [{
        question: 'How use this workflow?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        question: 'What are the steps in launching?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        question: 'How i can update this workflow?',
        answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }],
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
