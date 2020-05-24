import io from 'socket.io-client';

export class ChatService{
  private url = 'http://localhost:80000';
  private socket;
  constructor(){
      this.socket = io(this.url);
  }
}
