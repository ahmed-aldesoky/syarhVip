import { Component, OnInit, ɵNG_ELEMENT_ID } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showup(){
    document.body.scrollTo(0, 0);

  }
}
