import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../../assets/home.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent {
  positions: any[] = [];

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.positions = this.homeService.getCandidates();
  }

  showCandidates(position: any): void {
    this.homeService.setSelectedPosition(position);
    this.router.navigate(['/user/user-candidates']);
  }
  onLogout(): void {
    this.router.navigate(['/user/user-login']);
  }
}
