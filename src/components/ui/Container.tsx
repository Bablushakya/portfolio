import React from 'react';
import { cn } from '../../lib/utils';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({ children, className, style }) => {
  return (
    <div className={cn('container-center w-full', className)} style={style}>
      {children}
    </div>
  );
};

export default Container;
