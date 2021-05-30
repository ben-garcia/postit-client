import React, { FC, ReactNode } from 'react';

interface BaseIconProps {
  children: ReactNode;
  className?: string;
  size: string;
  viewBox: string;
}

export interface IconProps
  extends Omit<BaseIconProps, 'children' | 'viewBox'> {}

const Icon: FC<BaseIconProps> = props => {
  const { children, className, size, viewBox } = props;

  return (
    <svg
      aria-hidden="true"
      className={className}
      focusable="false"
      height={size}
      viewBox={viewBox}
      width={size}
    >
      {children}
    </svg>
  );
};

export default Icon;
