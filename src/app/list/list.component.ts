import { Component, OnInit ,Input} from '@angular/core';
import { RatingList } from '../form/form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  listList : RatingList;

  constructor() { }

  ngOnInit() {
  }

}
