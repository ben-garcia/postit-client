import { FC } from 'react';

import { CommunityPage } from '../../components/pages';

interface CommunityPageProps {}

const Community: FC<CommunityPageProps> = () => (
  <CommunityPage community={{} as any} />
);

export default Community;
