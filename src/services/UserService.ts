import { AxiosResponse } from 'axios';
import { Auth, User } from '../interfaces/User';
import apiBack from './api';

export class UserService {
  static async createUser(user: User): Promise<AxiosResponse> {
    const response = await apiBack.post(
      '/users', user,
      {
        validateStatus: status => [201, 400].includes(status),
      },
    );
    return response;
  }

  static async getLogin(login: Auth): Promise<AxiosResponse> {
    const response = await apiBack.post(
      '/login', login,
      {
        validateStatus: status => [200, 400, 500].includes(status),
      },
    );
    return response;
  }
}
