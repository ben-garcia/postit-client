import React, { FC } from 'react';

import { SearchIcon, TextInput } from 'supernova-ui';

interface SearchBarProps {
  className?: string;
  fill?: string;
}

const SearchBar: FC<SearchBarProps> = props => {
  const { className, fill = 'brandGrey200' } = props;

  return (
    <form className="searchbar-form">
      <TextInput
        className={className}
        leftIcon={<SearchIcon fill={fill} size="1.3rem" />}
        label="Search"
      />
    </form>
  );
};

export default SearchBar;
