/**
 * Created by billjyc on 2017/2/1.
 */
import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Member} from '../model/member';
import {MemberService} from '../service/member.service';
import {ActivatedRoute, Params} from '@angular/router';
import {MemberWeiboData} from '../model/member-weibo-data';
import {MemberUtil} from '../utils/MemberUtil';
import {MemberPerformanceHistory} from '../model/member-performance';
import {PerformanceService} from '../service/performance.service';
import {MemberCareer} from '../model/member-career';
import {Title} from '@angular/platform-browser';
import {SelectItem} from 'primeng/primeng';
import {UIChart} from 'primeng/components/chart/chart';

@Component({
  moduleId: module.id,
  selector: 'member-detail',
  templateUrl: 'member-detail.component.html',
  styleUrls: ['member-detail.component.css']
})

export class MemberDetailComponent implements OnInit {
  @Input()
  member: Member;
  performanceHistory: MemberPerformanceHistory[];
  careerHistory: MemberCareer[];
  memberWeiboData: MemberWeiboData;
  weiboDataHistory: MemberWeiboData[];
  lineChartData: any;
  chartOptions: any;

  @ViewChild
  ('chart2')chart: UIChart;

  days: SelectItem[] = [{label: '选择天数', value: null},
    {label: '最近7天', value: 7},
    {label: '最近15天', value: 15},
    {label: '最近30天', value: 30},
    {label: '最近三个月', value: 90},
    {label: '最近半年', value: 180}];
  selectedDayRange: string;

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.memberService.getMember(+params['id']))
      .subscribe(member => {
        this.member = member;
        this.setTtile(member.name + '|' + this.formatTeam(member.team));
      });
    this.route.params
      .switchMap((params: Params) => this.memberService.getWeiboData(+params['id']))
      .subscribe(memberWeiboData => this.memberWeiboData = memberWeiboData);
    this.route.params
      .switchMap((params: Params) =>
      this.memberPerformanceService.getMemberPerformanceHistory(+params['id']))
      .subscribe(data => {this.performanceHistory = data; });
    this.route.params
      .switchMap((params: Params) =>
        this.memberPerformanceService.getMemberCareerHistory(+params['id']))
      .subscribe(data => {this.careerHistory = data; });
    this.getWeiboHistoryData();
  }

  constructor(
    private memberService: MemberService,
    private memberPerformanceService: PerformanceService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {

  }

  public setTtile(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  formatDate(date2: number): Date {
    return MemberUtil.formatDate(date2);
  }

  formatDesc(desc: string): string[] {
    return MemberUtil.formatDesc(desc);
  }

  formatTeam(teamId: number): string {
    return MemberUtil.formatTeam(teamId);
  }

  dropDownOnChange(e) {
    const value: number = e.value;
    if (value) {
      this.getWeiboHistoryData(value);
      console.log('update the chart');

      setTimeout(() => {
        this.chart.reinit();
      }, 100);
      // this.chart.reinit();
      // this.chart.refresh();
    }
  }


  getWeiboHistoryData(days = 30) {
    this.route.params
      .switchMap((params: Params) =>
        this.memberService.getWeiboHistory(+params['id'], days))
      .subscribe(data => {
        this.weiboDataHistory = data;
        this.formatWeiboHistoryToLineChart();
        // this.chart.reinit();
        // this.chart.refresh();
        // console.log(this.chart.data);
      });
  }



  private formatWeiboHistoryToLineChart() {
    const labels = [];
    const data = [];
    const datasets = [];

    this.weiboDataHistory.forEach((item, index) => {
      labels.push((item.updateTime));
      data.push(item.weiboFollowerCount);
    });
    datasets.push(
      {
        label: '微博粉丝数',
        data: data,
        fill: false,
        borderColor: '#4bc0c0',
      });
    this.lineChartData = {};
    this.lineChartData = {
      labels: labels,
      datasets: datasets,
    };
    this.chartOptions = {
      title: {
        display: true,
          fontSize: 16,
          text: '微博粉丝数'
      },
      legend: {
        display: false
      },
      elements: {
        line: {
          stepped: false
        }
      },
      scales: {
        yAxes : [{
          ticks: {
            beginAtZero: false
          }
        }]
      }
    };
  }
}
