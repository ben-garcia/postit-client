import { FC } from 'react';
import {
  ChevronDownIcon,
  Heading,
  Paragraph,
  Text,
  useBreakpoint,
} from 'supernova-ui';

import { Button, NewCommunityIcon } from '../../atoms';
import { CommunityInfo } from '../../molecules';
import NavBar from '../../organisms/NavBar';
import { useUser } from '../../../hooks';
import { Community } from '../../../types';

/** comment out for Next
 *
 * otherwise import when using Storybook
 */
import './styles.scss';

interface CreatePostPageProps {
  community: Community;
}

const CreatePostPage: FC<CreatePostPageProps> = props => {
  const { community } = props;
  const {
    state: { user },
  } = useUser();
  const breakpoint = useBreakpoint();

  return (
    <div className="create-post-page">
      <NavBar />

      <div className="create-post-page__container">
        <main className="create-post-page__main-content">
          <div className="flex flex-justify-between align-items-center border-bottom-white">
            <Heading
              className="flex-grow-1"
              fontSize="1.5rem"
              lineHeight="none"
            >
              Create a post
            </Heading>

            <div>
              <Button
                className="create-post-page__button border-none"
                margin="0 0 0 md"
                secondary
              >
                Collections
                <Text
                  backgroundColor="var(--color-brand-grey200)"
                  color="white"
                  fontSize="sm"
                  margin="0 0 0 xs"
                  padding="0.1rem 0.3rem"
                >
                  0
                </Text>
              </Button>
              <Button
                className="create-post-page__button border-none"
                margin="0 0 0 md"
                secondary
              >
                Drafts
                <Text
                  backgroundColor="var(--color-brand-grey200)"
                  color="white"
                  fontSize="sm"
                  margin="0 0 0 xs"
                  padding="0.1rem 0.3rem"
                >
                  0
                </Text>
              </Button>
            </div>
          </div>

          <div
            style={{
              alignItems: 'center',
              background: 'var(--color-brand-white)',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.5rem 0.8rem',
              margin: '1rem 0',
              width: '300px',
            }}
          >
            <div>
              <NewCommunityIcon
                fill="var(--color-brand-blue100)"
                size="1.2rem"
              />

              <Text margin="0 0 0 xs">{`c/${community.name}`}</Text>
            </div>

            <ChevronDownIcon fill="var(--color-brand-grey200)" size="0.9rem" />
          </div>

          {/* TODO: add custom draftjs editor here  */}
          <div
            style={{ background: 'white', minHeight: '560px', width: '100%' }}
          />
        </main>

        {breakpoint !== 'xs' && breakpoint !== 'sm' && breakpoint !== 'md' && (
          <aside className="create-post-page__aside">
            <CommunityInfo community={community} isCreatePost />

            {user.isLoggedIn && (
              <div className="create-post-page__container-wrapper">
                <div className="create-post-page__wrapper-container flex flex-column">
                  <Text fontSize="sm" fontWeight="xxl">
                    Posting to Postit
                  </Text>

                  {/* TODO: Create a List component  */}
                  <ol className="list">
                    <li className="list__item">
                      <Paragraph className="list__paragraph">
                        Remember the human
                      </Paragraph>
                    </li>

                    <li className="list__item">
                      <Paragraph className="list__paragraph">
                        Behave like you would in real life
                      </Paragraph>
                    </li>

                    <li className="list__item">
                      <Paragraph className="list__paragraph">
                        Look for the original source of content
                      </Paragraph>
                    </li>

                    <li className="list__item">
                      <Paragraph className="list__paragraph">
                        Search for duplicates before posting
                      </Paragraph>
                    </li>

                    <li className="list__item">
                      <Paragraph className="list__paragraph">
                        Read the community’s rules
                      </Paragraph>
                    </li>
                  </ol>
                </div>
              </div>
            )}
          </aside>
        )}
      </div>
    </div>
  );
};

export default CreatePostPage;
