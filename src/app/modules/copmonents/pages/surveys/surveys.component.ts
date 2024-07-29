import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent {

  openLinkZero() {
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSet4yrtpnXR_xm1ZLfoV5uX7xRye-LS-Y9We4H0NQ-Xbx2cKw/viewform'; // Reemplaza con tu URL
    window.open(url, '_blank');
  }
  openLinkOne() {
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSeHU9KExa_zwBHzV_2s8c4Uhx3l16MwKp4jxhB8cvdiIyPJ6A/viewform'; // Reemplaza con tu URL
    window.open(url, '_blank');
  }
  openLinkTwo() {
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSf8YLskcmeUoaJggZSRk4yfJ9SgEW4HUotKJGcb157NjCLgZw/viewform'; // Reemplaza con tu URL
    window.open(url, '_blank');
  }
  openLinkThree() {
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSfDhjDqZam72YWZ--UgbEsJH-rsXT7X0AqOhok8T1FgrMUyrQ/viewform'; // Reemplaza con tu URL
    window.open(url, '_blank');
  }
}
