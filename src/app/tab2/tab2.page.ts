import {Component, OnInit} from '@angular/core';
import {ImportDataService} from '../services/import-data.service';
import {Bull} from '../classes/bull.model';
import {Sort} from '@angular/material';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  bulls: Bull[];
  sortedData: Bull[];
  displayedColumns = [
    'codigoDeToro',
    'image',
    'nombre',
    'tpi',
    'nm',
    'cm',
    'leche',
    'proteina',
    'protporcentaje',
    'grasa',
    'porcentajeGrasa',
    'cfp',
    'prel',
    'ptat',
    'udc',
    'flc',
    'trel',
    'pl',
    'liv',
    'dpr',
    'scs',
    'sce',
    'dce',
    'ssb',
    'dsbb',
    'ccr',
    'hcr',
    'betaCaseina',
    'pedigri',
    'aaa',
    'dms',
  ];

  constructor(private importDataService: ImportDataService) {}

  ngOnInit() {
    this.importDataService.getBulls().subscribe(cows => {
      this.bulls = cows as Bull[];
      this.sortedData = this.bulls.slice();
    });
  }

  sortData(sort: Sort) {
    const data = this.bulls.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      return compare(a[sort.active], b[sort.active], isAsc);
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
