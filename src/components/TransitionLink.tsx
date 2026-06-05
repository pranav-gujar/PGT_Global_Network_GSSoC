import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { usePageTransition } from '../contexts/PageTransitionContext';

export const Link: React.FC<LinkProps> = ({ to, onClick, children, ...props }) => {
  const { navigateWithTransition } = usePageTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    // Standard Link behavior checks (prevent on default-prevented, right-clicks, external target, modifier keys, etc.)
    if (
      !e.defaultPrevented &&
      e.button === 0 && // Left-click only
      (!props.target || props.target === '_self') &&
      !(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
    ) {
      e.preventDefault();
      const targetPath = typeof to === 'string' ? to : (to.pathname || '');
      if (targetPath) {
        navigateWithTransition(targetPath);
      }
    }
  };

  return (
    <RouterLink to={to} onClick={handleClick} {...props}>
      {children}
    </RouterLink>
  );
};
