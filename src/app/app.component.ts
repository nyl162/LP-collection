import { Component } from '@angular/core';
import { RatingList } from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'LP-collection';
  
  MasterRatingList: RatingList[] = [
   // {AlbumName: "Name", Artist: "fasd", Rating: 6, AlbumCoverImage: "/src/assets/images/LP_Vinyl_Symbol_Icon.png"},
   // {AlbumName: "2ndName", Artist: "asdf", Rating: 7, AlbumCoverImage: "/src/assets/images/LP_Vinyl_Symbol_Icon.png"}
  ];

  AddNewEntry(ReceivedList:RatingList){
    console.log("RatingListReceived -------> "+ ReceivedList);
    this.MasterRatingList.push(ReceivedList);
  }
  
}
