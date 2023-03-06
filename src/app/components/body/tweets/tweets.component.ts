import { Component } from '@angular/core';
import { Tweet } from './tweets.model';


@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent {
  tweets:Tweet []= [
    new Tweet(
    'https://images.squarespace-cdn.com/content/v1/5aee389b3c3a531e6245ae76/1533556659531-R0B8DV9CIUYTEWBWWOZ7/Bewerbungsfotos-Friedrichshain01.jpg',
    'Peyton',
    'Travelling - it leaves you speechless, then turns you into a storyteller.',
    'https://www.goodmorningimagesforlover.com/wp-content/uploads/2018/11/create-facebook-cover-photo-for-whatsapp.jpg',
    1,
    1,
    1
  ),

  new Tweet(
    'https://images.squarespace-cdn.com/content/v1/5aee389b3c3a531e6245ae76/1533556659531-R0B8DV9CIUYTEWBWWOZ7/Bewerbungsfotos-Friedrichshain01.jpg',
    'Rayton',
    'Photography - it leaves you speechless, then turns you into a storyteller.',
    'https://www.goodmorningimagesforlover.com/wp-content/uploads/2018/11/create-facebook-cover-photo-for-whatsapp.jpg',
    2,
    2,
    2
  ),

  ];
}
