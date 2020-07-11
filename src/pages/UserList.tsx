import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { mutate as mutateGlobal } from 'swr';

import useFetch from '../hooks/useFetch';
import api from '../services/api';

interface User {
  id: number;
  name: string;
}

const UserList: React.FC = () => {
  const { data: users, mutate } = useFetch<User[]>('users');

  const handleChangeName = useCallback((id: number) => {
    api.put(`users/${id}`, { name: 'Bartolomeu' });

    const updatedUsers = users?.map(user => {
      if (user.id === id) {
        return { ...user, name: 'Bartolomeu' }
      }

      return user;
    });

    mutate(updatedUsers, false);
    mutateGlobal(`users/${id}`, { id, name: 'Bartolomeu' });
  }, [users, mutate]);

  if (!users) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`users/${user.id}`}>{user.name}</Link>
            <button type="button" onClick={() => handleChangeName(user.id)}>Change name</button>
          </li>
        )) }
      </ul>
    </div>
  )
}

export default UserList;