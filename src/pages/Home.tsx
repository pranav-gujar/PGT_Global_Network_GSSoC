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
        <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
          <HeroBackground />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transforming Lives Through
               <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent font-extrabold mt-3">
                 Positivity, Growth & Transformation
               </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
                Empowering individuals and organizations worldwide through innovative programs,
                sustainable growth, and purposeful transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/programs"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Explore Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
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
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
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



      {/* Programs Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative initiatives designed to create lasting impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 200}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{program.name}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <Link
  to={`/programs/${program.id}`}  // direct to ProgramDetail
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
            <Link
              to="/programs"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
