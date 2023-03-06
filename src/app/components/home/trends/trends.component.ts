import { Component } from '@angular/core';
import { Trend } from './trends.model';


@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent {
  trends:Trend []= [
    new Trend(
    'programming',
    1
  ),

  new Trend(
    'frontend',
    1
  ),

  ];
}
