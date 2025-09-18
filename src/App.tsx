import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { useScrollToTop } from './hooks/useScrollToTop';
import { usePageLoading } from './hooks/usePageLoading';
import AnnouncementBar from './components/AnnouncementBar';
import AnimatedBackground from './components/AnimatedBackground';
import LoadingSpinner from './components/LoadingSpinner';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Timeline from './pages/Timeline';
import Impact from './pages/Impact';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ProgramDetail from './pages/ProgramDetail';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';

const AppContent = () => {
  useScrollToTop();
  const loading = usePageLoading();
  
  return (
    <>
      {loading && <LoadingSpinner />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/programs/:programId" element={<ProgramDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <Toaster position="top-right" />
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AnimatedBackground />
        <div className="min-h-screen bg-white">
          <AppContent />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;