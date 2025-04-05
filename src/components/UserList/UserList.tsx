'use client';

import { useEffect, useState } from 'react';

import { UserService } from '@/services/UserService';
import { User } from '@/shared/types/user';

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    UserService.fetchUsers().then(setUsers);
  }, []);

  return (
    <table className="user-list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
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
