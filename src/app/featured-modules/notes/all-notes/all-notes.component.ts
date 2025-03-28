import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Notes } from 'src/app/models/notes';


@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})
export class AllNotesComponent implements OnInit {


  notes!: Notes[];

  OpenBtnText: string = 'View';
  delBtnText: string = 'Delete';

  constructor(private apiService: NotesService, private router: Router, private token: AuthService) { }

  ngOnInit() {
    this.apiService.getData('notes').subscribe((notes) => {
      console.log('Fetched posts:', notes);
      this.notes = notes;
    });
    this.fireToken();
  }

  fireToken() {
    this.token.setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBAcHAuY29tIiwiaWF0IjoxNzQzMTYzNDc4LCJleHAiOjE3NDMyMDY2Nzh9.G4beKC2GHv_AIqBZyxq3MNqCTAmP4W-FJhrTR1gi5og');
  }

  openNote(note: Notes) {
    this.router.navigate(['/notes/show/', note.id])
  }

  createNote() {
    this.router.navigate(['/notes/create'])
  }

  deleteNote(note: Notes): void {
    if (confirm(`Are you sure you want to delete the note titled "${note.title}"?`)) {
      this.apiService.deleteData(`notes/${note.id}`).subscribe({
        next: () => {
          console.log(`Note with ID ${note.id} deleted successfully.`);
          // Remove the deleted note from the local notes array
          this.notes = this.notes.filter(n => n.id !== note.id);
        },
        error: (err) => {
          console.error('Error deleting note:', err);
        }
      });
    }
  }
}


