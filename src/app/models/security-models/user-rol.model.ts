import {IBaseModel} from "../base.model";
import {ModuleModel} from "./module.model";


export interface IProfileModel extends IBaseModel {
  profileId: number,
  profile: string,
  description: string,
  code: string,
  modules: ModuleModel[]
}

export class UserRolModel implements IProfileModel {
  profileId: number;
  profile: string;
  description: string;
  code: string;
  modules: ModuleModel[];

  constructor(data?: IProfileModel) {
    if (data) {
      this.init(data);
    }

  }

  fromJSON(data?: any): UserRolModel {
    data = typeof data === 'object' ? data : {}
    return new UserRolModel(data)
  }

  init(data?: any): void {
    if (data) {
      this.profileId = data['profile_id'];
      this.profile = data['profile'];
      this.description = data['description'];
      this.code = data['code'];
      this.modules = data['modules'] instanceof Array ? data['modules'].map(module => new ModuleModel(module)) : [];
    }
  }

  toJSON(): {} {
    return {
      description: this.description,
      profile: this.profile,
      profile_id: this.profileId,
      code: this.code,
      modules: this.modules.map(module => module.toJSON())
    };
  }

}
