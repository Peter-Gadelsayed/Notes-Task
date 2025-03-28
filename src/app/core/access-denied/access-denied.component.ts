import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.scss']
})
export class AccessDeniedComponent implements OnInit {

  backEndMessage: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.backEndMessage = this.authService.apiMessage
  }

}
