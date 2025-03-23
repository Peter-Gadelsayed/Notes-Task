import { Component, OnInit } from '@angular/core';
import { Note, Notes } from 'src/app/models/notes';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})
export class AllNotesComponent implements OnInit {


  notes!: [Notes];
  btnText: string = 'Show Note';

  constructor(private apiService: NotesService, private router: Router) { }

  ngOnInit() {
    this.apiService.getData('notes').subscribe((data) => {
      this.notes = data;
      console.log('Fetched posts:', data);
    });
  }

  openNote(note: Notes) {
    this.router.navigate(['/notes/show', note.id])
  }

  createNote() {
    this.router.navigate(['/notes/create'])
  }
}
