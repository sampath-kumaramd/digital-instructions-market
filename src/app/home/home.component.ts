import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  FeaturedData = [
    {
      title: 'Heineken N.V.',
      subtitle: '168 guides',
      imgSrc: '../../../../assets/icons/feature-1.svg'
    },
    {
      title: 'ABB: Asea Brown Boveri',
      subtitle: '88 guides',
      imgSrc: '../../../../assets/icons/feature-2.svg'
    },
    {
      title: 'Bio-Rad Laboratories',
      subtitle: '96 guides',
      imgSrc: '../../../../assets/icons/feature-3.svg'
    },
    {
      title: 'LG Electronics',
      subtitle: '104 guides',
      imgSrc: '../../../../assets/icons/feature-4.svg'
    },
    {
      title: 'Electrolux',
      subtitle: '140 guides',
      imgSrc: '../../../../assets/icons/feature-5.svg'
    },
    {
      title: 'DeWALT',
      subtitle: '32 guides',
      imgSrc: '../../../../assets/icons/feature-6.svg'
    }
  ];

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
    }
  ];
}
