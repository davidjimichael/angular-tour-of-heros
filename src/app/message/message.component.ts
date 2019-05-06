import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
    selector: '<message>',
    templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
    ngOnInit(): void {
    }
    constructor(public messageService: MessageService) { }
}