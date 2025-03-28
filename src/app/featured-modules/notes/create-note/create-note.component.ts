import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Notes } from 'src/app/models/notes';
import { NotesService } from '../notes.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  note!: FormGroup;
  notes!: [Notes];
  pageName: string = 'notes';
  errorMessages: string[] = [];
  IsSuccess: boolean = false;
  IsError: boolean = false;
  success!: string;

  constructor(private fb: FormBuilder, private apiService: NotesService, private errMsg: AuthService) { }

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
      console.log('Note created:', note);
      this.IsSuccess = true;
      this.success = 'Note created successfully!';
      this.errorMessages = [];
      this.clearData();
      this.IsError = false;
    },
      (err) => {
        console.log('Error creating note:', err);
        this.IsError = true;
        this.errorMessages = this.errMsg.apiMessages;
        this.IsSuccess = false;
      }
    );
  }

  clearData() {
    this.note.reset();
  }
}

