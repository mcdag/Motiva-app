import { AxiosResponse } from 'axios';
import { Reward } from '../interfaces/Rewards';
import apiBack from './api';

export class RewardsService {

  static async importAllRewards(childId:string
  ): Promise<AxiosResponse> {
    const response = await apiBack.get(
      `awards/${childId}`,
      {
        validateStatus: status => [200, 404].includes(status),
      },
    );
    return response;
  }
}
