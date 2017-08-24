import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';
import { EncounterService } from '../../services/encounters';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { NewReport } from '../../models/report';
import { Alien } from '../../models/alien';



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
  aliens: Alien[];

  reportForm = new FormGroup({
    atype: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    colonist_id: new FormControl('', [Validators.required]),
    action: new FormControl('', [Validators.required, Validators.maxLength(500), Validators.minLength(2)])
  });

  constructor(
    private alienService: AlienService,
    private encounterService: EncounterService,
    ) { }

  async ngOnInit() {
    this.aliens = await this.alienService.getAliens();
  }

  
 async reportEncounter() {
    const newReport: NewReport = {
      colonist_id: this.reportForm.get('colonist_id').value,
      action: this.reportForm.get('action').value,
      atype: this.reportForm.get('atype').value,
      date: this.reportForm.get('date').value
    };
   
  const encounter = await this.encounterService.reportEncounter(newReport);
  console.log('alien was reported', encounter);
 }

}
