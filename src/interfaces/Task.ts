import { User } from './User';

export type TaskType = 
 | 'daily'
 | 'relationship'

export type Day =
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'

export interface Task {
  id?: string;
  name: string;
  coins: number;
  type: TaskType;
  days: Day[];
  createdById: string;
  createdBy?: User;
  createdForId: string;
  createdFor?: User;
  date?: string;
  status?: Boolean;
}

export interface Tasks {
  dailyTasks: Task[];
  relationshipTasks: Task[];
}