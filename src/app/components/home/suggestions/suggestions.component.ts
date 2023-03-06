import { Component } from '@angular/core';
import { Suggestion } from './suggestions.model';
import { faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent {
  faPersonCirclePlus = faPersonCirclePlus;
  suggestions: Suggestion[] = [
      new Suggestion(
        'Daniel Jensen',
        'https://images.squarespace-cdn.com/content/v1/5aee389b3c3a531e6245ae76/1533556659531-R0B8DV9CIUYTEWBWWOZ7/Bewerbungsfotos-Friedrichshain01.jpg',
        'Photographer & Filmmaker based in Copenhagen, Denmark',
        'https://www.goodmorningimagesforlover.com/wp-content/uploads/2018/11/create-facebook-cover-photo-for-whatsapp.jpg',
        2569
      ),

      new Suggestion(
        'Rudy Angel',
        'https://images.squarespace-cdn.com/content/v1/5aee389b3c3a531e6245ae76/1533556659531-R0B8DV9CIUYTEWBWWOZ7/Bewerbungsfotos-Friedrichshain01.jpg',
        'Bigg Boss',
        'https://www.goodmorningimagesforlover.com/wp-content/uploads/2018/11/create-facebook-cover-photo-for-whatsapp.jpg',
        9999
      )
  ]
  
}
