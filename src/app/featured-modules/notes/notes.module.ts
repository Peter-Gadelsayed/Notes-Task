import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { CreateNoteComponent } from './create-note/create-note.component';
import { ShowNoteComponent } from './show-note/show-note.component';
import { UpdateNoteComponent } from './update-note/update-note.component';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    CreateNoteComponent,
    ShowNoteComponent,
    UpdateNoteComponent,
    AllNotesComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class NotesModule { }
