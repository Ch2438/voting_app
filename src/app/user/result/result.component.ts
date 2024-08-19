import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../assets/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  candidates: any[] = [];
  winners: any = {};

  constructor(private homeService: HomeService , private router:Router) {}

  ngOnInit(): void {
    this.candidates = this.homeService.getCandidates();
    this.calculateWinners();
  }

  calculateWinners() {
    this.candidates.forEach(position => {
      this.winners[position.name] = this.getWinner(position.candidates_info);
    });
  }

  getWinner(candidates: any[]) {
    return candidates.reduce((prev, current) => (prev.counter > current.counter) ? prev : current);
  }
  onLogout(): void {

    this.router.navigate(['/user/user-login']);
  }
}
