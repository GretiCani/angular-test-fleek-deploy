import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-ui-five-col',
  templateUrl: './categories-ui-five-col.component.html',
  styleUrls: ['./categories-ui-five-col.component.scss']
})
export class CategoriesUiFiveColComponent implements OnInit {

  constructor() { }

  @Input()
  color!: string;


  ngOnInit(): void {
  }

}
