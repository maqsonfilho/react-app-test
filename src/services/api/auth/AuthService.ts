import axios, { AxiosResponse } from 'axios';

import ApiService from '../common/ApiService';
import User from '../users/User';

class AuthService extends ApiService<User> {
  constructor() {
    super('/api/auth');
  }

  async authenticate(username: string, password: string): Promise<string> {
    try {
      const response: AxiosResponse<any> = await axios.post<any>(this.baseUrl + '/token', {
        username: username,
        password: password,
      });
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error('Token not found in response');
      }
    } catch (error: any) {
      throw error;
    }
  }
}

export default AuthService;
