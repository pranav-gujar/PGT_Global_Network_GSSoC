import React from 'react';
import { Link } from '../components/TransitionLink';
import { ArrowRight, Target, TrendingUp, Zap, Users, Globe, Award, Star, BookOpen, Hourglass, GraduationCap, Sparkles } from 'lucide-react';
import CountUpNumber from '../components/CountUpNumber';
import HeroBackground from '../components/HeroBackground';
import AnimatedCard from '../components/AnimatedCard';
import Background from '../components/Background';

import LoadingSpinner from '../components/LoadingSpinner';
import { usePageLoading } from '../hooks/usePageLoading';

import Seminarix from '../assets/programs/Seminarix.png';
import D3 from '../assets/programs/D3.png';
import VoA from '../assets/programs/VoA.png';


const Home = () => {
  const loading = usePageLoading();

  const coreValues = [
    {
      icon: Target,
      title: 'Positivity',
      description: 'Every initiative starts with a clear purpose and a passionate drive to create meaningful change.',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We nurture continuous learning and leadership, helping individuals and organizations reach their potential.',
      color: 'text-green-600'
    },
    {
      icon: Zap,
      title: 'Transformation',
      description: 'We inspire positive change that uplifts lives, strengthens communities, and shapes a better world.',
      color: 'text-purple-600'
    }
  ];

  const impactStats = [
    { number: 10000, label: 'Lives Impacted', icon: Users, suffix: '+' },
    { number: 200, label: 'Success Stories', icon: Star, suffix: '+' },
    { number: 8, label: 'Programs & Campaigns', icon: BookOpen, suffix: '+' },
    { number: 6, label: 'Years of Excellence', icon: Hourglass, suffix: '+' }
  ];


  const programs = [
    {
      id: 'd3',
      name: 'D3 Program',
      description: 'A flagship daily inspiration series delivering knowledge, awareness, and impactful stories to students through visual storytelling.',
      image: D3,
      category: 'Daily Learning',
      badgeBg: 'bg-indigo-50/90 border-indigo-100 text-indigo-800 dark:bg-indigo-950/50 dark:border-indigo-900/50 dark:text-indigo-300',
      icon: Target,
      iconBg: 'bg-indigo-50 border border-indigo-100/50 text-indigo-650 dark:bg-indigo-900/40 dark:text-indigo-400',
      btnHover: 'hover:bg-indigo-600 hover:text-white hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-600/25'
    },
    {
      id: 'voa',
      name: 'VoA Initiative',
      description: 'A storytelling series highlighting individuals who turned challenges into change and built impact, cultivating community empathy.',
      image: VoA,
      category: 'Community Impact',
      badgeBg: 'bg-amber-50/90 border-amber-100 text-amber-800 dark:bg-amber-950/50 dark:border-amber-900/50 dark:text-amber-300',
      icon: Users,
      iconBg: 'bg-amber-50 border border-amber-100/50 text-amber-650 dark:bg-amber-900/40 dark:text-amber-400',
      btnHover: 'hover:bg-amber-600 hover:text-white hover:border-amber-600 hover:shadow-lg hover:shadow-amber-600/25'
    },
    {
      id: 'seminarix',
      name: 'Seminarix',
      description: 'On-ground seminar sessions empowering students with academic performance keys, robust motivation, and mental wellness tools.',
      image: Seminarix,
      category: 'Growth & Wellness',
      badgeBg: 'bg-violet-50/90 border-violet-100 text-violet-800 dark:bg-violet-950/50 dark:border-violet-900/50 dark:text-violet-300',
      icon: GraduationCap,
      iconBg: 'bg-violet-50 border border-violet-100/50 text-violet-650 dark:bg-violet-900/40 dark:text-violet-400',
      btnHover: 'hover:bg-violet-600 hover:text-white hover:border-violet-600 hover:shadow-lg hover:shadow-violet-600/25'
    }
  ];


  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="pt-16">
      {/* Announcement Bar */}
      <div className="bg-blue-100 text-blue-800 py-2 overflow-hidden whitespace-nowrap border-b border-blue-200">
        <div className="flex space-x-12 animate-marquee hover:[animation-play-state:paused]">
          <Link to="/blog" className="hover:underline">
            📢 New Blog Posted — Read Now! Click here →
          </Link>
          <Link to="/careers" className="hover:underline">
            🚀 Recruitment Drive Live — Apply Now! Click here →
          </Link>
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-flex;
            animation: marquee 12s linear infinite;
          }
        `}
      </style>

      {/* Hero Section */}
      <AnimatedCard animation="fadeIn">
        <section className="relative bg-gray-950 text-white overflow-hidden min-h-[90vh] flex items-center">
          <HeroBackground />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10 w-full">
            <div className="text-center">
              
              {/* Trust Badge */}
              <div className="animate-fade-in-up flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-black/10">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium text-white/80">Over 10,000+ Lives Impacted Globally</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
                Transforming Lives Through
               <span className="block bg-gradient-to-r from-blue-400 to-indigo-200 bg-clip-text text-transparent mt-2 pb-2 drop-shadow-sm">
                 Positivity, Growth & Transformation
               </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-300 font-light leading-relaxed">
                Empowering individuals and organizations worldwide through innovative programs,
                sustainable growth, and purposeful transformation.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/programs"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:from-blue-500 hover:to-indigo-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)]"
                >
                  Explore Programs
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-300 transition-all duration-300 bg-transparent border border-white/20 rounded-full hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white/50"
                >
                  Learn More
                </Link>
              </div>
              
              {/* Trust Indicators (Logos / Stats summary if any) - Left empty as badge handles it primarily */}
            </div>
          </div>
        </section>
      </AnimatedCard>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three fundamental principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 200}>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100/55 hover:shadow-lg transition-all duration-300">
                  <div className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 ${value.color}`}>
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <AnimatedCard animation="fadeIn">
        <section className="relative py-24 bg-gradient-to-br from-[#0a0f1c] via-[#111827] to-[#0f172a] text-white overflow-hidden border-t border-b border-white/5">
          
          {/* Decorative Blur Backgrounds (Mesh Effect) */}
          <div className="absolute top-0 -left-1/4 w-full h-full bg-blue-650/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
          <div className="absolute top-0 -right-1/4 w-full h-full bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
          <div className="absolute -bottom-1/2 left-1/4 w-full h-full bg-indigo-600/8 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

          {/* Star particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/25 rounded-full animate-pulse shadow-[0_0_4px_rgba(255,255,255,0.4)]"
                style={{
                  left: `${10 + (i * 12.5)}%`,
                  top: `${15 + ((i % 3) * 25)}%`,
                  animationDelay: `${i * 0.6}s`,
                  animationDuration: `${2 + (i % 2)}s`
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                Our Global Impact
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light">
                Six years of dedication, innovation, and transformation
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <AnimatedCard key={index} animation="zoomIn" delay={index * 150}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-white/10 border border-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 shadow-md hover:scale-105 transition-transform duration-300">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">
                      <CountUpNumber
                        end={stat.number}
                        suffix={stat.suffix || ''}
                        duration={2500}
                      />
                    </div>
                    <div className="text-blue-200 text-sm font-semibold tracking-wider uppercase">{stat.label}</div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
      </AnimatedCard>



      {/* Programs Preview */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-150 shadow-sm mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Ecosystem Preview</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
              Our Flagship Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Designed with precision to offer robust learning, resilient community building, and impactful growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {programs.map((program, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 150}>
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-250/20 hover:border-gray-250 transition-all duration-500 overflow-hidden flex flex-col h-full transform hover:-translate-y-2">
                  
                  {/* Image container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transform group-hover:scale-[1.04] transition-transform duration-550 ease-out"
                    />
                    
                    {/* Brand Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    
                    {/* Category Floating Tag */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md border backdrop-blur-md ${program.badgeBg}`}>
                        {program.category}
                      </span>
                    </div>
                  </div>

                  {/* Body content */}
                  <div className="p-6 lg:p-8 flex flex-col flex-grow justify-between bg-white">
                    <div>
                      {/* Name & Icon Row */}
                      <div className="flex items-center space-x-3.5 mb-3.5">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${program.iconBg}`}>
                          <program.icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">{program.name}</h3>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 font-normal">
                        {program.description}
                      </p>
                    </div>

                    {/* Learn More Action Button */}
                    <Link
                      to={`/programs/${program.id}`}
                      className={`w-full inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-bold border border-gray-200 transition-all duration-300 bg-white ${program.btnHover}`}
                    >
                      <span>Explore Initiative</span>
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/programs"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-blue-600 hover:bg-blue-700 rounded-xl hover:shadow-xl hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              View All Programs
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
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
                  <span className="text-xs font-black tracking-wider uppercase text-white/95">Join Us Today</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                  Ready to Transform Your Future?
                </h2>
                
                <p className="text-base md:text-lg text-white/85 max-w-2xl mx-auto font-light leading-relaxed">
                  Join thousands of individuals and organizations who have experienced growth through our programs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Link
                    to="/careers"
                    className="group/btn relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-650 text-white font-extrabold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 text-sm"
                  >
                    <span>Join Our Team</span>
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/25 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 text-sm"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

    </div>
  );
};

export default Home;
