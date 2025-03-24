import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Notes } from 'src/app/models/notes';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  note!: FormGroup;
  notes!: [Notes];
  pageName: string = 'notes';

  constructor(private fb: FormBuilder, private apiService: NotesService) { }

  ngOnInit(): void {
    this.note = this.fb.group({
      title: ['', [Validators.required,]],
      content: ['', [Validators.required,]],
      category: ['', [Validators.required,]],
      priority: ['', [Validators.required,]],
      tags: ['', [Validators.required,]],
    });
  };


  onSubmit() {
    this.apiService.postData(this.pageName, this.note.value).subscribe((note) => {
      // this.notes.unshift(note);
      console.log('Note created:', note);
    });
    this.clearData();
  }

  clearData() {
    this.note.reset();
  }
}
