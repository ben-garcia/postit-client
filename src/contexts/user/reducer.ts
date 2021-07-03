export type UserActionTypes = 'USER_LOGGED_IN';

export interface UserAction {
  type: UserActionTypes;
  payload: string;
}

interface User {
  isLoggedIn: boolean;
  username?: string;
}

export interface UserState {
  user: User;
}

const reducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return {
        user: {
          isLoggedIn: true,
          username: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
