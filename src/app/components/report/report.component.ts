import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';
import { EncounterService } from '../../services/encounters';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { NewReport } from '../../models/report';
import { Alien } from '../../models/alien';
import { Router } from '@angular/router';



@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [
    AlienService,
    EncounterService
  ]
})
export class ReportComponent implements OnInit {
  aliens: Alien[];

  reportForm = new FormGroup({
    atype: new FormControl('', [Validators.required]),
    action: new FormControl('', [Validators.required, Validators.maxLength(500), Validators.minLength(2)])
  });

  constructor(
    private alienService: AlienService,
    private encounterService: EncounterService,
    private router:Router
    ) { }

  async ngOnInit() {
    this.aliens = await this.alienService.getAliens();
  }

  
 async reportEncounter() {
   console.log('test');
    const newReport: NewReport = {
      colonist_id: '2',
      action: this.reportForm.get('action').value,
      atype: this.reportForm.get('atype').value,
      date: '3000-1-1'
    };
   
  const encounter = await this.encounterService.reportEncounter(newReport);
  console.log('alien was reported', encounter);
  this.router.navigate(['encounters']);
 }

}
