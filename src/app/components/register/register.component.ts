import { Component, OnInit } from '@angular/core';
import { ColonistService } from '../../services/colonist';
import { JobService } from '../../services/job';
import { Job } from '../../models/job';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
  providers: [
    JobService,
    ColonistService
  ]
})
export class RegisterComponent implements OnInit {
  jobs: Job[];

  registerForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    job_id: new FormControl('')
  });
  
  constructor(
    private jobService: JobService,
    private colonistService: ColonistService,
    ) { }

  async ngOnInit() {
  this.jobs = await this.jobService.getJobs();    
  }
}
