import { Component, OnInit } from '@angular/core';
import { ColonistService } from '../../services/colonist';
import { JobService } from '../../services/job';

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

  constructor(
    private jobService: JobService,
    private colonistService: ColonistService,
    ) { }

  async ngOnInit() {
    const data = {
      name: 'Hello there',
      age: '50',
      job_id: '2'
    };
    
    const newColonist = await this.colonistService.registerColonist(data);
    console.log(newColonist);

    const jobs = await this.jobService.getJobs();
    console.log(jobs);
  }

}
