import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';
import { EncounterService } from '../../services/encounters';



@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styles: [],
  providers: [
    AlienService,
    EncounterService
  ]
})
export class ReportComponent implements OnInit {

  constructor(
    private alienService: AlienService,
    private encounterService: EncounterService,
    ) { }

  async ngOnInit() {
    const aliens = await this.alienService.getAliens();
    console.log(aliens);

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
