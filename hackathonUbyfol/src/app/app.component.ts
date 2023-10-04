import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hackathonUbyfol';

  subscribe(){
    window.open('https://www.sympla.com.br/evento/hackathon-ubyfol-apoio-fazu-e-parque-tecnologico/2188683?referrer=www.google.com', '_blank');
  }
}
