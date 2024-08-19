import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../assets/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  positions: any[] = [];
  votedPositions: string[] = [];
  currentUser: string = '';

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.positions = this.homeService.getCandidates();
    this.currentUser = localStorage.getItem('loggedInEmail') || '';
    const votes = JSON.parse(localStorage.getItem('votes') || '{}');
    this.votedPositions = votes[this.currentUser] || [];
  }

  goToElection(position: any): void {
    if (this.votedPositions.includes(position.name)) {
      alert('You have already voted for this position.');
      return;
    }

    this.homeService.setSelectedPosition(position);
    this.router.navigate(['/user/user-elect']);
  }

  onLogout(): void {
    this.router.navigate(['/user/user-login']);
  }
}
