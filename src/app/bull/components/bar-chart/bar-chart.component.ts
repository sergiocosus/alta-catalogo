import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {Bull} from '../../../classes/bull.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  @Input() bull: Bull;

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{}], yAxes: [{
        stacked: true,
        gridLines: {
          display: true,
          color: 'rgba(52,122,188,0.87)'
        },
        ticks: {
          suggestedMax: 3,
          suggestedMin: -3
        }
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;


  public barChartLabels: Label[] = [
    'PTAT',
    'UDC',
    'FLC',
    '',
    'Estatura',
    'Fortaleza',
    'Prof. Cuerpo',
    'Fortaleza Lechera',
    'Angulo Grupa',
    'Ancho Grupa',
    'Patas lateral',
    'Vista Patas Post.',
    'Angulo de Pie',
    'Score Patas',
    'Col. Ubre Ant.',
    'Alt. Ubre Post.',
    'Anch Ubre Pos',
    'Hend. Ubre',
    'Prof de Ubre',
    'Coloc. Pezones',
    'Col Pezón Tras.',
    'Largo Pezones',
  ];

  public barChartData: ChartDataSets[] = [
    {
      data: [

      ]
    },
  ];

  constructor() {
  }

  ngOnInit() {
    this.barChartData = [{
      data: [
        this.bull.ptat,
        this.bull.udc,
        this.bull.flc,
        0,
        this.bull.estatura,
        this.bull.fortaleza,
        this.bull.profCuerpo,
        this.bull.fortalezaLechera,
        this.bull.anguloGrupa,
        this.bull.anchoGrupa,
        this.bull.rlsv,
        this.bull.rlrv,
        this.bull.anguloDePie,
        this.bull.fls,
        this.bull.jeColUbreAnt,
        this.bull.rUdderHeight,
        this.bull.anchoUbreTrasera,
        this.bull.hendUbre,
        this.bull.udderDepth,
        this.bull.ftp,
        this.bull.rtp,
        this.bull.longitudDePezones,
      ],
      label: '',
      backgroundColor: 'rgba(15,32,188,0.49)',
      hoverBackgroundColor: 'rgba(0,31,197,0.82)',
      hoverBorderColor: 'rgb(0,31,197)'
    }];
  }

  // events
  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
