import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

interface User {
  id: number;
  name: string;
}

const UserDetails: React.FC = () => {
  const { id } = useParams();
  const { data: user } = useFetch<User>(`users/${id}`);

  if (!user) {
    return <p>Carregando ...</p>
  }

  return (
    <ul>
      <li>{user?.id}</li>
      <li>{user?.name}</li>
    </ul>
  );
}

export default UserDetails;