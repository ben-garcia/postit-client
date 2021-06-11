import React, { FC } from 'react';

/**
 * comment out for Next
 *
 * otherwise import when using Storybook
 */
// import './styles.scss';

interface SwitchButtonProps {
  'aria-describedby'?: string;
  'aria-label'?: string;
  isActive: boolean;
  onChange: () => void;
  tabIndex?: number;
}

const SwitchButton: FC<SwitchButtonProps> = props => {
  const { isActive = false, onChange, tabIndex = undefined, ...rest } = props;

  return (
    <button
      {...rest}
      aria-checked={isActive}
      className="switch-button"
      onClick={onChange}
      role="switch"
      style={{
        backgroundColor: isActive
          ? 'var(--color-brand-blue100)'
          : 'var(--color-brand-grey100)',
      }}
      tabIndex={tabIndex}
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
