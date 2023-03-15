import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sun-Travel-Agency';

  constructor(private router: Router) {}

  isActiveRoute(route: string): boolean {
    return this.router.url.includes(route);
  }

  goToHotelPage(): void {
    this.router.navigate(['/hotel']);
  }

  goToAddContractPage(): void {
    this.router.navigate(['/addContract']);
  }

  goToAddHotelPage(): void {
    this.router.navigate(['/addHotel']);
  }

  goToAddRoomTypePage(): void {
    this.router.navigate(['/addRoomType']);
  }

  goToRoomTypePage(): void {
    this.router.navigate(['/roomType']);
  }

  goToContractPage(): void {
    this.router.navigate(['/contract']);
  }

  goToSearchPage(): void {
    this.router.navigate(['/search']);
  }
}
