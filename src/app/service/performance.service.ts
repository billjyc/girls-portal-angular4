import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {MemberPerformanceHistory} from '../model/member-performance';
import {MemberCareer} from '../model/member-career';
import {Performance} from '../model/performance';
import {environment} from '../../environments/environment';
import {IncomingPerformance} from '../model/incoming-performace';
/**
 * Created by billjyc on 2017/2/13.
 */

@Injectable()
export class PerformanceService {
  private performanceUrl = environment.serverHost + 'performance';

  constructor(private http: Http) {}

  getMemberPerformanceHistory(memberId: number) {
    const url = `${this.performanceUrl}/member/${memberId}/history`;
    return this.http.get(url)
      .toPromise()
      .then(data => <MemberPerformanceHistory[]> data.json())
      .then(data => {return data; })
      .catch(this.handleError);
  }

  getMemberCareerHistory(memberId: number) {
    const url = `${this.performanceUrl}/member/${memberId}/career`;
    return this.http.get(url)
      .toPromise()
      .then(data => <MemberCareer[]> data.json())
      .then(data => {return data; })
      .catch(this.handleError);
  }

  getAllPerformances() {
    const url = `${this.performanceUrl}/list`;
    return this.http.get(url)
      .toPromise()
      .then(data => <Performance[]> data.json())
      .then(data => {return data; })
      .catch(this.handleError);
  }

  getAllIncomingPerformances() {
    const url = `${this.performanceUrl}/incoming/list`;
    return this.http.get(url)
      .toPromise()
      .then(data => <IncomingPerformance[]> data.json())
      .then(data => {return data; })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
