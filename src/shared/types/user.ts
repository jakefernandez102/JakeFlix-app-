export interface UserProfile {
  id: number;
  name: string;
  avatar: string;
  bgColor: string;
}
export interface User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  authenticated?: boolean;
  profiles?: UserProfile[];
}
