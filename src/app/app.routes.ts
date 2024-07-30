import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ServiceComponent } from './pages/service/service.component';
import PrivacyPopupComponent from './reusable-components/privacy-popup/privacy-popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReusableComponentModule } from './reusable-components/reusable-component/reusable-component.module';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'who-we-are',
        component:WhoWeAreComponent
    },
    {
        path:'contattaci',
        component:ContactUsComponent
    },
    {
        path:'servizi',
        component:ServiceComponent
    },
    {
        path:'informativa-privacy',
        component:PrivacyPolicyComponent
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports:[RouterModule.forRoot(routes),ReusableComponentModule],
    exports:[RouterModule]
})
export class AppRoutingModule {}
