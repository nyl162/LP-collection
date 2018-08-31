import { NgModule } from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input"
import {MatButtonModule} from "@angular/material/button"
import {MatCardModule} from "@angular/material/card"
import {MatRadioModule} from "@angular/material/radio"
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule} from '@angular/material-moment-adapter';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatIconModule } from "@angular/material";
import {MatSliderModule} from '@angular/material/slider';


let MODULE = [
    MatToolbarModule,MatFormFieldModule,MatInputModule,
    MatButtonModule,MatCardModule,MatRadioModule,
    MatDatepickerModule,
    MatMomentDateModule,FlexLayoutModule,
    MatIconModule, MatSliderModule
];

@NgModule({
imports: MODULE,
exports: MODULE
})

export class MaterialModule { }