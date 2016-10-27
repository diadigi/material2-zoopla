import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { Trim } from '../shared/pipes/trim';
import { PostcodeFromLink } from '../shared/pipes/postcodeFromLink';

import {DataListService} from '../shared/data-list/data-list.service';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot()
  ],
  declarations: [ HomeComponent, Trim, PostcodeFromLink ],
  providers: [ DataListService ]
})

export class HomeModule { }
