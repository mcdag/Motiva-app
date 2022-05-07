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

  static async getTasks (today: boolean, createdForId: string
  ): Promise<AxiosResponse<Tasks>> {
    let route = `tasks/?createdForId=${createdForId}`;
    if(today){
      route = `tasks/?today=${today}&createdForId=${createdForId}`
    }
    console.log(route)
    const response = await apiBack.get(
      route,
      {
        validateStatus: status => [200, 404].includes(status),
      },
    );
    return response;
  }

  static async getTask (id: string): Promise<AxiosResponse<Task>> {
      let route = `tasks/${id}`;
      console.log(id);
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
        validateStatus: status => [200, 400].includes(status), 
      },
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
