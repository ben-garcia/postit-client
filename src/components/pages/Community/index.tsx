import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import {
  Accordion,
  AccordionHeaderButton,
  AccordionItem,
  AccordionPanel,
  AddIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CloseIcon,
  EnvelopIcon,
  Heading,
  Paragraph,
  Text,
  useBreakpoint,
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
  SwitchButton,
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
// import './styles.scss';

interface CommunityPageProps {
  community: Community;
}

const CommunityPage: FC<CommunityPageProps> = props => {
  const { community } = props;
  const {
    state: { user },
  } = useUser();
  const breakpoint = useBreakpoint();
  const router = useRouter();
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

            {(breakpoint === 'xs' ||
              breakpoint === 'sm' ||
              breakpoint === 'md') && (
              <Paragraph fontSize="0.8rem" margin="0.3rem 0 0 0">
                <Text fontWeight="xxl" margin="0 0.25rem">
                  1
                </Text>
                <Text>member</Text>
                <Text fontWeight="xxl" margin="0 0.25rem">
                  0
                </Text>
                <Text>online</Text>
              </Paragraph>
            )}
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
              <Text color="var(--color-brand-blue200)">{joinButtonText}</Text>
            </Button>
          ) : (
            <Button
              className="community-page__join-button"
              onClick={() => {
                if (
                  breakpoint === 'xs' ||
                  breakpoint === 'sm' ||
                  breakpoint === 'md'
                ) {
                  router.push('/register');
                } else {
                  setLoginModalIsOpen(true);
                }
              }}
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
                className="community-page__button flex-grow-2"
                hoverColor="var(--color-brand-grey100)"
                secondary
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
            <div className="flex">
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

          {/* TODO move to its own component */}
          {user.isLoggedIn && (
            <Accordion
              allowToggle
              className="community-accordion"
              defaultIndices={[0]}
            >
              <AccordionItem>
                <AccordionHeaderButton className="community-accordion__header">
                  Grow your community
                </AccordionHeaderButton>
                <AccordionPanel>
                  <div className="community-accordion__panel">
                    <div className="community-accordion__inner">
                      <div className="community-accordion__circle">
                        <AddIcon
                          fill="var(--color-brand-white)"
                          size="1.5rem"
                        />
                      </div>

                      <svg
                        viewBox="0 0 1 1"
                        preserveAspectRatio="none"
                        style={{ width: '67px' }}
                      >
                        <path
                          style={{ fill: 'rgba(113,147,255,0.2)' }}
                          d="M 0 1 V 0 H 1 Z"
                        />
                      </svg>

                      <svg
                        viewBox="0 0 1 1"
                        preserveAspectRatio="none"
                        style={{ width: '46px' }}
                      >
                        <path
                          style={{ fill: 'rgba(113,147,255,0.2)' }}
                          d="M 0 0 V 1 H 1 Z"
                        />
                      </svg>
                    </div>

                    <div>
                      <Heading level={3} fontSize="md">
                        Time to make your first post!
                      </Heading>

                      <Paragraph
                        color="var(--color-brand-grey200)"
                        fontSize="0.8rem"
                      >
                        Now that you’ve created your community, start things off
                        right by making your first post
                      </Paragraph>

                      <Button
                        color="var(--color-brand-blue400)"
                        hoverColor="var(--color-brand-blue200)"
                        margin="sm 0 0 0"
                      >
                        Make your first post
                      </Button>
                    </div>

                    <Button
                      className="community-accordion__close-button"
                      secondary
                    >
                      <CloseIcon
                        fill="var(--color-brand-grey200)"
                        size="0.8rem"
                      />
                    </Button>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
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

                  {breakpoint !== 'xs' &&
                    breakpoint !== 'sm' &&
                    breakpoint !== 'md' && (
                      <>
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
                          <Text color="var(--color-brand-grey200)">
                            Approve
                          </Text>
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
                      </>
                    )}

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

        {breakpoint !== 'xs' && breakpoint !== 'sm' && breakpoint !== 'md' && (
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

                    <Accordion
                      allowToggle
                      className="community-options-accordion"
                    >
                      <AccordionItem>
                        <AccordionHeaderButton>
                          <Text className="color-blue100">
                            Community Options
                          </Text>
                        </AccordionHeaderButton>
                        <AccordionPanel className="community-options-accordion__panel">
                          <div className="flex flex-justify-between">
                            <div className="flex flex-center">
                              <ModShieldIcon
                                fill="var(--color-brand-grey200)"
                                margin="0 0.2rem 0 0"
                                size="1.2rem"
                              />
                              <Text fontSize="0.9rem">Community theme</Text>
                            </div>
                            {/* TODO define state */}
                            <SwitchButton isActive onChange={() => {}} />
                          </div>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
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
                    Styling your community helps attract members. For
                    assistance, take a look at the Customize Appearance Overview
                    . Here are some great ways to get started.
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
        )}
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
