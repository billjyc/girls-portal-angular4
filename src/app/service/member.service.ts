/**
 * Created by billjyc on 2017/1/25.
 */

import {Injectable} from '@angular/core';
import {Headers, Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Member} from '../model/member';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {MemberWeiboData} from '../model/member-weibo-data';
import {environment} from '../../environments/environment';

@Injectable()
export class MemberService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private membersUrl = environment.serverHost + 'member';

  constructor(private http: Http) {

  }

  getAllActiveMembers(page: number, rows: number) {
    const url = `${this.membersUrl}/list`;
    const params = new URLSearchParams();
    params.set('page', page.toString());
    params.set('rows', rows.toString());
    return this.http.get(url, {search: params})
      .toPromise()
      .then(res =>  res.json())
      .then(data => {return data; })
      .catch(this.handleError);
  }

  getMembersByTeamId(teamId: number) {
    const url = `${this.membersUrl}/team/${teamId}`;
    return this.http.get(url)
      .toPromise()
      .then(res => <Member[]> res.json())
      .then(data => {return data; })
      .catch(this.handleError);
  }

  getPendingMembers() {
    const url = `${this.membersUrl}/list/pending`;
    return this.http.get(url)
      .toPromise()
      .then(res => <Member[]>res.json())
      .then(data => {return data; })
      .catch(this.handleError);
  }

  getMember(id: number) {
    const url = `${this.membersUrl}/list/${id}`;
    return this.http.get(url)
      .map(res => res.json() as Member)
      .catch(this.handleError);
  }

  getWeiboData(id: number) {
    const url = `${this.membersUrl}/weibo/${id}`;
    return this.http.get(url)
      .map(res => res.json() as MemberWeiboData)
      .catch(this.handleError);
  }

  getWeiboHistory(id: number, days = 7) {
    const url = `${this.membersUrl}/weibo/${id}/history`;
    const params = new URLSearchParams();
    params.set('days', days.toString());
    return this.http.get(url, {search: params})
      .toPromise()
      .then(data => <MemberWeiboData[]> data.json())
      .then(data => {return data; })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
