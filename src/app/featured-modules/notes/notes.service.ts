import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notes } from 'src/app/models/notes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }
  private baseUrl = environment.baseUrl;
  // newNote!: Notes;

  apiUrl(pageName: string): string {
    return `${this.baseUrl}/${pageName}`;
  }

  getData(pageName: string): Observable<any> {
    return this.http.get<any>(this.apiUrl(pageName));
  }

  postData(pageName: string, note: Notes): Observable<any> {
    return this.http.post<any>(this.apiUrl(pageName), note);
  }

  deleteData(pageName: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${pageName}`);
  }

  getNoteById(pageName: string, id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${pageName}/${id}`);
  }

}
