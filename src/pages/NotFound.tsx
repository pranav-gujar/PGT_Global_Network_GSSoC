import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';
import HeroBackground from '../components/HeroBackground';
import LoadingSpinner from '../components/LoadingSpinner';
import { usePageLoading } from '../hooks/usePageLoading';

const NotFound = () => {
  const loading = usePageLoading();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="pt-16">
      <AnimatedCard animation="fadeIn">
        <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 overflow-hidden min-h-[80vh] flex items-center justify-center">
          <HeroBackground />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              <AlertCircle className="h-24 w-24 text-white opacity-90" />
            </div>
            <h1 className="text-8xl md:text-9xl font-bold mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-10">
              Oops! The page you're looking for doesn't exist or the link may be broken.
            </p>
            <Link
              to="/"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </section>
      </AnimatedCard>
    </div>
  );
};

export default NotFound;