import React, { FC, ReactNode } from 'react';

import { Button as SButton } from 'supernova-ui';

interface ButtonProps {
  children: ReactNode;
  color?: string;
  hoverColor?: string;
  leftIcon?: ReactNode;
  primary?: boolean;
  secondary?: boolean;
}

const Button: FC<ButtonProps> = props => {
  const {
    children,
    color = undefined,
    hoverColor = undefined,
    leftIcon = undefined,
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
      backgroundColor={color}
      borderRadius="xxl"
      hoverBackgroundColor={hoverColor}
      leftIcon={leftIcon}
      variant={buttonType}
    >
      {children}
    </SButton>
  );
};

export default Button;
