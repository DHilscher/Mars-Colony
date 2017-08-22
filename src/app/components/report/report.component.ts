import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styles: []
})
export class ReportComponent implements OnInit {

  constructor(alienService: AlienService) { }

  ngOnInit() {
  }

}
