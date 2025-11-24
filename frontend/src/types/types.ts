export interface User {
  username: string;
  email: string;
}

export interface AuthForm {
  username: string;
  email?: string;
  password: string;
}