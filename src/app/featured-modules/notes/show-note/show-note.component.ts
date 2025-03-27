import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Notes } from 'src/app/models/notes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-note',
  templateUrl: './show-note.component.html',
  styleUrls: ['./show-note.component.scss']
})
export class ShowNoteComponent implements OnInit {

  note!: Notes;
  noteId!: number;
  constructor(private route: ActivatedRoute, private apiService: NotesService) { }


  ngOnInit(): void {
    this.noteId = Number(this.route.snapshot.paramMap.get('id'));
    this.openNote(this.noteId);
  }
  openNote(noteId: number) {
    this.apiService.getNoteById('notes', noteId).subscribe({
      next: (data) => { this.note = data; console.log('Fetched note:', data); },
      error: (error) => console.error('Error fetching note:', error)
    });
  }

}
