'use client';

import { useEffect, useState } from 'react';

import { UserService } from '@/services/UserService';
import { User } from '@/shared/types/user';

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    // Fetch users and update state
    UserService.fetchUsers()
      .then((fetchedUsers) => {
        setUsers(fetchedUsers);
      })
      .finally(() => {
        // Set loading to false after fetching completes (success or failure)
        setIsLoading(false);
      });
  }, []); // Empty dependency array ensures this runs only once on mount

  if (isLoading) {
    return <p>Загрузка пользователей...</p>;
  }

  return (
    <table className="user-list">
      <thead>
        <tr>
          <th>Имя</th>
          <th>Email</th>
          <th>Телефон</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
