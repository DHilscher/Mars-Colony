import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(jobService: JobService) { }

  ngOnInit() {
  }

}
