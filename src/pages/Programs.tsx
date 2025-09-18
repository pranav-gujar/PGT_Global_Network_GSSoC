import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Zap, Brain, GraduationCap } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';
import HeroBackground from '../components/HeroBackground';
import Background from '../components/Background';


import Seminarix from '../assets/programs/Seminarix.png';
import D3 from '../assets/programs/D3.png';
import VoA from '../assets/programs/VoA.png';
import HED from '../assets/programs/HED.png';
import MotivMinds from '../assets/programs/MotiVMinds.png';

import LoadingSpinner from '../components/LoadingSpinner'; 
import { usePageLoading } from '../hooks/usePageLoading';

const Programs = () => {
  
  const loading = usePageLoading();
  
  // inside Programs.tsx
const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace("#", "");

    const scrollToEl = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // try immediately
    scrollToEl();
    // try again after render cycle
    const t = setTimeout(scrollToEl, 300);

    return () => clearTimeout(t);
  }
}, [location]);





  const programs = [
  {
    id: 'd3',
    name: 'D3 Program',
    fullName: 'Daily Discovery Digest',
    icon: Target,
    description: 'A flagship daily inspiration series delivering knowledge, awareness, and impactful stories to students.',
    features: [
      'Daily Instagram & Facebook Stories',
      'National & International Day Highlights',
      'Historical Milestones',
      'Great Personalities’ Anniversaries',
      'Real-Life Impact Stories',
      'Discover the Extraordinary Everyday'
    ],
    impact: '10,000+ daily story viewers and learners engaged',
    duration: 'Continuous daily program',
    image: D3
    // image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'voa',
    name: 'VoA Initiative',
    fullName: 'Voices of Ability',
    icon: Users,
    description: 'A storytelling series highlighting individuals who turned challenges into change and built impact.',
    features: [
      'Life Journey Recordings',
      'Empathy Building Stories',
      'Disability & Ability Awareness',
      'Video Episodes Published Online',
      'Empowerment Through Storytelling',
      'Inspiration for Social Change'
    ],
    impact: 'Dozens of powerful journeys shared and celebrated',
    duration: 'Continuous storytelling initiative',
    image: VoA
    // image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'seminarix',
    name: 'Seminarix',
    fullName: 'Seminar Series for Students',
    icon: GraduationCap,
    description: 'On-ground seminar sessions empowering students with academics, motivation, and wellness tools.',
    features: [
      'Motivational Talks',
      'Academic Strategies',
      'Mental Wellness Guidance',
      'Exam Preparation Techniques',
      'Interactive School & Hostel Sessions',
      'Real-Life Stories Sharing'
    ],
    impact: 'Hundreds of students guided through school and hostel sessions',
    duration: 'Continuous seminar series',
    image: Seminarix
    // image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'motivminds',
    name: 'MotivMinds',
    fullName: 'One-Minute Empowerment',
    icon: Brain,
    description: 'A video series sharing short and inspiring one-minute messages of motivation and real-world wisdom.',
    features: [
      'One-Minute Videos',
      'Personal Growth Insights',
      'Real-World Experience Sharing',
      'Motivational Short Films',
      'Student Empowerment Content',
      'Available on YouTube & Social Media'
    ],
    impact: 'Thousands inspired through one-minute empowerment content',
    duration: 'Continuous program',
    image: MotivMinds,
    // image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'hed',
    name: 'HED Program',
    fullName: 'Happy Eco Diwali',
    icon: Zap,
    description: 'The longest-running campaign promoting eco-friendly Diwali celebrations through awareness and innovation.',
    features: [
      'Eco-Friendly Celebrations',
      'Awareness Campaigns',
      'Innovation Contest',
      'Tree Plantation Drives',
      'Mission ENOSAVE Initiative',
      'Student & Community Participation'
    ],
    impact: 'Thousands engaged annually in eco-friendly Diwali celebrations',
    duration: 'Annual recurring campaign',
    image: HED
    // image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Our Programs
      </h1>
      <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
        Comprehensive initiatives designed to transform lives and communities through purposeful growth
      </p>
    </div>
  </section>
</AnimatedCard>


      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transformative Programs for Every Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From digital transformation to personal development, our programs are designed to meet diverse needs and create lasting impact.
            </p>
          </div>
          </AnimatedCard>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <AnimatedCard key={program.id} animation="slideUp" delay={index * 200}>
  <div
    id={program.id}   // 👈 added this line
    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
  >
    <div className="flex-1">
      <img
        src={program.image}
        alt={program.name}
        className="w-full h-96 object-cover rounded-2xl shadow-lg"
      />
    </div>
    
    <div className="flex-1 space-y-6">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <program.icon className="h-8 w-8 text-blue-600" />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-900">{program.name}</h3>
          <p className="text-lg text-gray-600">{program.fullName}</p>
        </div>
      </div>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        {program.description}
      </p>
      
      <div className="grid grid-cols-2 gap-4">
        {program.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 p-6 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Impact</h4>
            <p className="text-gray-600">{program.impact}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
            <p className="text-gray-600">{program.duration}</p>
          </div>
        </div>
      </div>
      
      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
        <Link
          to={`/programs/${program.id}`}
          className="flex items-center"
        >
          Learn More
        </Link>
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </div>
  </div>
</AnimatedCard>

            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedCard animation="fadeIn">
  <section className="relative py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white overflow-hidden">
    <Background />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Join a Program?
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
        Take the next step in your transformation journey. Our programs are designed to support you every step of the way.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contact"
          className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
        >
          Join Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
        <a
          href="https://topmate.io/pranav_gujar/1355631?utm_source=public_profile&utm_campaign=pranav_gujar"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
        >
          Start a Conversation
        </a>
      </div>
    </div>
  </section>
</AnimatedCard>


    </div>
  );
};

export default Programs;