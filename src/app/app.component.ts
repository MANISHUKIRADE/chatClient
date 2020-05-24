import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'chatClient';
  userList = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  messages = [{
    Name: 'George Clooney',
    Message: 'The only failure is not to try'
  }, {
    Name: 'Seth Rogen',
    Message: 'I grew up in Vancouver, man. Thats where more than half of my style comes from.'
  }, {
    Name: 'John Lydon',
    Message: 'Theres nothing glorious in dying. Anyone can do it.'
  }];
  newMessage : string ;
  sendMessage() {
    console.log(this.newMessage);
  }
}
