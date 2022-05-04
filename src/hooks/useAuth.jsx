import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function useAuth() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) );
  const [isLogged, setIsLogged] = useState(!!user);
  const history = useHistory();

  const login = (email, password) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        localStorage.setItem('user', JSON.stringify({  email, password }));
        setUser({ email, password });
        setIsLogged(true);
        history.push('/');
        res({ email, password });
      }, 1000);
    });
  };
  const logout = () => {
    localStorage.removeItem('user');
    setIsLogged(false);
    history.push('/');
  };

  return { isLogged, login, logout, user };
}
