import { Component, OnInit } from '@angular/core';
import { Note, Notes } from 'src/app/models/notes';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})
export class AllNotesComponent implements OnInit {


  notes!: Notes[];
  btnText: string = 'Show Note';

  constructor(private apiService: NotesService, private router: Router, private token: AuthService) { }

  ngOnInit() {
    this.apiService.getData('notes').subscribe((notes) => {
      // this.notes = data;
      console.log('Fetched posts:', notes);
    });
    this.fireToken();
  }

  fireToken() {
    this.token.setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBAcHAuY29tIiwiaWF0IjoxNzQyODQ3MDc2LCJleHAiOjE3NDI4OTAyNzZ9.oJ0n_Xk4Lfj2KjeEjWPDiyvtCSF_lEKILC6BLsZUodk');
  }

  openNote(note: Notes) {
    this.router.navigate(['/notes/show/', note.id])
  }

  createNote() {
    this.router.navigate(['/notes/create'])
  }
}


