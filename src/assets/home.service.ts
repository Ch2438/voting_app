import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  private candidates = [
    {
      name: 'National Assembly',
      candidates_info: [
        {
          name: 'Imran Khan',
          age: 65,
          party: 'PTI',
          counter: 0
        },
        {
          name: 'Nawaz Sharif',
          age: 70,
          party: 'PMLN',
          counter: 0
        },
        {
          name: 'Shehbaz Shareef',
          age: 70,
          party: 'PMLN',
          counter: 0
        },
        {
          name: 'Asif Zardari',
          age: 75,
          party: 'PPP',
          counter: 0
        }
      ],
    },
    {
      name: 'Provincial',
      candidates_info: [
        {
          name: 'Ali Muahmmad Khan',
          age: 65,
          party: 'PTI',
          counter: 0
        },
        {
          name: 'Hamza Shehbaz',
          age: 70,
          party: 'PMLN',
          counter: 0
        },
        {
          name: 'Ali Ameen',
          age: 70,
          party: 'PTI',
          counter: 0
        },
        {
          name: 'Asif Zardari',
          age: 75,
          party: 'PPP',
          counter: 0
        }
      ],
    },
    {
      name: 'Union Council',
      candidates_info: [
        {
          name: 'Daddu Charjer ',
          age: 65,
          party: 'PMLN',
          counter: 0
        },
        {
          name: 'Maryam Nawaz',
          age: 50,
          party: 'PMLN',
          counter: 0
        },
        {
          name: 'Sheikh Rasheed',
          age: 70,
          party: 'Pindi Party',
          counter: 0
        },
        {
          name: 'Bilawal',
          age: 75,
          party: 'PPP',
          counter: 0
        }
      ],
    }
  ];

  getCandidates() {
    return this.candidates;
  }

  private selectedPosition: any;


  setSelectedPosition(position: any): void {
    this.selectedPosition = position;
  }

  getSelectedPosition(): any {
    return this.selectedPosition;
  }


}
