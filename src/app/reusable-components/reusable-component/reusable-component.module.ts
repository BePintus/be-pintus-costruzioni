import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import PrivacyPopupComponent from '../privacy-popup/privacy-popup.component';



@NgModule({
  declarations: [PrivacyPopupComponent],
  imports: [
    CommonModule
  ],
  exports:[PrivacyPopupComponent]
})
export class ReusableComponentModule { }
