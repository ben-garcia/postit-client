import React, { FC, ReactNode } from 'react';

interface BaseIconProps {
  children: ReactNode;
  className?: string;
  fill?: string;
  margin?: string;
  size: string;
  viewBox: string;
}

export interface IconProps
  extends Omit<BaseIconProps, 'children' | 'viewBox'> {}

const Icon: FC<BaseIconProps> = props => {
  const { children, className, fill = 'black', margin, size, viewBox } = props;

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill={fill}
      focusable="false"
      height={size}
      style={{ margin }}
      viewBox={viewBox}
      width={size}
    >
      {children}
    </svg>
  );
};

export default Icon;
