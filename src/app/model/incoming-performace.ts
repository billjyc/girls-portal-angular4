/**
 * Created by billjyc on 2017/2/22.
 */

export interface IncomingPerformance {
  performanceHistoryId: number;
  performanceId: number;
  name: string;
  team?: number;
  date: number;
  description?: string;
}
