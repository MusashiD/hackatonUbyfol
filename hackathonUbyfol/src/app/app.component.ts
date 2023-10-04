import { Component } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hackathonUbyfol';
  faCheckCircle = faCheckCircle;

  subscribe(){
    window.open('https://www.sympla.com.br/evento/hackathon-ubyfol-apoio-fazu-e-parque-tecnologico/2188683?referrer=www.google.com', '_blank');
  }
}
