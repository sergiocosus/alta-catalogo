import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ImportDataService} from '../services/import-data.service';
import {Bull} from '../classes/bull.model';

@Component({
  selector: 'app-bull',
  templateUrl: './bull.page.html',
  styleUrls: ['./bull.page.scss'],
})
export class BullPage implements OnInit {
  private bullId: string;
  bull: Bull;

  constructor(private route: ActivatedRoute,
              private importDataService: ImportDataService) {
    this.route.paramMap.subscribe(params => {
      this.bullId = params.get('bullId');
      this.loadBullData();
    });
  }

  ngOnInit() {
  }

  private loadBullData() {
    this.importDataService.getBull(this.bullId).subscribe(bull => {
      this.bull = bull;
    });
  }
}
