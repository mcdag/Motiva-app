import { AxiosResponse } from 'axios';
import { Reward } from '../interfaces/Rewards';
import apiBack from './api';

export class RewardsService {

  static async createReward(reward:Reward
    ): Promise<AxiosResponse> {
      const response = await apiBack.post(
        `awards`,
        reward,
        {
          validateStatus: status => [201, 404].includes(status),
        },
      );
      return response;
    }

  static async importAllRewardsByChild(childId:string
  ): Promise<AxiosResponse> {
    const response = await apiBack.get(
      `awards?createdForId=${childId}`,
      {
        validateStatus: status => [200, 404].includes(status),
      },
    );
    return response;
  }
}
