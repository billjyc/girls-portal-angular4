import { Component, OnInit } from '@angular/core';
import {Performance} from '../../model/performance';
import {PerformanceService} from '../../service/performance.service';
import {Title} from '@angular/platform-browser';
import {MemberUtil} from '../../utils/MemberUtil';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {IncomingPerformance} from '../../model/incoming-performace';

@Component({
  moduleId: module.id,
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  performances: Performance[];
  incomingPerformances: IncomingPerformance[];

  constructor(private performanceService: PerformanceService,
              private titleService: Title) {
    this.titleService.setTitle('公演');
  }

  ngOnInit() {
    Cookie.delete('teamId');
    this.getAllPerformances();
    this.getAllIncomingPerformances();
  }

  formatTeam(teamId: number) {
    return MemberUtil.formatTeam(teamId);
  }

  getAllPerformances() {
    this.performanceService.getAllPerformances()
      .then(data => {this.performances = data; });
  }

  getAllIncomingPerformances() {
    this.performanceService.getAllIncomingPerformances()
      .then(data => {this.incomingPerformances = data; });
  }
}
