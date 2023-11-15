import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms'; 
import {MatChipsModule} from '@angular/material/chips';



import { FormulaireTestComponent } from './formulaire-test/formulaire-test.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ListeChipsFruitsComponent } from './liste-chips-fruits/liste-chips-fruits.component';


@NgModule({
  declarations: [
    AppComponent,
    FormulaireTestComponent,
    ListeChipsFruitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule, 
    MatButtonModule, 
    FormsModule, 
    MatChipsModule, 
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
