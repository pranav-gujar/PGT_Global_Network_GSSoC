import React from 'react';
import { Target, Eye, Heart, Users, Globe, Award } from 'lucide-react';
import founderImg from '../assets/founderImg.jpg';
import AnimatedCard from '../components/AnimatedCard';
import HeroBackground from '../components/HeroBackground';
import Background from '..//components/Background';
import CountUpNumber from '../components/CountUpNumber';
import SeminarixLogo from '../assets/programs/Seminarix.png';
import MotiVMindsLogo from '../assets/programs/MotiVMinds.png';
import D3Logo from '../assets/programs/D3.png';
import HEDLogo from '../assets/programs/HED.png';
import VoALogo from '../assets/programs/VoA.png';

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

  const impactMetrics = [
    { value: 50, suffix: '+', label: 'Countries Reached', icon: Globe },
    { value: 10000, suffix: '+', label: 'Lives Impacted', icon: Users },
    { value: 5, suffix: '+', label: 'Active Programs', icon: Award },
    { value: 6, suffix: '+', label: 'Years of Impact', icon: Heart },
  ];

  const initiatives = [
    { name: 'Seminarix',
      logo: SeminarixLogo,
      description: 'Knowledge-sharing seminars for students and professionals.'},

    { name: 'MotiVMinds',
      logo: MotiVMindsLogo,
      description: 'Mental wellness and motivational support programs.'},

      { name: 'D3',
      logo: D3Logo,
      description: 'Data-drivern development for community leaders.'},

      { name: 'HED',
      logo: HEDLogo,
      description: 'Higher education development initiatives.'},

      { name: 'VoA',
      logo: VoALogo,
      description: 'Voice of Action - advocacy and awareness campaigns.'},
      
  ];

  const milestones = [

    { year: '2019', title: 'PGT Founded', description: 'Pranav Gujar establishes PGT Global Network with a vision to empower purpose-driven growth.' },
    { year: '2020',    title: 'First Programs Launched', description: 'Seminarix and MotiVMinds go live, reaching students across India.' },
    { year: '2021',    title: 'Global Expansion',      description: 'PGT programs reach participants across 20+ countries.' },
    { year: '2022',    title: 'Community Milestone',   description: 'Network surpasses 5,000 active members.' },
    { year: '2023',    title: 'New Verticals',         description: 'D3, HED, and VoA programs launched, expanding PGT\'s impact ecosystem.' },
    { year: '2024–25', title: '50+ Countries',         description: 'PGT touches lives in over 50 countries with 10,000+ individuals impacted.' },

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
        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-white/30">
          Est. 2019 · Purpose. Growth. Transformation.
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About PGT Global Network
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-3">
          A purpose-driven global organization empowering individuals, students, and communities worldwide.
        </p>
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
          Transforming lives through purpose, growth, and meaningful change since 2019
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/programs" className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">
            Explore Our Programs
          </a>
          <a href="/contact" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  </section>
</AnimatedCard>

{/* Impact Metrics Strip */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="fadeIn">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Our Impact at a Glance
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {impactMetrics.map((metric, index) => (
                <AnimatedCard key={index} animation="slideUp" delay={index * 150}>
                  <div>
                    <metric.icon className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                    <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                      <CountUpNumber end={metric.value} suffix={metric.suffix} duration={2200} />
                    </div>
                    <p className="text-blue-100 text-sm font-semibold uppercase tracking-widest">
                      {metric.label}
                    </p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

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

      {/* Our Journey — Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">From a single vision to a global network</p>
          </div>
          <div className="relative">
          
            <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <AnimatedCard key={index} animation="slideUp" delay={index * 100}>
                  <div className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    <div className="flex-1">
                      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <span className="inline-block bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md flex-shrink-0 z-10" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="fadeIn">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="flex flex-col lg:flex-row">

                <div className="lg:w-2/5 bg-gradient-to-br from-blue-600 to-purple-700 p-10 flex flex-col items-center justify-center text-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl mb-6">
                    <img
                      src={founderImg}
                      alt="Pranav Gujar — Founder & CEO, PGT Global Network"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">Pranav Gujar</h3>
                  <p className="text-blue-100 font-medium mb-6">Founder & CEO, PGT Global Network</p>
                  <div className="flex flex-col gap-2 text-sm text-blue-100">
                    <span className="flex items-center justify-center gap-2">
                      <Globe className="h-4 w-4" aria-hidden="true" /> Social Impact Leader
                    </span>
                    <span className="flex items-center justify-center gap-2">
                      <Award className="h-4 w-4" aria-hidden="true" /> Purpose-Driven Entrepreneur
                    </span>
                    <span className="flex items-center justify-center gap-2">
                      <Users className="h-4 w-4" aria-hidden="true" /> Community Builder
                    </span>
                  </div>
                </div>

                <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">A Note from Our Founder</h2>
                  <blockquote className="border-l-4 border-blue-600 pl-6 mb-6">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                      "When I founded PGT Global Network, the vision was simple yet powerful: to build a space where purpose turns into action, where growth is cultivated through real-world learning, and where transformation becomes a shared journey."
                    </p>
                  </blockquote>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    What began as a small student-led initiative has now grown into a global network that has touched lives across 50+ countries. Along the way, we've learned, adapted, and stayed true to our core belief — that real change starts with empowering people.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Today, PGT continues to stand for empowerment, awareness, and action. Every program we launch, every partnership we form, and every step we take brings us closer to a world where purposeful growth is not an exception, but a way of life.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Thank you for being part of this journey. Together, we're not just changing lives — we're transforming the world, one purpose at a time.
                  </p>
                  <div>
                    <p className="text-gray-500 text-sm">With gratitude and excitement for what's ahead,</p>
                    <p className="text-xl font-bold text-gray-900 mt-1">Pranav Gujar</p>
                  </div>
                </div>

              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Key Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-driven programs creating meaningful impact across the globe
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {initiatives.map((initiative, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 100}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 text-center h-full flex flex-col items-center justify-start">
                  <div className="w-20 h-20 flex items-center justify-center mb-4">
                    <img
                      src={initiative.logo}
                      alt={`${initiative.name} program logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{initiative.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{initiative.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
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
       <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/programs" className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-full hover:bg-purple-50 transition-colors">
          View Our Programs
        </a>
        <a href="/contact" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
          Get Involved
        </a>
      </div>
    </div>
  </section>
</AnimatedCard>

    </div>
  );
};

export default About;