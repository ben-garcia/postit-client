import React, {
  createContext,
  Dispatch,
  useMemo,
  useReducer,
  ReactNode,
} from 'react';

import reducer, { UserAction, UserState } from './reducer';

interface UserContextProps {
  state: UserState;
  dispatch: Dispatch<UserAction>;
}

interface UserProviderProps {
  children: ReactNode;
}

const initialState: UserState = {
  user: {
    isLoggedIn: false,
  },
};

export const UserContext = createContext<UserContextProps>({
  state: initialState,
  dispatch: () => {},
});
export const UserProvider = (props: UserProviderProps) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
