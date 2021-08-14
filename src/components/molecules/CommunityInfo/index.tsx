import React from 'react';
import {
  Accordion,
  AccordionHeaderButton,
  AccordionItem,
  AccordionPanel,
  ChevronDownIcon,
  Text,
} from 'supernova-ui';

import {
  Button,
  CakeIcon,
  CoinIcon,
  ModShieldIcon,
  NewCommunityIcon,
  SwitchButton,
} from '../../atoms';
import { useUser } from '../../../hooks';
import { Community } from '../../../types';

/** comment out for Next
 *
 * otherwise import when using Storybook
 */
import './styles.scss';

interface CommunityInfoProps {
  community: Community;
  isCreatePost?: boolean;
}

const CommunityInfo: React.FC<CommunityInfoProps> = props => {
  const { community, isCreatePost = true } = props;
  const {
    state: { user },
  } = useUser();

  return (
    <section className="community-info">
      <div className="community-info__container-wrapper">
        <div
          style={{
            backgroundColor: community.themeColor,
            height: isCreatePost ? '46px' : undefined,
          }}
        >
          <div className="community-info__about-header">
            {!isCreatePost && user.isLoggedIn && (
              <>
                <Text color="var(--color-brand-white)" fontWeight="xxl">
                  About community
                </Text>

                <div className="flex">
                  <Button
                    color="transparent"
                    className="community-info__button"
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
                    className="community-info__button"
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
              </>
            )}
          </div>
        </div>
      </div>

      <div className="community-info__wrapper-container">
        {user.isLoggedIn && !isCreatePost ? (
          <Button
            className="community-info__description community-info__button"
            secondary
          >
            Add description
          </Button>
        ) : (
          <>
            <div className="flex flex-items-start">
              <NewCommunityIcon fill={community.themeColor} size="4rem" />

              <Text
                className="align-self-center"
                fontWeight="xxl"
                margin="0 0 0 xs"
              >
                {community.name}
              </Text>
            </div>

            <Text fontSize="0.9rem" margin="xs 0">
              {`Welcome to ${community.name}`}
            </Text>
          </>
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

          <Text className="align-self-end" fontSize="0.9rem" margin="0 0 0 sm">
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

            {!isCreatePost && (
              <>
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
                  className="community-info__button border-none"
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
              </>
            )}

            <hr className="divider" />

            <Accordion allowToggle className="community-options-accordion">
              <AccordionItem>
                <AccordionHeaderButton>
                  <Text className="color-blue100">Community Options</Text>
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
    </section>
  );
};

export default CommunityInfo;
