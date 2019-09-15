import { Component, OnInit } from '@angular/core';
import data from "../../laptopSales";
import { Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  public pieChartLabels: Label[] = [
    'laptop',
    'handphone',
    'tablet'
   ];
   public pieChartData: number[] = [50, 20, 40];
   public pieChartType: ChartType = 'pie';
   public pieChartLegend = true;

  constructor() { }

  ngOnInit() {

    let labels = []
    let salesData = []

    for (let modelSales of data){
      labels.push(modelSales.model)
      salesData.push(modelSales.numberOfSales)
    }

    this.pieChartLabels = labels as Label[]
    this.pieChartData = salesData
  }

}
