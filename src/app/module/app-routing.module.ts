import {Routes, RouterModule} from '@angular/router';
import {MembersComponent} from '../component/member.component';
import {NgModule} from '@angular/core';
import {PendingMemberComponent} from '../component/pendingmember.component';
import {MemberDetailComponent} from '../component/member-detail.component';
import {PerformanceComponent} from '../component/performance/performance.component';
import {StandingComponent} from '../component/standing/standing.component';
/**
 * Created by billjyc on 2017/2/1.
 */
const routes: Routes = [
  {path: '', redirectTo: '/members', pathMatch: 'full'},
  {path: 'members', component: MembersComponent},
  {path: 'performances', component: PerformanceComponent},
  {path: 'detail/:id', component: MemberDetailComponent},
  {path: 'standings', component: StandingComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
