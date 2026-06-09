import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Globe, Award, ArrowRight, Sparkles } from 'lucide-react';
import founderImg from '../assets/founderImg.jpg';
import AnimatedCard from '../components/AnimatedCard';
import HeroBackground from '../components/HeroBackground';
import Background from '../components/Background';
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
  <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-28 overflow-hidden">
    <HeroBackground />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/30 tracking-wide">
          Est. 2019 · Purpose. Growth. Transformation.
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
          About PGT Global Network
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
          Transforming lives through purpose, growth, and meaningful change since 2019
        </p>
      </div>
    </div>
  </section>
</AnimatedCard>


      {/* Mission & Vision */}
     {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mission & Vision
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              The north star that guides everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <AnimatedCard animation="slideLeft">
              <div className="bg-blue-50 border border-blue-100 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To empower students, individuals, and organizations worldwide through innovative programs, leadership-driven growth, and purposeful action that creates lasting community impact.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="slideRight">
              <div className="bg-purple-50 border border-purple-100 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
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

      {/* CTA Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="fadeIn">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a0f1c] via-[#111827] to-[#0f172a] text-white p-8 md:p-16 shadow-2xl shadow-gray-250/20 border border-white/10">
              
              {/* Decorative Blur Backgrounds (Mesh Effect) */}
              <div className="absolute top-0 -left-1/4 w-full h-full bg-blue-650/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
              <div className="absolute top-0 -right-1/4 w-full h-full bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
              <div className="absolute -bottom-1/2 left-1/4 w-full h-full bg-indigo-600/8 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
              
              {/* Grid Pattern Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

              {/* Star particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/25 rounded-full animate-pulse shadow-[0_0_4px_rgba(255,255,255,0.4)]"
                    style={{
                      left: `${15 + (i * 14.5)}%`,
                      top: `${20 + ((i % 3) * 25)}%`,
                      animationDelay: `${i * 0.8}s`,
                      animationDuration: `${2 + (i % 2)}s`
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
                  <span className="text-xs font-black tracking-wider uppercase text-white/95">Our Mission</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                  Join Our Mission of Positive Change
                </h2>
                
                <p className="text-base md:text-lg text-white/85 max-w-2xl mx-auto font-light leading-relaxed">
                  From our founding vision to today, we continue to empower individuals and communities worldwide. Discover how you can be part of this transformative journey.
                </p>

                <p className="text-sm font-semibold text-blue-200">
                  Learn, grow, and create meaningful impact with us.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Link
                    to="/contact"
                    className="group/btn relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-650 text-white font-extrabold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 text-sm"
                  >
                    <span>Get Involved</span>
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/programs"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/25 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 text-sm"
                  >
                    Explore Programs
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>
      <AnimatedCard animation="fadeIn">
  <section className="relative py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
    <Background />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Join Our Mission of Positive Change
      </h2>
      <p className="text-xl mb-6 max-w-3xl mx-auto text-blue-100">
        From our founding vision to today, we continue to empower individuals and communities worldwide.  
        Discover how you can be part of this transformative journey.
      </p>
      <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-10">
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