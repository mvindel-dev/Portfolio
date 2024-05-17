import { Component } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {

  download(){
    const url = 'assets/pdf/CV_MarcVindel.pdf';
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CV_MarcVindel.pdf';
    a.click();
  }
}
