import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  backEndMessage: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.backEndMessage = this.authService.apiMessage
  }
}
