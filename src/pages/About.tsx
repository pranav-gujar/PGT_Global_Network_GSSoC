import React from 'react';
import { Target, Eye, Heart, Users, Globe, Award } from 'lucide-react';
import founderImg from '../assets/founderImg.jpg';
import AnimatedCard from '../components/AnimatedCard';
import HeroBackground from '../components/HeroBackground';
import Background from '..//components/Background';

import LoadingSpinner from '../components/LoadingSpinner'; 
import { usePageLoading } from '../hooks/usePageLoading';

const About = () => {
    const loading = usePageLoading();
  
  const foundingPrinciples = [
    {
      icon: Target,
      title: 'Purpose-Driven',
      description: 'Every initiative begins with a mission to create real and lasting impact.'
    },
    {
      icon: Users,
      title: 'People-Centered',
      description: 'We believe in human potential and invest in developing individuals.'
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'Connecting communities across continents, building a united world of learners and leaders.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for the highest standards in our programs, partnerships, and impact.'
    }
  ];

   if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <AnimatedCard animation="fadeIn">
  <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 overflow-hidden">
    <HeroBackground />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About PGT Global Network
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
          Transforming lives through purpose, growth, and meaningful change since 2019
        </p>
      </div>
    </div>
  </section>
</AnimatedCard>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedCard animation="slideLeft">
              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To empower students, individuals, and organizations worldwide through innovative programs, leadership-driven growth, and purposeful action that creates lasting community impact.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="slideRight">
              <div className="bg-purple-50 p-8 rounded-xl">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be a global network where purpose-driven growth transforms lives, enabling every individual and organization to unlock their true potential and contribute meaningfully to society.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that guide our work and define who we are
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard animation="slideUp" delay={0}>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Positivity</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe that meaningful work begins with a clear purpose. Every initiative 
                  we undertake is driven by the intention to create positive, lasting impact.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="slideUp" delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="h-8 w-8 text-green-600 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth</h3>
                <p className="text-gray-600 leading-relaxed">
                  We foster continuous learning and development, believing that growth is 
                  essential for both personal fulfillment and organizational success.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="slideUp" delay={400}>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Transformation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We catalyze positive change that transforms lives, communities, and organizations, 
                  creating ripple effects that extend far beyond our direct reach.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="fadeIn">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  A Note from Our Founder
                </h2>
                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  <img
                   src={founderImg}
                   alt="Profile"
                   className="w-full h-full object-cover"
                   />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Pranav Gujar</h3>
                <p className="text-gray-600 font-medium">Founder & CEO, PGT Global Network</p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed text-center italic">
                  When I founded PGT Global Network, the vision was simple yet powerful: to build a space where purpose turns into action, where growth is cultivated through real-world learning, and where transformation becomes a shared journey.
                </blockquote>
                
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                  What began as a small student-led initiative has now grown into a global network that has touched lives across 50+ countries. Along the way, we’ve learned, adapted, and stayed true to our core belief — that real change starts with empowering people.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                  Today, PGT continues to stand for empowerment, awareness, and action. Every program we launch, every partnership we form, and every step we take brings us closer to a world where purposeful growth is not an exception, but a way of life.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                  Thank you for being part of this journey. Together, we’re not just changing lives — we’re transforming the world, one purpose at a time.
                </p>
                
                <div className="mt-8 text-center">
                  <p className="text-gray-600 font-medium">With gratitude and excitement for what's ahead,</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">Pranav Gujar</p>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Founding Principles */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Founding Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core beliefs that have guided us from day one
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {foundingPrinciples.map((principle, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 200}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <principle.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <AnimatedCard animation="fadeIn">
  <section className="relative py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
    <Background />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Join Our Mission of Positive Change
      </h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
        From our founding vision to today, we continue to empower individuals and communities worldwide.  
        Discover how you can be part of this transformative journey.
      </p>
      <p className="text-lg text-blue-200 max-w-2xl mx-auto">
        Learn, grow, and create meaningful impact with us.
      </p>
    </div>
  </section>
</AnimatedCard>

    </div>
  );
};

export default About;