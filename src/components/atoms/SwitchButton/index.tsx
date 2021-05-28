import React, { FC } from 'react';

import './styles.scss';

interface SwitchButtonProps {
  isActive: boolean;
  onChange: () => void;
}

const SwitchButton: FC<SwitchButtonProps> = props => {
  const { isActive = false, onChange } = props;

  return (
    <button
      className="switch-button"
      onClick={onChange}
      style={{
        backgroundColor: isActive
          ? 'var(--color-brand-blue100)'
          : 'var(--color-brand-grey100)',
      }}
      type="button"
    >
      <div
        aria-hidden="true"
        className="switch-button__circle"
        style={{ transform: isActive ? 'translateX(120%)' : 'translate(5px)' }}
      />
    </button>
  );
};

export default SwitchButton;
