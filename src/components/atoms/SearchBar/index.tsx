import React, { FC } from 'react';

import { SearchIcon, TextInput } from 'supernova-ui';

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = () => {
  return (
    <form>
      <TextInput
        leftIcon={<SearchIcon fill="brandGrey200" size="1.3rem" />}
        label="Search"
      />
    </form>
  );
};

export default SearchBar;
