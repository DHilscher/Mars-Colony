import { Component, OnInit } from '@angular/core';
import { EncounterService } from '../../services/encounters';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styles: [],
  providers: [ 
  EncounterService,
  ]
})
export class EncountersComponent implements OnInit {

  constructor(private encounterService: EncounterService) { }

async ngOnInit() {
  const encounters = await this.encounterService.getReport();
  console.log(encounters);
  }

}
