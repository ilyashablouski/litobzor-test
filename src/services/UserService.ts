import axios from 'axios';

import { User } from '@/shared/types/user';

// In-memory cache for users because no need to fetch data after routing change
let cachedUsers: User[] | null = null;

// Service class to handle API requests for user data with caching
export class UserService {
  private static readonly API_URL = 'https://jsonplaceholder.typicode.com/users';

  static async fetchUsers(): Promise<User[]> {
    // If we have cached users, return them immediately
    if (cachedUsers) {
      return cachedUsers;
    }

    try {
      const response = await axios.get<User[]>(this.API_URL);
      // Cache the fetched users
      cachedUsers = response.data;
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }
}
