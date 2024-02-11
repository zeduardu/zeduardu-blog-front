import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  categories: string[] = [
    "Technology",
    "Health",
    "Science",
    "Business",
    "Sports",
    "Fashion",
    "Food",
    "Travel",
    "Art",
    "Music"
  ];

}
