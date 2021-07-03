import { useEffect } from 'react';

import { NavBar } from '../components/organisms';
import { useUser } from '../hooks';

export default function Home() {
  const { dispatch } = useUser();

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user) {
      const parsedUser = JSON.parse(user);

      dispatch({
        type: 'USER_LOGGED_IN',
        payload: parsedUser.username,
      });
    }
  }, []);
  return (
    <div className="home-page">
      <NavBar />
    </div>
  );
}
