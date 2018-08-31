import { Component, OnInit } from '@angular/core';
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
  if(FormList.Rating == null){
    FormList.Rating = 5;
  }

  //default image
  if(FormList.AlbumCoverImage == null){
    FormList.AlbumCoverImage = "/src/asset/images/LP_Vinyl_Symbol_Icon.png";
  }

  console.log("form input ---->", FormList);
  }

}
