import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { BioComponent } from './pages/bio/bio.component';
import { ReelComponent } from './pages/reel/reel.component';
import { VirtuelComponent } from './pages/virtuel/virtuel.component';
import { VideoComponent } from './pages/video/video.component';
import { OffrandeComponent } from './pages/offrande/offrande.component';
import { OnlyfansComponent } from './pages/onlyfans/onlyfans.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'bio', component: BioComponent },
  { path: 'reel', component: ReelComponent },
  { path: 'virtuel', component: VirtuelComponent },
  { path: 'video', component: VideoComponent },
  { path: 'offrande', component: OffrandeComponent },
  { path: 'onlyfans', component: OnlyfansComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } // Redirection vers l'accueil pour les URL inconnues
];
