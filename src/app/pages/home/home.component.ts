import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableComponentModule } from '../../reusable-components/reusable-component/reusable-component.module';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ReusableComponentModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentVersion = "0.0.1"; // Aggiorna questo valore con ogni modifica significativa alla politica

  isVisited = !JSON.parse((localStorage.getItem('visited')??'false'));

  haveNewPolicyVersion = localStorage.getItem('privacyPolicyVersion') !== this.currentVersion;

}
