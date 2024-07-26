import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent {

  constructor() { }

  downloadJuniorFile() {
    const link = document.createElement('a');
    link.href = 'assets/PPTX/PC_T1_PE_JUNIOR--.pdf';
    link.download = 'PE_JUNIOR.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadSeniorFile() {
    const link = document.createElement('a');
    link.href = 'assets/PPTX/PC_T1_PE_SENIOR.pdf';
    link.download = 'PE_SENIOR.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
