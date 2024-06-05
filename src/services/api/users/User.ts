import ModelBase from '../common/ModelBase';

export interface User extends ModelBase {
  username: string;
  email: string,
  fullName: string,
  profileId: string,
}

export default User;
