import { Component } from '@angular/core';
import { PersonalizedHeaderComponent } from "../../reusable-components/personalized-header/personalized-header.component";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  imports: [PersonalizedHeaderComponent]
})
export class ContactUsComponent {

}
