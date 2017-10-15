import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MembersComponent} from './component/member.component';
import {MemberService} from './service/member.service';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './module/app-routing.module';
import {PendingMemberComponent} from './component/pendingmember.component';
import {MemberDetailComponent} from './component/member-detail.component';
import {DataTableModule} from 'primeng/primeng';
import {SharedModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import 'rxjs/add/operator/toPromise';
import {PaginatorModule} from 'primeng/primeng';
import {DataGridModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {PerformanceService} from './service/performance.service';
import {PerformanceComponent} from './component/performance/performance.component';
import {CarouselModule} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';
import {ChartModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {StandingService} from './service/standing.service';
import {StandingComponent} from './component/standing/standing.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    PendingMemberComponent,
    MemberDetailComponent,
    PerformanceComponent,
    StandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule,
    DataGridModule,
    DataListModule,
    DropdownModule,
    ChartModule,
    PanelModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    PaginatorModule,
    TabViewModule,
    CarouselModule,
    NgbModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [MemberService, PerformanceService, StandingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
