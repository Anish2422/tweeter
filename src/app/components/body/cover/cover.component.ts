import { Component } from '@angular/core';
import { faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent {
  faPersonCirclePlus = faPersonCirclePlus;
}
