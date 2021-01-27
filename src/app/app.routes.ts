import { RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';


const APP_ROUTES: Routes = [ 
    { path: 'about', component: AboutComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'about'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,  { useHash: true });