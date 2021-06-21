import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum ChatRequestsFrom {
  Everyone = 'EVERYONE',
  Days = 'DAYS',
  Nobody = 'NOBODY',
}

export enum CommunityContentSort {
  Hot = 'HOT',
  Rising = 'RISING',
  New = 'NEW',
  Top = 'TOP',
}

export type EmailNotificationPreferences = {
  __typename?: 'EmailNotificationPreferences';
  id: Scalars['ID'];
  inboxMessages: Scalars['Boolean'];
  chatRequests: Scalars['Boolean'];
  commentReplies: Scalars['Boolean'];
  commentUpvotes: Scalars['Boolean'];
  newFollowers: Scalars['Boolean'];
  postComments: Scalars['Boolean'];
  postUpvotes: Scalars['Boolean'];
  usernameMentions: Scalars['Boolean'];
};

export type GeneralPreferences = {
  __typename?: 'GeneralPreferences';
  id: Scalars['ID'];
  autoplayMedia: Scalars['Boolean'];
  blurNsfw: Scalars['Boolean'];
  chatRequestsFrom: ChatRequestsFrom;
  communityContentSort: CommunityContentSort;
  markdownIsDefault: Scalars['Boolean'];
  privateMessageFrom: PrivateMessageFrom;
  openPostInNewTab: Scalars['Boolean'];
  reduceAnimations: Scalars['Boolean'];
  rememberPerCommunity: Scalars['Boolean'];
  useCommunityThemes: Scalars['Boolean'];
  viewNsfw: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  signUp: SignUpResponse;
};

export type MutationSignUpArgs = {
  createUserData: SignUpInput;
};

export type NotificationPreferences = {
  __typename?: 'NotificationPreferences';
  id: Scalars['ID'];
  announcements: Scalars['Boolean'];
  awardsReceived: Scalars['Boolean'];
  cakeDay: Scalars['Boolean'];
  chatMessages: Scalars['Boolean'];
  chatsPostsActivity: Scalars['Boolean'];
  chatRequests: Scalars['Boolean'];
  commentReplies: Scalars['Boolean'];
  commentsActivity: Scalars['Boolean'];
  commentsOnPosts: Scalars['Boolean'];
  inboxMessages: Scalars['Boolean'];
  modNotifications: Scalars['Boolean'];
  newFollowers: Scalars['Boolean'];
  newPostFlair: Scalars['Boolean'];
  newUserFlair: Scalars['Boolean'];
  pinnedPosts: Scalars['Boolean'];
  threadsActivity: Scalars['Boolean'];
  upvotesOnComments: Scalars['Boolean'];
  upvotesOnPosts: Scalars['Boolean'];
  usernameMentions: Scalars['Boolean'];
};

export enum PrivateMessageFrom {
  Everyone = 'EVERYONE',
  Nobody = 'NOBODY',
}

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['ID'];
  about?: Maybe<Scalars['String']>;
  activityVisibility: Scalars['Boolean'];
  avatarUrl?: Maybe<Scalars['String']>;
  awardeeKarma: Scalars['Int'];
  awarderKarma: Scalars['Int'];
  bannerUrl?: Maybe<Scalars['String']>;
  canCreateCommunitites: Scalars['Boolean'];
  coinCount: Scalars['Int'];
  contentVisibility: Scalars['Boolean'];
  commentKarma: Scalars['Int'];
  displayName?: Maybe<Scalars['String']>;
  hasNightmode: Scalars['Boolean'];
  hasPaypalSubscription: Scalars['Boolean'];
  hasPremium: Scalars['Boolean'];
  hasStripeSubscription: Scalars['Boolean'];
  hasUnreadMail: Scalars['Boolean'];
  hasUnreadModmail: Scalars['Boolean'];
  hasVerifiedEmail: Scalars['Boolean'];
  isModerator: Scalars['Boolean'];
  isSuspended: Scalars['Boolean'];
  postKarma: Scalars['Int'];
  showNsfw: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  getAllUsers: Array<User>;
  isUsernameUnique: Scalars['Boolean'];
};

export type QueryIsUsernameUniqueArgs = {
  username: Scalars['String'];
};

export type SignUpError = {
  __typename?: 'SignUpError';
  constraints: SignUpErrorConstraints;
  field: Scalars['String'];
};

export type SignUpErrorConstraints = {
  __typename?: 'SignUpErrorConstraints';
  isEmail?: Maybe<Scalars['String']>;
  maxLength?: Maybe<Scalars['String']>;
  minLength?: Maybe<Scalars['String']>;
};

export type SignUpInput = {
  email?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpResponse = {
  __typename?: 'SignUpResponse';
  errors?: Maybe<Array<SignUpError>>;
  created?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  emailNotificationPreferences?: Maybe<EmailNotificationPreferences>;
  generalPreferences?: Maybe<GeneralPreferences>;
  notificationPreferences?: Maybe<NotificationPreferences>;
  username: Scalars['String'];
  profile?: Maybe<Profile>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type SignUpMutationVariables = Exact<{
  email?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type SignUpMutation = { __typename?: 'Mutation' } & {
  signUp: { __typename?: 'SignUpResponse' } & Pick<
    SignUpResponse,
    'created'
  > & {
      errors?: Maybe<
        Array<
          { __typename?: 'SignUpError' } & Pick<SignUpError, 'field'> & {
              constraints: { __typename?: 'SignUpErrorConstraints' } & Pick<
                SignUpErrorConstraints,
                'isEmail' | 'maxLength' | 'minLength'
              >;
            }
        >
      >;
    };
};

export type IsUsernameUniqueQueryVariables = Exact<{
  username: Scalars['String'];
}>;

export type IsUsernameUniqueQuery = { __typename?: 'Query' } & Pick<
  Query,
  'isUsernameUnique'
>;

export const SignUpDocument = gql`
  mutation SignUp($email: String, $username: String!, $password: String!) {
    signUp(
      createUserData: {
        email: $email
        username: $username
        password: $password
      }
    ) {
      errors {
        field
        constraints {
          isEmail
          maxLength
          minLength
        }
      }
      created
    }
  }
`;
export type SignUpMutationFn = Apollo.MutationFunction<
  SignUpMutation,
  SignUpMutationVariables
>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpMutation,
    SignUpMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument,
    options
  );
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
export const IsUsernameUniqueDocument = gql`
  query IsUsernameUnique($username: String!) {
    isUsernameUnique(username: $username)
  }
`;

/**
 * __useIsUsernameUniqueQuery__
 *
 * To run a query within a React component, call `useIsUsernameUniqueQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsUsernameUniqueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsUsernameUniqueQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useIsUsernameUniqueQuery(
  baseOptions: Apollo.QueryHookOptions<
    IsUsernameUniqueQuery,
    IsUsernameUniqueQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<IsUsernameUniqueQuery, IsUsernameUniqueQueryVariables>(
    IsUsernameUniqueDocument,
    options
  );
}
export function useIsUsernameUniqueLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    IsUsernameUniqueQuery,
    IsUsernameUniqueQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    IsUsernameUniqueQuery,
    IsUsernameUniqueQueryVariables
  >(IsUsernameUniqueDocument, options);
}
export type IsUsernameUniqueQueryHookResult = ReturnType<
  typeof useIsUsernameUniqueQuery
>;
export type IsUsernameUniqueLazyQueryHookResult = ReturnType<
  typeof useIsUsernameUniqueLazyQuery
>;
export type IsUsernameUniqueQueryResult = Apollo.QueryResult<
  IsUsernameUniqueQuery,
  IsUsernameUniqueQueryVariables
>;
