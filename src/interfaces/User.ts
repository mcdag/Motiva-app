export interface User {
  name: string;
  email: string;
  phone?: string;
  parentId?: string;
  password: string;
}

export interface Auth {
  email: string;
  password: string;
}