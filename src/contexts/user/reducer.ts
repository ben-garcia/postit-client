export type UserActionTypes = 'USER_LOGGED_IN';

export interface UserAction {
  type: UserActionTypes;
}

interface User {
  isLoggedIn: boolean;
}

export interface UserState {
  user: User;
}

const reducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return { user: { isLoggedIn: true } };
    default:
      return state;
  }
};

export default reducer;
