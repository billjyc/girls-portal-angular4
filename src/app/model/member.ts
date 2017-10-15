/**
 * Created by billjyc on 2017/1/25.
 */

export interface Member {
  id?: number;
  name?: string;
  nickName?: string;
  height?: number;
  bloodType?: string;
  team?: string;
  batch?: string;
  birthday?: Date;
  joinTime?: Date;
  link?: string;
  imageLink?:string;
  hobby?: string;
  description?: string;
  isValid?: number;
  birthPlace?: string;
  constellation?: string;
  englishName?: string;
  agency?: string;
  speciality?: string;
}

/*export class Member {
  constructor(public id: number,
              public name: string,
              public nickName: string,
              public height: number,
              public bloodType: string,
              public team: string,
              public batch: string,
              public birthday: Date,
              public joinTime: Date,
              public link: string,
              public imageLink:string,
              public hobby: string,
              public description: string) {

  }

}*/
