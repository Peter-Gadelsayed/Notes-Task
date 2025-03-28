import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit {

  backEndMessage: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.backEndMessage = this.authService.apiMessage
  }
}
