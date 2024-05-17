import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  success:boolean = false;

  sendEmail(e: Event){
    e.preventDefault();

    emailjs.sendForm('service_portfolio', 'template_portfolio', e.target as HTMLFormElement, {
      publicKey: 'Xujxg-I9GXHGOv2S3'
    }).then(
      () => {
        this.success=true;
      },
      (error) => {
        console.log((error as EmailJSResponseStatus).text);
      }
    )
  }

}
