import axios from 'axios';

import { User } from '@/shared/types/user';

export class UserService {
  private static readonly API_URL = 'https://jsonplaceholder.typicode.com/users';

  static async fetchUsers(): Promise<User[]> {
    try {
      const response = await axios.get<User[]>(this.API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }
}
