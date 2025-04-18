'use client';

import { useEffect, useState } from 'react';

import styles from './UserList.module.scss';
import { UserService } from '@/services/UserService';
import { User } from '@/shared/types/user';

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch users from the API or cache when the component mounts
  useEffect(() => {
    setIsLoading(true);

    // Fetch users and update state
    UserService.fetchUsers()
      .then((fetchedUsers) => {
        setUsers(fetchedUsers);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []); // Empty dependency array ensures this runs only once on mount

  // Fallback to a loading message while users is being fetched
  if (isLoading) {
    return (
      <p style={{ marginTop: '50px', textAlign: 'center', fontSize: '1.5rem' }}>
        Загрузка пользователей...
      </p>
    );
  }

  return (
    <div className={styles.userListWrapper}>
      <table className={styles.userList}>
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
    </div>
  );
};

export default UserList;
