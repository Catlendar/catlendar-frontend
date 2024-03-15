import React, { ReactNode } from 'react';
import { LayoutWrapper } from './Layout.styled';

interface LayoutProps {
  header?: ReactNode;
  main: ReactNode;
  navbar?: ReactNode;
}

export default function Layout({ header = null, main, navbar = null }: LayoutProps) {
  return (
    <LayoutWrapper>
      {header && header}
      {main}
      {navbar && navbar}
    </LayoutWrapper>
  );
}
