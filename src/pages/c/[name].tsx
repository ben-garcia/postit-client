import { gql } from '@apollo/client';
import { GetServerSideProps } from 'next';
import { FC } from 'react';

import { CommunityPage, CommunityNotFoundPage } from '../../components/pages';
import { Community as CommunityType } from '../../types';
import { apolloClient } from '../../utils';

interface CommunityPageProps {
  /**
   * The returned community found in the db.
   */
  community?: CommunityType;
  /**
   * Message that is present when there is no community
   * in the db with a given name.
   */
  error?: string;
}

const Community: FC<CommunityPageProps> = ({ community, error }) => {
  return error ? (
    <CommunityNotFoundPage />
  ) : (
    <CommunityPage community={community!} />
  );
};

export default Community;

export const getServerSideProps: GetServerSideProps = async ({
  query: { name },
}) => {
  const {
    data: {
      getCommunity: { community, error },
    },
  } = await apolloClient.query({
    query: gql`
      query {
        getCommunity(name: "${name}") {
          community {
            id
            bannerUrl
            bannerHeight
            coinCount
            createdAt
            creator {
              username
            }
            description
            iconUrl
            isNsfw
            location
            name
            themeColor
            topics
            type
            updatedAt
          }
					error
        }
      }
    `,
  });

  // pass the error message to indicate there is no community
  // with query passd
  if (error) {
    return { props: { error } };
  }

  // pass the community
  return { props: { community } };
};
