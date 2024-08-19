import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../assets/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elect',
  templateUrl: './elect.component.html',
  styleUrls: ['./elect.component.css']
})
export class ElectionComponent implements OnInit {
  selectedPosition: any;
  hasVoted: boolean = false;

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.selectedPosition = this.homeService.getSelectedPosition();
    const currentUser = localStorage.getItem('loggedInEmail') || '';
    const votes = JSON.parse(localStorage.getItem('votes') || '{}');
    if (votes[currentUser] && votes[currentUser].includes(this.selectedPosition.name)) {
      this.hasVoted = true;
    }
  }

  vote(candidate: any) {
    if (this.hasVoted) return;

    const currentUser = localStorage.getItem('loggedInEmail') || '';
    let votes = JSON.parse(localStorage.getItem('votes') || '{}');

    if (!votes[currentUser]) {
      votes[currentUser] = [];
    }
    votes[currentUser].push(this.selectedPosition.name);
    localStorage.setItem('votes', JSON.stringify(votes));

    candidate.counter += 1;
    this.hasVoted = true;
    this.router.navigate(['/user/user-vote']);
  }

  onLogout(): void {
    localStorage.removeItem('userEmail');
    this.router.navigate(['/user/user-login']);
  }
}
