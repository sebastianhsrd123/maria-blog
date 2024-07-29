import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mind-computer',
  templateUrl: './mind-computer.component.html',
  styleUrls: ['./mind-computer.component.scss']
})
export class MindComputerComponent {

  openLinkZero() {
    const url = 'https://docs.google.com/presentation/d/1aywqqLjdW19rnnNzhV-bv0H0Dq6R5f44/edit?usp=sharing&ouid=116396466885367845959&rtpof=true&sd=true'; // Reemplaza con tu URL
    window.open(url, '_blank');
  }
  openLinkOne() {
    const url = 'https://docs.google.com/presentation/d/17u9fA2p4IGjTEJ6ii0HhwZRqLk4DaI9m/edit?usp=sharing&ouid=116396466885367845959&rtpof=true&sd=true'; // Reemplaza con tu URL
    window.open(url, '_blank');
  }
  openLinkTwo() {
    const url = 'https://docs.google.com/presentation/d/1k9nLTSWVBZbXyU2QyLzp83K6xP5wVIr1/edit?usp=sharing&ouid=116396466885367845959&rtpof=true&sd=true'; // Reemplaza con tu URL
    window.open(url, '_blank');
  }
  openLinkThree() {
    const url = 'https://docs.google.com/presentation/d/1KUvVrNys3vNY8qBmHlut5nDb87cIRfcM/edit?usp=sharing&ouid=116396466885367845959&rtpof=true&sd=true'; // Reemplaza con tu URL
    window.open(url, '_blank');
  }
  openLinkFour() {
    const url = 'https://docs.google.com/presentation/d/1gLWcz8APEXTbsEf3EVfCpzJn0uPiTzw3/edit?usp=sharing&ouid=116396466885367845959&rtpof=true&sd=true'; // Reemplaza con tu URL
    window.open(url, '_blank');
  }

}

