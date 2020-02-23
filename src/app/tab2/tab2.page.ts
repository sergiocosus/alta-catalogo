import {Component, OnInit} from '@angular/core';
import {ImportDataService} from '../services/import-data.service';
import {Bull} from '../classes/bull.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  cows: Bull[];

  constructor(private importDataService: ImportDataService) {}

  ngOnInit() {
    this.importDataService.getBulls().subscribe(cows => {
      this.cows = cows as any;
    });
  }



}
