import { FC, useState } from 'react';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CloseIcon,
  EnvelopIcon,
  Paragraph,
  Text,
  UserIcon,
} from 'supernova-ui';

import {
  AddVideoIcon,
  Button,
  CakeIcon,
  CircleCheckmark,
  CoinIcon,
  HotIcon,
  LinkIcon,
  NewCommunityIcon,
  NewIcon,
  ModShieldIcon,
  PencilIcon,
  TopIcon,
} from '../../atoms';
import NavBar from '../../organisms/NavBar';
import { LoginModal } from '../../organisms';
import { useUser } from '../../../hooks';
import { Community } from '../../../types';

/** comment out for Next
 *
 * otherwise import when using Storybook
 */
import './styles.scss';

interface CommunityPageProps {
  community: Community;
}

const CommunityPage: FC<CommunityPageProps> = props => {
  const { community } = props;
  const {
    state: { user },
  } = useUser();
  const [joinButtonText, setJoinButtonText] = useState('Joined');
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

  return (
    <div className="community-page">
      <NavBar />

      <section className="community-page__header">
        <div
          className="community-page__banner"
          style={{
            backgroundColor: community.bannerUrl,
            height: community.bannerHeight === 'small' ? '64px' : undefined,
          }}
        />

        <div className="community-page__inner">
          <NewCommunityIcon
            className="community-page__icon"
            fill={community.themeColor}
            size="4.7rem"
          />

          <div className="community-page__wrapper">
            <Text fontSize="lg" fontWeight="xxl">
              {community.name}
            </Text>

            <Text
              className="community-page__sub-name"
              fontSize="0.8rem"
              fontWeight="xxl"
            >
              {`c/${community.name}`}
            </Text>
          </div>

          {user.isLoggedIn ? (
            <Button
              className="community-page__join-button"
              hoverColor="transparent"
              onMouseEnter={() => setJoinButtonText('Leave')}
              onMouseLeave={() => setJoinButtonText('Joined')}
              secondary
              width="96px"
            >
              {joinButtonText}
            </Button>
          ) : (
            <Button
              className="community-page__join-button"
              onClick={() => setLoginModalIsOpen(true)}
              primary
            >
              Join
            </Button>
          )}
        </div>
      </section>

      <div className="community-page__container">
        <main className="community-page__main-content">
          {user.isLoggedIn && (
            <div className="community-page__create-post">
              <Button
                className="community-page__user-button"
                color="transparent"
                hoverColor="var(--color-brand-grey100)"
              >
                <UserIcon
                  fill="var(--color-brand-grey200)"
                  margin="0 0.2rem"
                  size="1.9rem"
                />
              </Button>

              <Button
                className="community-page__button"
                hoverColor="var(--color-brand-grey100)"
                secondary
                width="29.5rem"
              >
                Create Post
              </Button>

              <Button
                className="community-page__button"
                color="transparent"
                hoverColor="var(--color-brand-grey100)"
              >
                <AddVideoIcon
                  fill="var(--color-brand-grey200)"
                  margin="0 0.5rem"
                  size="1.5rem"
                />
              </Button>

              <Button
                className="community-page__button"
                color="transparent"
                hoverColor="var(--color-brand-grey100)"
              >
                <LinkIcon
                  fill="var(--color-brand-grey200)"
                  margin="0 0.5rem"
                  size="1.5rem"
                />
              </Button>
            </div>
          )}

          <div className="community-page__post-filter-by">
            <div>
              <Button
                className="community-page__button"
                color="transparent"
                hoverColor="var(--color-brand-grey100)"
              >
                <HotIcon
                  fill="var(--color-brand-grey200)"
                  margin="0 0.5rem"
                  size="1.5rem"
                />
                <Text color="var(--color-brand-grey200)">Hot</Text>
              </Button>

              <Button
                className="community-page__button"
                color="transparent"
                hoverColor="var(--color-brand-grey100)"
              >
                <NewIcon
                  fill="var(--color-brand-grey200)"
                  margin="0 0.2rem"
                  size="1.5rem"
                />
                <Text color="var(--color-brand-grey200)">New</Text>
              </Button>

              <Button
                className="community-page__button"
                color="transparent"
                hoverColor="var(--color-brand-grey100)"
              >
                <TopIcon
                  fill="var(--color-brand-grey200)"
                  margin="0 0.5rem"
                  size="1.5rem"
                />
                <Text color="var(--color-brand-grey200)">Top</Text>
              </Button>

              <Button
                color="transparent"
                className="community-page__button"
                hoverColor="var(--color-brand-grey100)"
              >
                <Text
                  className="align-self-center"
                  color="var(--color-brand-grey200)"
                  fontSize="1.4rem"
                >
                  ...
                </Text>
              </Button>
            </div>
          </div>

          {user.isLoggedIn && (
            <div className="community-page__grow-community">
              <Button
                className="community-page__button border-none flex-justify-between"
                color="transparent"
                hoverColor="transparent"
                padding="0 sm"
                margin="1rem 0.5rem"
                secondary
                width="100%"
              >
                <Text color="var(--color-brand-black100)" fontSize="1.3rem">
                  Grow your community
                </Text>

                <ChevronDownIcon size="0.6rem" />
              </Button>
            </div>
          )}

          {/* TODO move to its own component */}
          <article className="post-card flex">
            <div className="post-card__inner flex align-self-start">
              <div className="flex flex-column">
                <ChevronUpIcon
                  fill="var(--color-brand-orange100)"
                  size="1rem"
                />

                <Text
                  className="text-align-center"
                  color="var(--color-brand-orange100)"
                  fontSize="xs"
                  fontWeight="xxl"
                  margin="0.2rem 0"
                >
                  1
                </Text>

                <ChevronDownIcon size="1rem" />
              </div>
            </div>

            <div className="flex flex-column flex-grow-2">
              <div className="flex align-items-center">
                <PencilIcon fill="var(--color-brand-green100)" size="1.5rem" />
                <Text
                  margin="0 0 0 sm"
                  fontSize="0.7rem"
                  fontWeight="xxl"
                  textTransform="uppercase"
                >
                  Pinned by Moderators
                </Text>
              </div>

              <Paragraph
                color="var(--color-brand-grey200)"
                fontSize="0.8rem"
                margin="0.8rem 0 0.5rem 0"
              >
                {`Posted by u/${community.creator.username} 5 days ago`}
              </Paragraph>

              <Text fontWeight="xxl">{`c/${community.name} Lounge`}</Text>

              <div className="flex flex-justify-between">
                <div>
                  <Button
                    className="community-page__button"
                    color="transparent"
                    hoverColor="var(--color-brand-grey100)"
                  >
                    <AddVideoIcon
                      fill="var(--color-brand-grey200)"
                      margin="0 0.2rem"
                      size="1.5rem"
                    />
                    <Text color="var(--color-brand-grey200)">0</Text>
                  </Button>

                  <Button
                    className="community-page__button"
                    color="transparent"
                    hoverColor="var(--color-brand-grey100)"
                  >
                    <AddVideoIcon
                      fill="var(--color-brand-grey200)"
                      margin="0 0.2rem"
                      size="1.5rem"
                    />
                    <Text color="var(--color-brand-grey200)">Share</Text>
                  </Button>

                  <Button
                    className="community-page__button"
                    color="transparent"
                    hoverColor="var(--color-brand-grey100)"
                  >
                    <AddVideoIcon
                      fill="var(--color-brand-grey200)"
                      margin="0 0.2rem"
                      size="1.5rem"
                    />
                    <Text color="var(--color-brand-grey200)">Approve</Text>
                  </Button>

                  <Button
                    className="community-page__button"
                    color="transparent"
                    hoverColor="var(--color-brand-grey100)"
                  >
                    <AddVideoIcon
                      fill="var(--color-brand-grey200)"
                      margin="0 0.2rem"
                      size="1.5rem"
                    />
                    <Text color="var(--color-brand-grey200)">Remove</Text>
                  </Button>

                  <Button
                    className="community-page__button"
                    color="transparent"
                    hoverColor="var(--color-brand-grey100)"
                  >
                    <AddVideoIcon
                      fill="var(--color-brand-grey200)"
                      margin="0 0.2rem"
                      size="1.5rem"
                    />
                    <Text color="var(--color-brand-grey200)">Spam</Text>
                  </Button>

                  <Button
                    className="community-page__button"
                    color="transparent"
                    hoverColor="var(--color-brand-grey100)"
                  >
                    <ModShieldIcon
                      fill="var(--color-brand-grey200)"
                      margin="0 0.2rem"
                      size="1.5rem"
                    />
                  </Button>

                  <Button
                    color="transparent"
                    className="community-page__button"
                    hoverColor="var(--color-brand-grey100)"
                  >
                    <Text
                      className="align-self-center"
                      color="var(--color-brand-grey200)"
                      fontSize="1.4rem"
                    >
                      ...
                    </Text>
                  </Button>
                </div>

                <Text
                  className="align-self-center"
                  color="var(--color-brand-red200)"
                  margin="0 sm 0 0"
                >
                  Live
                </Text>
              </div>
            </div>
          </article>
        </main>

        <aside className="community-page__aside">
          <div className="community-page__container-wrapper">
            <div style={{ backgroundColor: community.themeColor }}>
              <div className="community-page__about-header">
                <Text color="var(--color-brand-white)" fontWeight="xxl">
                  About community
                </Text>
                {user.isLoggedIn && (
                  <div className="flex">
                    <Button
                      color="transparent"
                      className="community-page__button"
                    >
                      <ModShieldIcon
                        fill="var(--color-brand-white)"
                        margin="0 0.5rem"
                        size="1.2rem"
                      />
                      Mod Tools
                    </Button>
                    <Button
                      color="transparent"
                      className="community-page__button"
                    >
                      <Text
                        className="align-self-center"
                        color="var(--color-brand-white)"
                        fontSize="1.4rem"
                      >
                        ...
                      </Text>
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="community-page__wrapper-container">
              {user.isLoggedIn ? (
                <Button
                  className="community-page__description community-page__button"
                  secondary
                >
                  Add description
                </Button>
              ) : (
                <Text fontSize="0.9rem">{`Welcome to ${community.name}`}</Text>
              )}

              <div className="flex margin-bottom-1">
                <div className="flex flex-column">
                  <Text fontWeight="xxl">1</Text>

                  <Text fontSize="0.75rem" fontWeight="xxl">
                    Members
                  </Text>
                </div>

                <div className="flex flex-column margin-left-5">
                  <Text fontWeight="xxl">1</Text>

                  <Text fontSize="0.75rem" fontWeight="xxl">
                    Online
                  </Text>
                </div>
              </div>

              <hr className="divider" />

              <div className="flex">
                <CakeIcon size="1.5rem" />
                <Text
                  className="align-self-end"
                  fontSize="0.9rem"
                  margin="0 0 0 sm"
                >
                  {`Created ${
                    new Date(Number(community.createdAt))
                      .toLocaleString()
                      .split(',')[0]
                  }`}
                </Text>
              </div>

              {user.isLoggedIn && (
                <>
                  <hr className="divider" />

                  <div className="flex">
                    <CoinIcon size="1.2rem" />

                    <Text
                      className="align-self-end"
                      fontSize="0.9rem"
                      margin="0 0 0 sm"
                    >
                      {`${community.coinCount} Coins`}
                    </Text>
                  </div>

                  <hr className="divider" />

                  <div className="flex">
                    <Text color="var(--color-brand-red100)" fontSize="0.8rem">
                      New
                    </Text>

                    <Text fontSize="0.9rem" margin="0 0 0 0.2rem">
                      Community topics
                    </Text>
                  </div>

                  <Button
                    className="community-page__button border-none"
                    color="transparent"
                    hoverColor="transparent"
                    secondary
                  >
                    Add a Primary Topic
                    <ChevronDownIcon margin="0 0 0 xs" size="0.5rem" />
                  </Button>

                  <Button margin="0.7rem 0" primary width="100%">
                    Create Post
                  </Button>

                  <hr className="divider" />

                  <Button
                    className="community-page__button border-none flex-justify-between"
                    color="transparent"
                    hoverColor="var(--color-brand-grey100)"
                    padding="0 sm"
                    secondary
                    width="100%"
                  >
                    Community Options
                    <ChevronDownIcon margin="0 0 0 xs" size="0.5rem" />
                  </Button>
                </>
              )}
            </div>
          </div>

          {user.isLoggedIn && (
            <div className="community-page__container-wrapper">
              <div className="position-relative">
                <div className="community-page__image" />

                <Button
                  className="community-page__button position-absolute position-top-right"
                  color="transparent"
                  hoverColor="transparent"
                >
                  <CloseIcon fill="var(--color-brand-black100)" size="1rem" />
                </Button>
              </div>

              <div className="community-page__wrapper-container flex flex-column">
                <Text className="align-self-center" fontWeight="xxl">
                  Add community style
                </Text>

                <Paragraph fontSize="0.8rem" lineHeight="21px">
                  Styling your community helps attract members. For assistance,
                  take a look at the Customize Appearance Overview . Here are
                  some great ways to get started.
                </Paragraph>

                <div className="flex flex-column align-items-start margin-y-05">
                  <Button
                    className="community-page__button border-none"
                    color="transparent"
                    hoverColor="transparent"
                    secondary
                  >
                    <CircleCheckmark
                      fill={
                        community.themeColor === '#0079d3'
                          ? 'var(--color-brand-grey100)'
                          : 'var(--color-brand-blue100)'
                      }
                      margin="0 0.3rem 0 0"
                      size="1rem"
                    />
                    Add community icon
                  </Button>

                  <Button
                    className="community-page__button border-none"
                    color="transparent"
                    hoverColor="transparent"
                    secondary
                  >
                    <CircleCheckmark
                      fill={
                        community.themeColor === '#0079d3'
                          ? 'var(--color-brand-grey100)'
                          : 'var(--color-brand-blue100)'
                      }
                      margin="0 0.3rem 0 0"
                      size="1rem"
                    />
                    Customize banner
                  </Button>

                  <Button
                    className="community-page__button border-none"
                    color="transparent"
                    hoverColor="transparent"
                    secondary
                  >
                    <CircleCheckmark
                      fill={
                        community.themeColor === '#0079d3'
                          ? 'var(--color-brand-grey100)'
                          : 'var(--color-brand-blue100)'
                      }
                      margin="0 0.3rem 0 0"
                      size="1rem"
                    />
                    Customize colors
                  </Button>
                </div>

                <Button margin="0.7rem 0" secondary width="100%">
                  Customize Appearance
                </Button>

                <Paragraph
                  className="align-self-center"
                  color="var(--color-brand-grey200)"
                  fontSize="0.7rem"
                >
                  Only moderators can see this widget
                </Paragraph>
              </div>
            </div>
          )}

          <div className="community-page__container-wrapper">
            <div style={{ backgroundColor: community.themeColor }}>
              <div className="community-page__about-header">
                <Text color="var(--color-brand-white)" fontWeight="xxl">
                  Moderators
                </Text>
              </div>
            </div>

            <div className="community-page__wrapper-container flex flex-column">
              {user.isLoggedIn ? (
                <>
                  <Button margin="0.7rem 0" secondary width="100%">
                    <EnvelopIcon
                      fill="var(--color-brand-blue100)"
                      margin="0 xs 0 0"
                      size="1rem"
                    />
                    Message the mods
                  </Button>

                  <div className="community-page__moderators">
                    <Button
                      className="community-page__button border-none"
                      color="transparent"
                      hoverColor="transparent"
                      secondary
                    >
                      {`u/${community.creator.username}`}
                    </Button>
                  </div>

                  <Button
                    className="community-page__button border-none align-self-end"
                    color="transparent"
                    hoverColor="transparent"
                    secondary
                  >
                    View all moderators
                  </Button>
                </>
              ) : (
                <Text fontSize="0.8rem">Moderator list hidden.</Text>
              )}
            </div>
          </div>
        </aside>
      </div>

      {loginModalIsOpen && (
        <LoginModal
          isOpen={loginModalIsOpen}
          onClose={() => setLoginModalIsOpen(false)}
        />
      )}
    </div>
  );
};

export default CommunityPage;