import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-session-expired',
  templateUrl: './session-expired.component.html',
  styleUrls: ['./session-expired.component.scss']
})
export class SessionExpiredComponent implements OnInit {
  backEndMessage: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.backEndMessage = this.authService.apiMessage
  }
}
