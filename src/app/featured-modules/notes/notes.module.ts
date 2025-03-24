import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { CreateNoteComponent } from './create-note/create-note.component';
import { ShowNoteComponent } from './show-note/show-note.component';
import { UpdateNoteComponent } from './update-note/update-note.component';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { ReactiveFormsModule } from '@angular/forms';


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

  ]
})
export class NotesModule { }
