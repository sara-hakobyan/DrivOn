import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class Services {
  left: any[] = [];
  right: any[] = [];
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadServicesTranslation();
    this.translate.onLangChange.subscribe(() => {
      this.loadServicesTranslation();
    });
  }

  private loadServicesTranslation(): void {
    this.translate.get('services.leftSide').subscribe((data: any[]) => {
      this.left = data;
    });
    this.translate.get('services.rightSide').subscribe((data: []) => {
      this.right = data;
    });
  }

  leftServices = [
    {
      type: 'Package "Theoretical"',
      goal: 'Preparation for the theoretical driving test',
      info: [
        'Program includes: Traffic Rules and Regulations of Armenia',
        'Theoretical lessons: 15 hours',
        'Duration: 1 month',
        'Class days: Monday to Saturday',
        'Schedule: Morning: 10:00 - 11:30, Afternoon: 13:30 - 15:00, Evening: 19:00 - 20:30',
      ],
      price: 'Package price is ??? AMD',
    },
    {
      type: 'Package "Practical"',
      goal: 'Preparation for the practical driving test',
      info: [
        'Program includes: 11 test exercises',
        'Driving lessons on the test route',
        'Trial test for the exam',
        'Practical lessons: 10 hours',
        'Duration: 1 month',
        'Location and schedule: Flexible',
        'Lesson duration: 1 hour',
      ],
      price: 'Package price is 70,000 AMD',
    },
  ];

  rightServices = [
    {
      type: 'Package "Start"',
      goal: 'Preparation for both theoretical and practical driving tests',
      info: [
        'Program includes: 15 lessons on Traffic Rules and Regulations of Armenia',
        '5 driving lessons on the test route',
        'Trial test for the exam',
        'Duration: 1 month',
        'Class days: Monday to Saturday',
        'Flexible schedule',
      ],
      price: 'Package price is 80,000 AMD',
    },
    {
      type: 'Package "Standard"',
      goal: 'Complete preparation for both theoretical and practical driving tests',
      info: [
        'Program includes: 15 lessons on Traffic Rules and Regulations of Armenia',
        '10 driving lessons on the test route',
        'Trial test for the exam',
        'Duration: 1 month',
        'Class days: Monday to Saturday',
        'Flexible schedule',
      ],
      price: 'Package price is 110,000 AMD',
    },
  ];
}
