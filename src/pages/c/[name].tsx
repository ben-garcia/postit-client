import { useRouter } from 'next/router';
import { useEffect, FC } from 'react';

import { NavBar } from '../../components/organisms';
import { useUser } from '../../hooks';

interface CommunityPageProps {}

const Community: FC<CommunityPageProps> = () => {
  const router = useRouter();
  const { name } = router.query;
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
    <div className="community-page">
      <NavBar />
      <main className="community-page__main-content">{name}</main>
    </div>
  );
};

export default Community;
