import { AxiosResponse } from 'axios';
import apiBack from './api';

export class ParentsService {
  static async importChildActivities (
  ): Promise<AxiosResponse> {
    const response = await apiBack.get(
      `users`,
      {
        validateStatus: status => [200, 404].includes(status),
      },
    );
    return response;
  }
}
