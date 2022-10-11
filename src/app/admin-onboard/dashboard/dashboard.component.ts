import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  // bar chart start

  public barChartOptions: ChartOptions = {
   
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        font: {
          size: 20,
        },
      },
    },
    
  };
  public barChartLabels: Label[] = ['Agra', 'Aligarh', 'PryagRaj', 'Ambedkar Nagar', 'Amroha', 'Azamgarh', 'Ballia', 'Balrampur', 'Bijnor', 'Bulandshahr', 'Ghaziabad'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;


  public barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [500, 300, 350, 100, 550, 400, 600, 300, 380, 540, 490], label: 'Cases' },
  ];

  // bar chart end


  ChartOptions!: ChartOptions;
  ChartLabels!: Label[];
  ChartData!: SingleDataSet;
  ChartType!: ChartType;
  ChartLegend!: boolean;
  ChartPlugins = [];

  //  typeChart.....................

  typeChartOptions!: ChartOptions;
  typeChartLabels!: Label[];
  typeChartData!: SingleDataSet;
  typeChartType!: ChartType;
  typeChartLegend!: boolean;
  typeChartPlugins = [];


  isShow = true;
  
  constructor() { }

  ngOnInit(): void {
    this.ChartOptions = this.createOptions();
    // this.ChartLabels = ['January', 'February'];
    this.ChartData = [50445, 33655];
    this.ChartType = 'pie';
    this.ChartLegend = true;
    this.ChartLabels = ['Allahabad High Court', 'Lucknow High Court',];

    //  typeChart.....................

    this.typeChartOptions = this.createOptions();
    // this.typeChartLabels = ['January', 'February'];
    this.typeChartData = [50445, 33655, 35423, 45327];
    this.typeChartType = 'pie';
    this.typeChartLegend = true;
    this.typeChartLabels = ['Writ A', 'Writ B', 'Writ C', 'Public Intrest Litigation (PIL)'];
  }

  private createOptions(): ChartOptions {
    return {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        labels: {
          render: 'percentage',
          fontColor: ['green', 'white', 'red'],
          precision: 2,
        }
      },
    };
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

}
