import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-next-previous-scroll-bar',
  templateUrl: './next-previous-scroll-bar.component.html',
  styleUrls: ['./next-previous-scroll-bar.component.css']
})
export class NextPreviousScrollBarComponent implements OnInit{
  constructor() {}

  ngOnInit() {}

  @Input() scrollUnit: number = 150;
}
