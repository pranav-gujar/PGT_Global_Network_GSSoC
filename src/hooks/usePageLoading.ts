// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// export const usePageLoading = () => {
//   const [loading, setLoading] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     setLoading(true);
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 200); // Adjust timing as needed

//     return () => clearTimeout(timer);
//   }, [location.pathname]);

//   return loading;
// };

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageLoading = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let showTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;

    // Start a timer — only show loader if page takes longer than 200ms to load
    showTimer = setTimeout(() => {
      setLoading(true);
    }, 200);

    // Hide loader after navigation completes (or after a max wait)
    hideTimer = setTimeout(() => {
      setLoading(false);
      clearTimeout(showTimer); // Cancel showing if page loaded too fast
    }, 2000); // max wait time (you can adjust)

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      setLoading(false);
    };
  }, [location.pathname]);

  return loading;
};
