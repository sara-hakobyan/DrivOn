import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class About {
  whyChooseUs: any[] = [];
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadServicesTranslation();
    console.log(this.whyChooseUs);

    this.translate.onLangChange.subscribe(() => {
      this.loadServicesTranslation();
    });
  }

  private loadServicesTranslation(): void {
    this.translate.get('about.chooseUs.content').subscribe((data: any[]) => {
      this.whyChooseUs = data;
    });
  }

  whyChooseUslist = [
    {
      title: 'Experienced Instructors:',
      describtion:
        "Our certified and experienced instructors    teach with patience, respect, and care. Whether you're a beginner or looking to improve your skills, our instructors adapt to your learning style.",
    },
    {
      title: 'Comprehensive Curriculum:',
      describtion:
        'We offer a well-rounded program that covers everything from basic driving techniques to defensive driving and road safety. Our students gain the skills they need to drive confidently on any road and in any condition.',
    },
    {
      title: 'Personalized Approach:',
      describtion:
        "We understand that everyone learns differently. That's why we offer customized driving lessons to ensure that every student receives the individual attention needed to succeed.",
    },
    {
      title: 'Modern Vehicles:',
      describtion:
        'Our fleet of state-of-the-art dual-control vehicles is maintained to the highest standards, providing a safe and comfortable learning experience.',
    },
    {
      title: 'Flexible Scheduling:',
      describtion:
        'We know life can be busy. That’s why we offer flexible scheduling options, including evening and weekend lessons, so you can learn to drive on your terms.',
    },
    {
      title: 'High Success Rate:',
      describtion:
        'We are proud of our excellent track record of helping students pass their driving tests. Our methodical, step-by-step approach ensures that our students are well-prepared and confident on test day.',
    },
  ];
}
