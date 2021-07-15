import { useRouter } from 'next/router';
import { FC } from 'react';

import { NavBar } from '../../components/organisms';

interface CommunityPageProps {}

const Community: FC<CommunityPageProps> = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div className="community-page">
      <NavBar />
      <main className="community-page__main-content">{name}</main>
    </div>
  );
};

export default Community;
