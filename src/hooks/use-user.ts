import { useContext } from 'react';

import { UserContext } from '../contexts';

const useUser = () => {
  const context = useContext(UserContext);

  return context;
};

export default useUser;
