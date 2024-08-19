import { HomeService } from '../../../assets/home.service';
import { Component, OnInit,inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router , RouterModule } from '@angular/router';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  fb = inject(FormBuilder)
  candidates: any[] = [];
  showModal: boolean = false;
  selectedPosition: any;

  constructor(private homeService: HomeService , private router: Router) { }

  addForm = this.fb.group({
    position: ['', Validators.required],
    name: ['', Validators.required],
    age: ["", Validators.required],
    party: ['', Validators.required],
    counter: 0
  })

  ngOnInit(): void {
    this.candidates = this.homeService.getCandidates();
    this.selectedPosition = this.homeService.getSelectedPosition();
  }

  toggleForm() {
    this.showModal = !this.showModal;
  }

  onSubmit() {
    if (this.addForm.valid) {
        const newCandidate = {
        name: this.addForm.value.name,
        age: this.addForm.value.age,
        party: this.addForm.value.party,
        counter: 0
      };

      const position = this.candidates.find(pos => pos.name === this.addForm.value.position);
      if (position) {
        position.candidates_info.push(newCandidate);
      }
      this.toggleForm();
    }
  }
  addCandidate(): void {
    const newCandidate = this.addForm.value;
    const position = this.selectedPosition;
    if (position) {
      position.candidates_info.push(newCandidate);
    }
    this.toggleForm();
  }
  onLogout(): void {

    this.router.navigate(['/admin-login']);
  }



}
