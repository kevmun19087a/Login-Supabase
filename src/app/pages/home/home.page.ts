import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonText
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { SupabaseService } from '../../services/login';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',
  imports: [CommonModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonText]
})
export class HomePage {
  private supa = inject(SupabaseService);
  private router = inject(Router);

  async logout() {
    await this.supa.signOut();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}