import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
    <div class="alert alert-success" [hidden]="displayNitification">
      <p>This website uses cookies to provide better user experience.</p>
      <div class="close">
        <button class="close" (click)="closeNotification()">X</button>
      </div>
    </div>
  `,
  // styleUrls: ['./notification.component.css'],
  styles: [
    '.notification-div{margin: 10px 0px; padding: 10px 20px; background-color: #FAD7A0; text-align: center;}, p{font-size: 14px}',
    '.close{float: right; margin-top: -15px}',
  ],
})
export class NotificationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  displayNitification: boolean = false;
  closeNotification() {
    this.displayNitification = true;
  }
}
