import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { ShowNoteComponent } from './show-note/show-note.component';

const routes: Routes = [
  {
    path: '', component: AllNotesComponent,
  },
  {
    path: 'create', component: CreateNoteComponent
  },
  {
    path: 'edite/:id', component: CreateNoteComponent
  },
  {
    path: 'show/:id', component: ShowNoteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
