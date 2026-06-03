import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, TrendingUp, Zap, Users, Globe, Award, Star, BookOpen, Hourglass } from 'lucide-react';
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
      description: 'A flagship daily inspiration series delivering knowledge, awareness, and impactful stories to students.',
      image: D3
    },
    {
      id: 'voa',
      name: 'VoA Initiative',
      description: 'A storytelling series highlighting individuals who turned challenges into change and built impact.',
      image: VoA
    },
    {
      id: 'seminarix',
      name: 'Seminarix',
      description: 'On-ground seminar sessions empowering students with academics, motivation, and wellness tools',
      image: Seminarix
    }
  ];


  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="pt-16">

      {/* ── Announcement Bar ──────────────────────────────────────────
          CHANGED: added dark:bg-blue-950 dark:text-blue-300 dark:border-blue-900
          Light blue bar was unreadable against dark page background        */}
      <div className="bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 py-2 overflow-hidden whitespace-nowrap border-b border-blue-200 dark:border-blue-900">
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

      {/* ── Hero Section ─────────────────────────────────────────────
          NO CHANGE — already a dark gradient background (blue-600→purple-600→blue-800).
          Text is white throughout. Reads correctly in both modes.           */}
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

                <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent font-extrabold mt-3">
                  Positivity, Growth & Transformation
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">

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

      {/* ── Core Values ──────────────────────────────────────────────
          CHANGED: section bg-gray-50 → dark:bg-slate-800
          CHANGED: heading text-gray-900 → dark:text-white
          CHANGED: subtext text-gray-600 → dark:text-slate-400
          CHANGED: cards bg-white → dark:bg-slate-700 with dark border + shadow
          CHANGED: icon circle bg-gray-100 → dark:bg-slate-600
          CHANGED: card heading text-gray-900 → dark:text-white
          CHANGED: card body text-gray-600 → dark:text-slate-300                */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
              Three fundamental principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 200}>

                <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg dark:shadow-slate-900/50 border border-transparent dark:border-slate-600 hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 rounded-full bg-gray-100 dark:bg-slate-600 flex items-center justify-center mb-6 ${value.color}`}>

                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-slate-300 leading-relaxed">{value.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>


      {/* Impact Stats */}

      <AnimatedCard animation="fadeIn">
        <section className="relative py-20 bg-blue-600 text-white overflow-hidden">
          <Background />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Global Impact
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Six years of dedication, innovation, and transformation
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <AnimatedCard key={index} animation="zoomIn" delay={index * 150}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      <CountUpNumber
                        end={stat.number}
                        suffix={stat.suffix || ''}
                        duration={2500}
                      />
                    </div>
                    <div className="text-blue-100 font-medium">{stat.label}</div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
      </AnimatedCard>



            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <AnimatedCard key={index} animation="zoomIn" delay={index * 150}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      <CountUpNumber
                        end={stat.number}
                        suffix={stat.suffix || ''}
                        duration={2500}
                      />
                    </div>
                    <div className="text-blue-100 font-medium">{stat.label}</div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
      </AnimatedCard>

      {/* ── Programs Preview ──*/}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
              Innovative initiatives designed to create lasting impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 200}>
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-slate-900/50 border border-transparent dark:border-slate-700 overflow-hidden hover:shadow-xl transition-shadow">

                  <img
                    src={program.image}
                    alt={program.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{program.name}</h3>
                    <p className="text-gray-600 dark:text-slate-300 mb-4">{program.description}</p>
                    <Link

                      to={`/programs/${program.id}`}

                      className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>

                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="text-center mt-12">
            {/* "View All Programs" button — blue on both modes, no change needed */}
            <Link
              to="/programs"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              View All Programs
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ─*/}
                             
      <AnimatedCard animation="fadeIn">
        <section className="relative py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
          <Background />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
              Join thousands of individuals and organizations who have experienced growth through our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Join Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </AnimatedCard>

    

    </div>
  );
};

export default Home;