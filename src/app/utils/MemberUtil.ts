import {Team} from '../model/team';
/**
 * Created by billjyc on 2017/2/13.
 */

export class MemberUtil {
  static formatDate(date2: number): Date {
    return new Date(date2);
  }

  static formatDesc(desc: string): string[] {
    return desc.split('\n');
  }

  static formatTeam(teamId: number): string {
    if (teamId == null) {
      return '';
    }
    return 'SNH48 Team ' + Team[teamId];
  }
}
