import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {
  message = '';
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  onChange() {
    this.messageService.sendMessage(this.message);
  }

}
