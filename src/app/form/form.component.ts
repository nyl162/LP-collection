import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface RatingList{
  AlbumName: string,
  Artist: string,
  Rating: number,
  AlbumCoverImage: string
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
@Output()
  addEntry = new EventEmitter<RatingList>();


  constructor() { }

  ngOnInit() {
  }

  processForm(FormInput: NgForm){
    console.log("form input ---->", FormInput.value);
    let FormList : RatingList = {
    AlbumName: FormInput.value.FormAlbumName,
    Artist: FormInput.value.FormArtist,
    Rating: FormInput.value.FormRating,
    AlbumCoverImage: FormInput.value.FormAlbumCoverImage
  }

  //default rating
  if(FormInput.value.FormRating == null || FormInput.value.FormRating == "" ){
    FormList.Rating = 5;
  }

  //default image
  if(FormList.AlbumCoverImage == null || FormList.AlbumCoverImage.length == 0){
    FormList.AlbumCoverImage = "/assets/images/LP_Icon.png";
  }

  console.log("form input ---->", FormList);

  this.addEntry.next(FormList);
  FormInput.reset();
  }

}
