import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'notes',
    loadChildren: () => import('./featured-modules/notes/notes.module').then((m) => m.NotesModule)
  },
  {
    path: '',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
