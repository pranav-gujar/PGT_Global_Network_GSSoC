import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface PageTransitionContextType {
  loading: boolean;
  navigateWithTransition: (to: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined);

export const PageTransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Custom function to handle internal programmatic/Link transitions
  const navigateWithTransition = (to: string) => {
    if (location.pathname === to) return;

    setLoading(true);
    // Wait for the loader to fade in completely before updating the path
    setTimeout(() => {
      navigate(to);
    }, 300); // 300ms matches the fade-in animation duration
  };

  // Sync route changes to manage loader fade-out duration
  useEffect(() => {
    // Make sure we keep/set loading to true when route changes,
    // then fade it out after a short delay so the new page renders underneath
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 450); // Keep loading active to hide rendering shifts

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <PageTransitionContext.Provider value={{ loading, navigateWithTransition }}>
      {children}
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within a PageTransitionProvider');
  }
  return context;
};
