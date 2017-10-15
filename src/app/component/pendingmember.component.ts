/**
 * Created by billjyc on 2017/2/1.
 */

import {Component, OnInit} from '@angular/core';
import {MemberService} from '../service/member.service';
import {Member} from '../model/member';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'pending-members',
  templateUrl: 'pendingmember.component.html'
})

export class PendingMemberComponent implements OnInit {
  pendingMembers: Member[];
  selectedMember: Member;

  ngOnInit(): void {
    this.memberService.getPendingMembers().then(
      members => this.pendingMembers = members
    );
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedMember.id]);
  }

  onSelect(selectMember: Member): void {
    this.selectedMember = selectMember;
    this.goToDetail();
  }

  constructor(private memberService: MemberService,
              private router: Router) {

  }

}
