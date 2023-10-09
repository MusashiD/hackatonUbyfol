import { Component } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hackathonUbyfol';
  faCheckCircle = faCheckCircle;

  selectedDiv: string = '27';
  div27: any;
  div28: any;
  div29: any;

  ngOnInit() {
    this.hideOrShowPin('27');
    this.div27 = document.getElementById('27');
    this.div28 = document.getElementById('28');
    this.div29 = document.getElementById('29');

    this.div27.style.display = 'none';
    this.div28.style.display = 'none';
    this.div29.style.display = 'none';
  }

  hideOrShowPin(pin: string) {
    switch (pin) {
      case '27':
        if (this.div27) {
          this.selectedDiv = '27';
          if (this.div27.style.display == 'none') {
            this.div27.style.display = 'block';
            this.div28.style.display = 'none';
            this.div29.style.display = 'none';
          } else {
            this.div27.style.display = 'none';
          }
        }
        break;

      case '28':
        if (this.div28) {
          this.selectedDiv = '28';
          if (this.div28.style.display == 'none') {
            this.div28.style.display = 'block';
            this.div27.style.display = 'none';
            this.div29.style.display = 'none';
          } else {
            this.div28.style.display = 'none';
          }
        }
        break;

      case '29':
        if (this.div29) {
          this.selectedDiv = '29';
          if (this.div29.style.display == 'none') {
            this.div29.style.display = 'block';
            this.div28.style.display = 'none';
            this.div27.style.display = 'none';
          } else {
            this.div29.style.display = 'none';
          }
        }
        break;
    }
  }

  subscribe() {
    window.open(
      'https://www.sympla.com.br/evento/hackathon-ubyfol-apoio-fazu-e-parque-tecnologico/2188683?referrer=www.google.com',
      '_blank'
    );
  }

  redirect(page: string) {
    window.open(page, '_blank');
  }
}
