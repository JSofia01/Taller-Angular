import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];

  constructor(private serieService: SerieService) { }

  getSerieList(): Array<Serie> {
    return dataSeries;
  }

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  SeasonsAverage() {
    let tSeasons: number = 0;
    let tSeries: number = this.series.length;
    this.series.forEach((se) => {
      tSeasons += se.seasons;
    });
    return tSeasons/tSeries;
  }

  ngOnInit() {
    this.series = this.getSerieList();
  }
}
