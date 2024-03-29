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

export type AuthErrorConstraints = {
  __typename?: 'AuthErrorConstraints';
  isEmail?: Maybe<Scalars['String']>;
  maxLength?: Maybe<Scalars['String']>;
  minLength?: Maybe<Scalars['String']>;
};

export type AuthErrors = {
  __typename?: 'AuthErrors';
  constraints: AuthErrorConstraints;
  field: Scalars['String'];
};

export enum ChatRequestsFrom {
  Everyone = 'EVERYONE',
  Days = 'DAYS',
  Nobody = 'NOBODY',
}

export type Community = {
  __typename?: 'Community';
  id: Scalars['ID'];
  bannerUrl?: Maybe<Scalars['String']>;
  coinCount: Scalars['Int'];
  creator: User;
  description?: Maybe<Scalars['String']>;
  iconUrl?: Maybe<Scalars['String']>;
  isNsfw: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  themeColor?: Maybe<Scalars['String']>;
  topics?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export enum CommunityContentSort {
  Hot = 'HOT',
  Rising = 'RISING',
  New = 'NEW',
  Top = 'TOP',
}

export type CreateCommunityError = {
  __typename?: 'CreateCommunityError';
  constraints: CreateCommunityErrorConstraints;
  field: Scalars['String'];
};

export type CreateCommunityErrorConstraints = {
  __typename?: 'CreateCommunityErrorConstraints';
  matches?: Maybe<Scalars['String']>;
  maxLength?: Maybe<Scalars['String']>;
  minLength?: Maybe<Scalars['String']>;
};

export type CreateCommunityInput = {
  name: Scalars['String'];
  isNsfw: Scalars['Boolean'];
  type: Scalars['String'];
};

export type CreateCommunityResponse = {
  __typename?: 'CreateCommunityResponse';
  errors?: Maybe<Array<CreateCommunityError>>;
  created?: Maybe<Scalars['Boolean']>;
};

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

export type LogInInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type LogInResponse = {
  __typename?: 'LogInResponse';
  errors?: Maybe<Array<AuthErrors>>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  logIn: LogInResponse;
  signUp: SignUpResponse;
  createCommunity: CreateCommunityResponse;
};

export type MutationLogInArgs = {
  logInData: LogInInput;
};

export type MutationSignUpArgs = {
  createUserData: SignUpInput;
};

export type MutationCreateCommunityArgs = {
  createCommunityData: CreateCommunityInput;
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
  isCommunityNameUnique: Scalars['Boolean'];
  getAllUsers: Array<User>;
  isUsernameUnique: Scalars['Boolean'];
};

export type QueryIsCommunityNameUniqueArgs = {
  name: Scalars['String'];
};

export type QueryIsUsernameUniqueArgs = {
  username: Scalars['String'];
};

export type SignUpInput = {
  email?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpResponse = {
  __typename?: 'SignUpResponse';
  errors?: Maybe<Array<AuthErrors>>;
  created?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  communities: Array<Community>;
  email?: Maybe<Scalars['String']>;
  emailNotificationPreferences?: Maybe<EmailNotificationPreferences>;
  generalPreferences?: Maybe<GeneralPreferences>;
  notificationPreferences?: Maybe<NotificationPreferences>;
  username: Scalars['String'];
  profile?: Maybe<Profile>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type CreateCommunityMutationVariables = Exact<{
  name: Scalars['String'];
  isNsfw: Scalars['Boolean'];
  type: Scalars['String'];
}>;

export type CreateCommunityMutation = { __typename?: 'Mutation' } & {
  createCommunity: { __typename?: 'CreateCommunityResponse' } & Pick<
    CreateCommunityResponse,
    'created'
  > & {
      errors?: Maybe<
        Array<
          { __typename?: 'CreateCommunityError' } & Pick<
            CreateCommunityError,
            'field'
          > & {
              constraints: {
                __typename?: 'CreateCommunityErrorConstraints';
              } & Pick<
                CreateCommunityErrorConstraints,
                'minLength' | 'matches' | 'maxLength'
              >;
            }
        >
      >;
    };
};

export type LogInMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type LogInMutation = { __typename?: 'Mutation' } & {
  logIn: { __typename?: 'LogInResponse' } & Pick<LogInResponse, 'success'>;
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
          { __typename?: 'AuthErrors' } & Pick<AuthErrors, 'field'> & {
              constraints: { __typename?: 'AuthErrorConstraints' } & Pick<
                AuthErrorConstraints,
                'isEmail' | 'maxLength' | 'minLength'
              >;
            }
        >
      >;
    };
};

export type IsCommunityNameUniqueQueryVariables = Exact<{
  name: Scalars['String'];
}>;

export type IsCommunityNameUniqueQuery = { __typename?: 'Query' } & Pick<
  Query,
  'isCommunityNameUnique'
>;

export type IsUsernameUniqueQueryVariables = Exact<{
  username: Scalars['String'];
}>;

export type IsUsernameUniqueQuery = { __typename?: 'Query' } & Pick<
  Query,
  'isUsernameUnique'
>;

export const CreateCommunityDocument = gql`
  mutation CreateCommunity($name: String!, $isNsfw: Boolean!, $type: String!) {
    createCommunity(
      createCommunityData: { name: $name, isNsfw: $isNsfw, type: $type }
    ) {
      errors {
        field
        constraints {
          minLength
          matches
          maxLength
        }
      }
      created
    }
  }
`;
export type CreateCommunityMutationFn = Apollo.MutationFunction<
  CreateCommunityMutation,
  CreateCommunityMutationVariables
>;

/**
 * __useCreateCommunityMutation__
 *
 * To run a mutation, you first call `useCreateCommunityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommunityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommunityMutation, { data, loading, error }] = useCreateCommunityMutation({
 *   variables: {
 *      name: // value for 'name'
 *      isNsfw: // value for 'isNsfw'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateCommunityMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCommunityMutation,
    CreateCommunityMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCommunityMutation,
    CreateCommunityMutationVariables
  >(CreateCommunityDocument, options);
}
export type CreateCommunityMutationHookResult = ReturnType<
  typeof useCreateCommunityMutation
>;
export type CreateCommunityMutationResult = Apollo.MutationResult<CreateCommunityMutation>;
export type CreateCommunityMutationOptions = Apollo.BaseMutationOptions<
  CreateCommunityMutation,
  CreateCommunityMutationVariables
>;
export const LogInDocument = gql`
  mutation LogIn($username: String!, $password: String!) {
    logIn(logInData: { username: $username, password: $password }) {
      success
    }
  }
`;
export type LogInMutationFn = Apollo.MutationFunction<
  LogInMutation,
  LogInMutationVariables
>;

/**
 * __useLogInMutation__
 *
 * To run a mutation, you first call `useLogInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logInMutation, { data, loading, error }] = useLogInMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLogInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogInMutation,
    LogInMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LogInMutation, LogInMutationVariables>(
    LogInDocument,
    options
  );
}
export type LogInMutationHookResult = ReturnType<typeof useLogInMutation>;
export type LogInMutationResult = Apollo.MutationResult<LogInMutation>;
export type LogInMutationOptions = Apollo.BaseMutationOptions<
  LogInMutation,
  LogInMutationVariables
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
export const IsCommunityNameUniqueDocument = gql`
  query IsCommunityNameUnique($name: String!) {
    isCommunityNameUnique(name: $name)
  }
`;

/**
 * __useIsCommunityNameUniqueQuery__
 *
 * To run a query within a React component, call `useIsCommunityNameUniqueQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsCommunityNameUniqueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsCommunityNameUniqueQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useIsCommunityNameUniqueQuery(
  baseOptions: Apollo.QueryHookOptions<
    IsCommunityNameUniqueQuery,
    IsCommunityNameUniqueQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    IsCommunityNameUniqueQuery,
    IsCommunityNameUniqueQueryVariables
  >(IsCommunityNameUniqueDocument, options);
}
export function useIsCommunityNameUniqueLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    IsCommunityNameUniqueQuery,
    IsCommunityNameUniqueQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    IsCommunityNameUniqueQuery,
    IsCommunityNameUniqueQueryVariables
  >(IsCommunityNameUniqueDocument, options);
}
export type IsCommunityNameUniqueQueryHookResult = ReturnType<
  typeof useIsCommunityNameUniqueQuery
>;
export type IsCommunityNameUniqueLazyQueryHookResult = ReturnType<
  typeof useIsCommunityNameUniqueLazyQuery
>;
export type IsCommunityNameUniqueQueryResult = Apollo.QueryResult<
  IsCommunityNameUniqueQuery,
  IsCommunityNameUniqueQueryVariables
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
