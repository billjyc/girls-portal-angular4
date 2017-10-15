/**
 * Created by billjyc on 2017/1/25.
 */


import {Component, OnInit} from '@angular/core';
import {MemberService} from '../service/member.service';
import {Router} from '@angular/router';
import {Member} from '../model/member';
import 'rxjs/Rx';
import {MemberUtil} from '../utils/MemberUtil';
import {Title} from '@angular/platform-browser';
import {Cookie} from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'member-list',
  moduleId: module.id,
  templateUrl: 'member.component.html',
  styleUrls: ['member.component.css']
})

export class MembersComponent implements OnInit {
  members: Member[];
  selectedMember: Member;
  page: number;
  rows: number;
  total: number;
  team = 1;

  ngOnInit(): void {
    this.rows = 20;
    this.page = 1;

    // console.log(MembersComponent.team);
    const teamIdCookie = Cookie.get('teamId');
    if (!teamIdCookie) {
      this.team = 1;
    } else {
      this.team = +teamIdCookie;
    }
    this.getMembersByTeamId(this.team);
  }

  constructor(private memberService: MemberService,
              private router: Router,
              private titleService: Title) {
    this.titleService.setTitle('成员');
  }

  shouldSelected(id: number) {
    return this.team === id;
  }

  paginate(event: any) {
    this.getMembers2(event.page + 1, event.rows);
  }

  handleTabChange(e) {
    const index = e.index;
    this.team = index + 1;
    Cookie.set('teamId', this.team.toString());
    this.getMembersByTeamId(index + 1);
  }

  getMembersByTeamId(id: number) {
    this.memberService.getMembersByTeamId(id)
      .then(data => {this.members = data; });
  }

  formatTeam(teamId: number): string {
    return MemberUtil.formatTeam(teamId);
  }

  getMembers2(page: number, rows: number) {
    this.rows = rows;
    this.page = page;
    this.memberService.getAllActiveMembers(page, rows)
      .then(result => {
        this.members = <Member[]> result.rows;
        this.total = result.total;
      });
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedMember.id]);
  }

  onSelect(selectedMember: Member): void {
    this.selectedMember = selectedMember;
    this.goToDetail();
  }
}
