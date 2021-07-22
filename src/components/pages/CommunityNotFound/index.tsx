import { useRouter } from 'next/router';
import { useState } from 'react';
import { Paragraph, useBreakpoint } from 'supernova-ui';

import { Button } from '../../atoms';
import { NavBar, CreateCommunityModal } from '../../organisms';
/** comment out for Next
 *
 * otherwise import when using Storybook
 */
import './styles.scss';

function CommunityNotFoundPage() {
  const [createCommunityModalIsOpen, setCreateCommunityModalIsOpen] = useState(
    false
  );
  const router = useRouter();
  const breakpoint = useBreakpoint();

  return (
    <div className="community-not-found-page">
      <NavBar />

      <main className="community-not-found-page__main">
        <div className="community-not-found-page__circle" />
        <Paragraph margin="lg 0 md 0">
          Sorry, there aren’t any communities on Postit with that name.
        </Paragraph>

        <Paragraph fontSize="xs" margin="0 0 lg 0">
          This community may have been banned or the community name is
          incorrect.
        </Paragraph>

        <div>
          <Button
            onClick={() => {
              if (
                breakpoint === 'xs' ||
                breakpoint === 'sm' ||
                breakpoint === 'md'
              ) {
                router.push('/communities/create');
              } else {
                setCreateCommunityModalIsOpen(true);
              }
            }}
            secondary
          >
            Create Community
          </Button>

          <Button onClick={() => router.push('/')} primary margin="0 0 0 sm">
            Go Home
          </Button>
        </div>
      </main>

      {createCommunityModalIsOpen && (
        <CreateCommunityModal
          isOpen={createCommunityModalIsOpen}
          onClose={() => setCreateCommunityModalIsOpen(false)}
        />
      )}
    </div>
  );
}

export default CommunityNotFoundPage;
