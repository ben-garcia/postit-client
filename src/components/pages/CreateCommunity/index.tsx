import { useRouter } from 'next/router';
import React, { FC, useEffect, useRef, useState } from 'react';
import {
  Checkbox,
  CheckmarkIcon,
  Flex,
  FlexItem,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Heading,
  RadioGroup,
  Radio,
  Paragraph,
  Text,
  TextInput,
  UserIcon,
  useBreakpoint,
} from 'supernova-ui';

import { Button, EyeIcon, LockIcon } from '../../atoms';
import NavBar from '../../organisms/NavBar';
import { useDebounce, useForm } from '../../../hooks';
import { createCommunitySchema } from '../../../utils';
import {
  useIsCommunityNameUniqueLazyQuery,
  useCreateCommunityMutation,
} from '../../../generated/graphql';

/**
 * comment out for Next
 *
 * otherwise import when using Storybook
 */
// import './styles.scss';

interface Community {
  [k: string]: string | boolean;
  name: string;
  isNsfw: boolean;
  type: 'private' | 'public' | 'restricted';
}

interface CreateCommunityPageProps {}

const CreateCommunityPage: FC<CreateCommunityPageProps> = () => {
  const breakpoint = useBreakpoint();
  const nameInputRef = useRef<HTMLElement | null>(null);
  const {
    errors,
    handleBlur,
    handleChange,
    setError,
    values: community,
  } = useForm<Community>(
    {
      name: '',
      isNsfw: false,
      type: 'public',
    },
    createCommunitySchema
  );
  const [createCommunity] = useCreateCommunityMutation();
  const [isCommunityNameUnique, { data }] = useIsCommunityNameUniqueLazyQuery();
  const router = useRouter();
  const debounceValue = useDebounce<string>(community.name);
  const [isLoading, setIsLoading] = useState(false);
  const [communityType, setCommunityType] = useState<Community['type']>(
    'public'
  );
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!errors.name && !errors.isNsfw && !errors.type) {
      try {
        // trigger the loading icon
        setIsLoading(true);

        const res = await createCommunity({
          variables: community,
        });

        if (res.data?.createCommunity.created) {
          // go to the newly created community page
          router.replace(`/c/${community.name}`);
        } else if (res.data?.createCommunity.errors) {
          setIsLoading(false);
        }
      } catch (error) {
        // eslint-disable-next-line
        console.log('createCommunity error: ', error);
      }
    }
  };

  // send the request
  useEffect(() => {
    if (debounceValue.trim().length >= 3 && debounceValue.trim().length <= 21) {
      isCommunityNameUnique({
        variables: {
          name: debounceValue,
        },
      });
    }
    // if the community name is not unique
    // set the error message
    if (data?.isCommunityNameUnique === false) {
      setError('name', 'This community name is already taken.');
    } else {
      // otherwise reset the name erorr field
      setError('name', '');
    }
  }, [debounceValue, data]);

  return (
    <div className="create-community-page">
      <NavBar />
      <Flex wrap="nowrap">
        <FlexItem className="create-community-page__flex-item" xs={0}>
          <div className="create-community-page__image" />
        </FlexItem>
        <FlexItem>
          <form className="create-community-page__form" onSubmit={handleSubmit}>
            <Heading
              className={`create-community-page__header${
                breakpoint === 'xs' ||
                breakpoint === 'sm' ||
                breakpoint === 'md'
                  ? ''
                  : ' create-community-page__header--desktop'
              }`}
            >
              Create a community
            </Heading>
            <FormControl isInvalid={!!errors.name} tag="fieldset">
              <TextInput
                floatLabel
                label="Name"
                labelClassName="create-community-page__input"
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                ref={nameInputRef}
                rightIcon={
                  errors.name ? (
                    <div
                      className={`create-community-page__icon${
                        errors.name
                          ? ' create-community-page__icon--visible'
                          : ''
                      }`}
                    >
                      !
                    </div>
                  ) : (
                    <CheckmarkIcon
                      className={`create-community-page${
                        !errors.name ? ' create-community-page--visible' : ''
                      }`}
                      fill="green"
                      margin="0.6rem 0.3rem 0 0"
                      size="0.7rem"
                    />
                  )
                }
                size="sm"
                value={community.name}
              />
              <FormHelperText>
                Community names including capitalization cannot be changed.
              </FormHelperText>
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <Paragraph fontSize="0.9rem" fontWeight="700">
                Community type
              </Paragraph>
              <RadioGroup
                defaultValue={communityType}
                direction="column"
                name="type"
                onChange={setCommunityType as any}
              >
                <Radio
                  className="create-community-page__radio"
                  label={
                    <>
                      <UserIcon
                        fill="var(--color-brand-grey200)"
                        size="0.9rem"
                      />
                      <Paragraph
                        className="radio-paragraph"
                        color="var(--color-brand-grey200)"
                        fontSize="0.8rem"
                      >
                        <Text
                          color="var(--color-brand-grey300)"
                          fontSize="0.8rem"
                          fontWeight="xxl"
                          margin="0 0.5rem"
                        >
                          Public
                        </Text>
                        Anyone can view, post, and comment to this community
                      </Paragraph>
                    </>
                  }
                  margin="sm sm sm 0"
                  value="public"
                />
                <Radio
                  className="create-community-page__radio"
                  label={
                    <>
                      <EyeIcon fill="var(--color-brand-grey200)" size="1rem" />
                      <Paragraph
                        className="radio-paragraph"
                        color="var(--color-brand-grey200)"
                        fontSize="0.8rem"
                      >
                        <Text
                          color="var(--color-brand-grey300)"
                          fontSize="0.8rem"
                          fontWeight="xxl"
                          margin="0 0.5rem"
                        >
                          Restricted
                        </Text>
                        Anyone can view this community, but only approved users
                        can post
                      </Paragraph>
                    </>
                  }
                  margin="sm sm sm 0"
                  value="restricted"
                />
                <Radio
                  className="create-community-page__radio"
                  label={
                    <>
                      <LockIcon
                        fill="var(--color-brand-grey200)"
                        size="0.9rem"
                      />
                      <Paragraph
                        className="radio-paragraph"
                        color="var(--color-brand-grey200)"
                        fontSize="0.8rem"
                      >
                        <Text
                          color="var(--color-brand-grey300)"
                          fontSize="0.8rem"
                          fontWeight="xxl"
                          margin="0 0.5rem"
                        >
                          Private
                        </Text>
                        Only approved users can view and submit to this
                        community
                      </Paragraph>
                    </>
                  }
                  margin="sm sm sm 0"
                  value="private"
                />
              </RadioGroup>
            </FormControl>
            <FormControl className="extra-margin-top">
              <Paragraph fontSize="0.9rem" margin="0 0 0.2rem 0">
                Adult content
              </Paragraph>
              <Checkbox label="18+ year old community" />
            </FormControl>
            <Button asSubmit isLoading={isLoading} primary>
              Create community
            </Button>
          </form>
        </FlexItem>
      </Flex>
    </div>
  );
};

export default CreateCommunityPage;
