import React, { FC, ReactNode } from 'react';

import { Button as SButton } from 'supernova-ui';

interface ButtonProps {
  /**
   * Use as submit button for a form.
   */
  asSubmit?: boolean;
  children: ReactNode;
  className?: string;
  color?: string;
  hoverColor?: string;
  leftIcon?: ReactNode;
  margin?: string;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
}

const Button: FC<ButtonProps> = props => {
  const {
    asSubmit = false,
    children,
    className,
    color = undefined,
    hoverColor = undefined,
    leftIcon = undefined,
    margin,
    onClick,
    primary,
    secondary,
  } = props;
  const buttonType = React.useMemo(() => {
    if (primary && !secondary) {
      return 'filled';
    }
    if (secondary && !primary) {
      return 'outline';
    }
    return 'filled';
  }, []);

  return (
    <SButton
      asSubmitButton={asSubmit}
      backgroundColor={color}
      borderRadius="xxl"
      className={className?.trim().length ? className : undefined}
      hoverBackgroundColor={hoverColor}
      leftIcon={leftIcon}
      margin={margin}
      onClick={onClick}
      variant={buttonType}
    >
      {children}
    </SButton>
  );
};

export default Button;
