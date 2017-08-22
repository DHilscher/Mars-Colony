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





  const data = {
    date: '2011-10-10',
    colonist_id: '3',
    atype: 'spider',
    action: 'ham'
  }
  const newEncounters = await this.encounterService.reportEncounter(data);
  console.log(newEncounters);
  
  }

}
