import { AxiosResponse } from 'axios';
import { Task, Tasks } from '../interfaces/Task';
import apiBack from './api';

export class TasksService {
  static async createTask (task: Task
  ): Promise<AxiosResponse> {
    const response = await apiBack.post(
      'tasks', task,
      {
        validateStatus: status => [201, 400].includes(status),
      },
    );
    return response;
  }

  static async getTasks (today: boolean
  ): Promise<AxiosResponse<Tasks>> {
    let route = 'tasks';
    if(today){
      route = `${route}/?today=${today}`
    }
    const response = await apiBack.get(
      route,
      {
        validateStatus: status => [200, 404].includes(status),
      },
    );
    return response;
  }

  static async updateTask (id: string, task: Task
  ): Promise<AxiosResponse> {
    const response = await apiBack.patch(
     `tasks/${id}`, task,
    {
      validateStatus: status => [200, 400].includes(status),          },
    );
    return response;
  }
      
  static async deleteTask (id: string
  ): Promise<AxiosResponse> {
    const response = await apiBack.delete(
      `tasks/${id}`,
      {
        validateStatus: status => [204, 400].includes(status),
      },
    );
    return response;
  }
}
