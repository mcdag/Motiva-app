export interface Activity {
  id: number;
  name: string;
  status: boolean;
}

export interface ActivityList {
  alone: Activity[];
  parent: Activity[];
}
