import axios, { AxiosResponse } from 'axios';
import ApiService from '../common/ApiService';
import User from './User';

class UserService extends ApiService<User> {
  constructor() {
    super('/api/user');
  }

  async getLoggedUser(): Promise<User> {
    try {
      const response: AxiosResponse<any> = await axios.get<any>(this.baseUrl + '/me');
      if (response && response.data && response.data.isSuccess) {
        return response.data.data;
      } else {
        throw new Error('Token not found in response');
      }
    } catch (error: any) {
      throw error;
    }
  }
}

export default UserService;