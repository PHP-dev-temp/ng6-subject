import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from '../message.service';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-send-receive',
  templateUrl: './send-receive.component.html',
  styleUrls: ['./send-receive.component.css']
})
export class SendReceiveComponent implements OnInit, OnDestroy {
  message = '';
  subscription: Subscription;
  constructor(private messageService: MessageService) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.message = message;
      console.log(this.message);
    });
  }

  ngOnInit() {
  }

  onChange() {
    this.messageService.sendMessage(this.message);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }


}
