import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule], // Ensure IonicModule is imported
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {
  event = {
    name: 'Bolder Meetups',
    startDate: 'Saturday, February 15 2025 at 7:00 PM MST',
    endDate: 'Saturday, February 15 2025 at 10:00 PM MST',
    location: 'Bolder Climbing Community',
    description:
      'Come hang out with UCBoulder at Bolder Climbing Community! 7-10 pm every second Saturday night, starting January 18!',
    host: 'Bouldering Club',
    url: 'https://suuofc.campuslabs.ca/engage/event/280265',
    cost: 0,
    size: 233,
  };
}
