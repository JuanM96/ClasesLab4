import { Component, OnInit , Input, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  @Input()
  pizza:any;
  constructor() { }

  ngOnInit() {
  }

}
