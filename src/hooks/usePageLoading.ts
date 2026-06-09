import { usePageTransition } from '../contexts/PageTransitionContext';

export const usePageLoading = () => {
  const { loading } = usePageTransition();
  return loading;
};
