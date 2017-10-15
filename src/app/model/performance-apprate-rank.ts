/**
 * Created by billjyc on 2017/2/19.
 */

export interface PerformanceAppRateRank {
  rank: number;
  memberId: number;
  name: string;
  team: number;
  batch: string;
  imageLink?: string;
  apps: number;
  total: number;
  appRate: number;
}
