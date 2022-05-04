import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

export default function Account() {
  const { logout } = useAuth();
  const [user] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <div className='container'>
      <h1> User Email: {user.email}</h1>
      <button className='btn' onClick={() => logout()}>logout</button>
    </div>
  )
}
