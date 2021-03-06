import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'uprunning';
  newPost: boolean = true;
  enalbedChat: boolean = false;
  color: string ='primary';
  dynamicClass = 'normal';
  
  openChat() {
    this.enalbedChat = !this.enalbedChat;
    this.color = this.color == 'warn' ? 'primary' : 'warn';
  }
}

