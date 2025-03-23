import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from 'src/app/models/notes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }
  private baseUrl = environment.baseUrl;
  newNote!: Note;

  apiUrl(pageName: string): string {
    return `${this.baseUrl}${pageName}`;
  }

  getData(pageName: string): Observable<any> {
    return this.http.get<any>(this.apiUrl(pageName));
  }

  postData(pageName: string, note: Note): Observable<any> {
    return this.http.post<any>(this.apiUrl(pageName), this.newNote);
  }
}
