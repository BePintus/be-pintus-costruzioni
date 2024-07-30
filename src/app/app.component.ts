import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonalizedHeaderComponent } from "./reusable-components/personalized-header/personalized-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonalizedHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BePintusCostruzioni';
}
