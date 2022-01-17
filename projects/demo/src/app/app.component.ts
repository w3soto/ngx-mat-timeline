import { Component } from '@angular/core';

interface Record {
  icon?: string | null,
  svgIcon?: string | null,
  iconUrl?: string | null,
  label: string,
  content: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: Record[] = [
    {
      icon: 'info',
      label: 'Lorem',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      svgIcon: 'airballoon', // from mdi icons
      label: 'Ipsum',
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'
    },
    {
      iconUrl : 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
      label: 'Dolor',
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
    },
    {
      icon: 'favorite',
      label: 'Sit',
      content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
    },
    {
      icon: 'language',
      label: 'Amet',
      content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.'
    }
  ];

  position: 'start' | 'end' = 'start';

  orientation: 'vertical' | 'horizontal' = 'vertical';

}
