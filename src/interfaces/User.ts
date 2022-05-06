export interface User {
  id?: string;
  name: string;
  email: string;
  icon?: string;
  coins?: number;
  phone?: string;
  parentId?: string;
  password: string;
  children?: User[];
}

export interface Auth {
  email: string;
  password: string;
}