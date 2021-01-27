import { Component, OnInit } from '@angular/core';
import { PortafolioService, portfolioInterface } from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html'
})


export class PortfolioComponent implements OnInit {

  portfolio: portfolioInterface[] = [];

  constructor( private _portfolioService: PortafolioService) {
  }

  ngOnInit(): void {
    this.portfolio = this._portfolioService.getPortfolio();
    console.log(this.portfolio);
  }

}
