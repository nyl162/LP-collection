import { Component } from '@angular/core';
import { RatingList } from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'LP-collection';
  
  MasterRatingList: RatingList[] = [];

  AddNewEntry(ReceivedList:RatingList){
    console.log("RatingListReceived -------> "+ ReceivedList);
    this.MasterRatingList.push(ReceivedList);
  }
  
}
