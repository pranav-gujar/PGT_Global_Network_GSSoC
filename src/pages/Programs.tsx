
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Zap, Brain, GraduationCap, Award, Clock, Sparkles, Check, Filter } from 'lucide-react';
import { useEffect } from "react";
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Users, Target, Zap, Brain, GraduationCap, TrendingUp } from 'lucide-react';
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

interface ColorClasses {
  badge: string;
  iconBg: string;
  iconText: string;
  button: string;
  imageOverlay: string;
  impactChip: string;
  navPillBorder: string;
  navPillText: string;
  navPillHover: string;
  navAccentBar: string;
  navActiveBg: string;
  navActiveText: string;
}

const colorMap: Record<string, ColorClasses> = {
  blue: {
    badge:         'bg-blue-100 text-blue-700 border border-blue-200',
    iconBg:        'bg-blue-100',
    iconText:      'text-blue-600',
    button:        'bg-blue-600 hover:bg-blue-700',
    imageOverlay:  'from-blue-600/70',
    impactChip:    'bg-blue-50 border-blue-200 text-blue-800',
    navPillBorder: 'border-blue-500',
    navPillText:   'text-blue-700',
    navPillHover:  'hover:bg-blue-500 hover:text-white',
    navAccentBar:  'bg-blue-500',
    navActiveBg:   'bg-blue-600',
    navActiveText: 'text-white',
  },
  purple: {
    badge:         'bg-purple-100 text-purple-700 border border-purple-200',
    iconBg:        'bg-purple-100',
    iconText:      'text-purple-600',
    button:        'bg-purple-600 hover:bg-purple-700',
    imageOverlay:  'from-purple-600/70',
    impactChip:    'bg-purple-50 border-purple-200 text-purple-800',
    navPillBorder: 'border-purple-500',
    navPillText:   'text-purple-700',
    navPillHover:  'hover:bg-purple-500 hover:text-white',
    navAccentBar:  'bg-purple-500',
    navActiveBg:   'bg-purple-600',
    navActiveText: 'text-white',
  },
  emerald: {
    badge:         'bg-emerald-100 text-emerald-700 border border-emerald-200',
    iconBg:        'bg-emerald-100',
    iconText:      'text-emerald-600',
    button:        'bg-emerald-600 hover:bg-emerald-700',
    imageOverlay:  'from-emerald-600/70',
    impactChip:    'bg-emerald-50 border-emerald-200 text-emerald-800',
    navPillBorder: 'border-emerald-500',
    navPillText:   'text-emerald-700',
    navPillHover:  'hover:bg-emerald-500 hover:text-white',
    navAccentBar:  'bg-emerald-500',
    navActiveBg:   'bg-emerald-600',
    navActiveText: 'text-white',
  },
  orange: {
    badge:         'bg-orange-100 text-orange-700 border border-orange-200',
    iconBg:        'bg-orange-100',
    iconText:      'text-orange-600',
    button:        'bg-orange-600 hover:bg-orange-700',
    imageOverlay:  'from-orange-600/70',
    impactChip:    'bg-orange-50 border-orange-200 text-orange-800',
    navPillBorder: 'border-orange-500',
    navPillText:   'text-orange-700',
    navPillHover:  'hover:bg-orange-500 hover:text-white',
    navAccentBar:  'bg-orange-500',
    navActiveBg:   'bg-orange-600',
    navActiveText: 'text-white',
  },
  green: {
    badge:         'bg-green-100 text-green-700 border border-green-200',
    iconBg:        'bg-green-100',
    iconText:      'text-green-600',
    button:        'bg-green-600 hover:bg-green-700',
    imageOverlay:  'from-green-600/70',
    impactChip:    'bg-green-50 border-green-200 text-green-800',
    navPillBorder: 'border-green-500',
    navPillText:   'text-green-700',
    navPillHover:  'hover:bg-green-500 hover:text-white',
    navAccentBar:  'bg-green-500',
    navActiveBg:   'bg-green-600',
    navActiveText: 'text-white',
  },
};

const Programs = () => {
  const loading = usePageLoading();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      const scrollToEl = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      scrollToEl();
      const t = setTimeout(scrollToEl, 300);
      return () => clearTimeout(t);
    }
  }, [location]);

  const categories = [
    { id: 'all', name: 'All Initiatives', count: 5 },
    { id: 'learning', name: 'Daily Learning', count: 2 },
    { id: 'community', name: 'Community Impact', count: 2 },
    { id: 'growth', name: 'Growth & Wellness', count: 1 }
  ];

  const loading = usePageLoading();
  const location = useLocation();
  const [activeSection, setActiveSection] = React.useState<string>('d3');

  // Total height of stacked sticky bars: main navbar (64px) + quick-nav bar (~48px) + 16px breathing room
  const SCROLL_OFFSET = 128;

  const scrollToSection = React.useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  // Handle URL hash on page load / navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Wait one frame for layout, then scroll with offset
      const t = setTimeout(() => scrollToSection(id), 100);
      return () => clearTimeout(t);
    }
  }, [location, scrollToSection]);

  // Scroll-spy: highlight nav item whose section top is nearest below the offset
  useEffect(() => {
    const programIds = ['d3', 'voa', 'seminarix', 'motivminds', 'hed'];

    const onScroll = () => {
      // Find the last section whose top edge has passed our offset line
      let current = programIds[0];
      for (const id of programIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= SCROLL_OFFSET + 32) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on mount to set initial state
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const programs = [
    {
      id: 'd3',
      name: 'D3 Program',
      fullName: 'Daily Discovery Digest',
      icon: Target,
      category: 'learning',
      description: 'A flagship daily inspiration series delivering knowledge, awareness, and impactful stories to students through visual storytelling.',
      color: 'blue',
      category: 'Daily Awareness',
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
      impactShort: '10K+ Reached',
      duration: 'Continuous daily program',
      image: D3,
      themeColor: 'indigo',
      accentText: 'text-indigo-600 dark:text-indigo-400',
      accentBg: 'bg-indigo-50/80 border-indigo-100 text-indigo-800 dark:bg-indigo-950/40 dark:border-indigo-900/40 dark:text-indigo-300',
      iconBg: 'bg-indigo-50 border border-indigo-100 text-indigo-600 dark:bg-indigo-950/60 dark:border-indigo-900/50 dark:text-indigo-400',
      bgGradient: 'from-indigo-600 to-blue-500',
      btnBg: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20 hover:shadow-indigo-600/35 focus:ring-indigo-500',
      glowShadow: 'group-hover/card:shadow-indigo-500/10'
    },
    {
      id: 'voa',
      name: 'VoA Initiative',
      fullName: 'Voices of Ability',
      icon: Users,
      category: 'community',
      description: 'A storytelling series highlighting individuals who turned challenges into change and built impact, cultivating community empathy.',
        "Great Personalities' Anniversaries",
        'Real-Life Impact Stories',
        'Discover the Extraordinary Everyday',
      ],
      impact: '10,000+ daily story viewers and learners engaged',
      duration: 'Continuous daily program',
      image: D3,
    },
    {
      id: 'voa',
      color: 'purple',
      category: 'Storytelling',
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
      impactShort: 'Resilience Stories',
      duration: 'Continuous storytelling initiative',
      image: VoA,
      themeColor: 'amber',
      accentText: 'text-amber-600 dark:text-amber-400',
      accentBg: 'bg-amber-50/80 border-amber-100 text-amber-800 dark:bg-amber-950/40 dark:border-amber-900/40 dark:text-amber-300',
      iconBg: 'bg-amber-50 border border-amber-100 text-amber-600 dark:bg-amber-950/60 dark:border-amber-900/50 dark:text-amber-400',
      bgGradient: 'from-amber-600 to-rose-500',
      btnBg: 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/20 hover:shadow-amber-600/35 focus:ring-amber-500',
      glowShadow: 'group-hover/card:shadow-amber-500/10'
    },
    {
      id: 'seminarix',
      name: 'Seminarix',
      fullName: 'Seminar Series for Students',
      icon: GraduationCap,
      category: 'growth',
      description: 'On-ground seminar sessions empowering students with academic performance keys, robust motivation, and mental wellness tools.',
        'Inspiration for Social Change',
      ],
      impact: 'Dozens of powerful journeys shared and celebrated',
      duration: 'Continuous storytelling initiative',
      image: VoA,
    },
    {
      id: 'seminarix',
      color: 'emerald',
      category: 'On-Ground Seminars',
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
      impactShort: 'On-Ground Seminars',
      duration: 'Continuous seminar series',
      image: Seminarix,
      themeColor: 'violet',
      accentText: 'text-violet-600 dark:text-violet-400',
      accentBg: 'bg-violet-50/80 border-violet-100 text-violet-800 dark:bg-violet-950/40 dark:border-violet-900/40 dark:text-violet-300',
      iconBg: 'bg-violet-50 border border-violet-100 text-violet-600 dark:bg-violet-950/60 dark:border-violet-900/50 dark:text-violet-400',
      bgGradient: 'from-violet-600 to-purple-500',
      btnBg: 'bg-violet-600 hover:bg-violet-700 text-white shadow-violet-600/20 hover:shadow-violet-600/35 focus:ring-violet-500',
      glowShadow: 'group-hover/card:shadow-violet-500/10'
    },
    {
      id: 'motivminds',
      name: 'MotivMinds',
      fullName: 'One-Minute Empowerment',
      icon: Brain,
      category: 'learning',
      description: 'A video series sharing short and inspiring one-minute messages of motivation, life hacks, and real-world wisdom.',
        'Real-Life Stories Sharing',
      ],
      impact: 'Hundreds of students guided through school and hostel sessions',
      duration: 'Continuous seminar series',
      image: Seminarix,
    },
    {
      id: 'motivminds',
      color: 'orange',
      category: 'Video Content',
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
      impactShort: '60s Rapid Wisdom',
      duration: 'Continuous program',
      image: MotivMinds,
      themeColor: 'teal',
      accentText: 'text-teal-600 dark:text-teal-400',
      accentBg: 'bg-teal-50/80 border-teal-100 text-teal-800 dark:bg-teal-950/40 dark:border-teal-900/40 dark:text-teal-300',
      iconBg: 'bg-teal-50 border border-teal-100 text-teal-600 dark:bg-teal-950/60 dark:border-teal-900/50 dark:text-teal-400',
      bgGradient: 'from-teal-600 to-cyan-500',
      btnBg: 'bg-teal-600 hover:bg-teal-700 text-white shadow-teal-600/20 hover:shadow-teal-600/35 focus:ring-teal-500',
      glowShadow: 'group-hover/card:shadow-teal-500/10'
    },
    {
      id: 'hed',
      name: 'HED Program',
      fullName: 'Happy Eco Diwali',
      icon: Zap,
      category: 'community',
      description: 'The longest-running campaign promoting eco-friendly Diwali celebrations through innovative awareness and green initiatives.',
        'Available on YouTube & Social Media',
      ],
      impact: 'Thousands inspired through one-minute empowerment content',
      duration: 'Continuous program',
      image: MotivMinds,
    },
    {
      id: 'hed',
      color: 'green',
      category: 'Annual Campaign',
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
      impactShort: 'Green Activism',
      duration: 'Annual recurring campaign',
      image: HED,
      themeColor: 'emerald',
      accentText: 'text-emerald-600 dark:text-emerald-400',
      accentBg: 'bg-emerald-50/80 border-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:border-emerald-900/40 dark:text-emerald-300',
      iconBg: 'bg-emerald-50 border border-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:border-emerald-900/50 dark:text-emerald-400',
      bgGradient: 'from-emerald-600 to-teal-500',
      btnBg: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20 hover:shadow-emerald-600/35 focus:ring-emerald-500',
      glowShadow: 'group-hover/card:shadow-emerald-500/10'
    }
  ];

  if (loading) {
    return <LoadingSpinner />;
  }

  const filteredPrograms = programs.filter(
    (program) => activeCategory === 'all' || program.category === activeCategory
  );

  return (
    <div className="pt-16 bg-gray-50/50 min-h-screen">
      {/* Hero Section */}
      <AnimatedCard animation="fadeIn">
        <section className="relative bg-gradient-to-r from-blue-700 to-indigo-850 text-white py-24 overflow-hidden shadow-lg">
          <HeroBackground />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg shadow-black/10 mb-6">
              <Sparkles className="w-4.5 h-4.5 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-semibold tracking-wide text-blue-100 uppercase">PGT Impact Ecosystem</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              Our Flagship Programs
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
              Purposely engineered initiatives empowering students and communities to lead, grow, and inspire sustainable global impact.
  return (
    <div className="pt-16">

      {/* Hero Section */}
      <AnimatedCard animation="fadeIn">
        <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 overflow-hidden">
          <HeroBackground />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-white text-sm font-semibold tracking-wide border border-white/30">
              5 Active Initiatives
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Programs &amp; Initiatives
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              An ecosystem of five purpose-driven programs transforming lives through
              awareness, storytelling, education, and community action.
            </p>
          </div>
        </section>
      </AnimatedCard>

      {/* Quick-Nav — Premium Initiative Navigator */}
      <div className="sticky top-16 z-20">
        {/* Gradient bridge: blends hero bottom into nav bar */}
        <div className="h-6 bg-gradient-to-b from-purple-600/20 via-blue-100/30 to-transparent absolute inset-x-0 -top-6 pointer-events-none" />

        <div className="bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)]">
          {/* Slim gradient rule at very top of bar — echoes hero palette */}
          <div className="h-0.5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2.5">

              {/* Left label */}
              <span className="flex-shrink-0 text-xs font-semibold uppercase tracking-widest text-gray-400 mr-3 hidden sm:block">
                Jump to
              </span>

              {programs.map((program, idx) => {
                const c = colorMap[program.color];
                const isActive = activeSection === program.id;
                const Icon = program.icon;

                return (
                  <button
                    key={program.id}
                    type="button"
                    onClick={() => {
                      setActiveSection(program.id);
                      scrollToSection(program.id);
                    }}
                    className={`
                      group relative flex-shrink-0 flex items-center gap-2
                      px-4 py-2 rounded-lg text-sm font-semibold
                      transition-all duration-300 ease-out
                      ${isActive
                        ? `${c.navActiveBg} ${c.navActiveText} shadow-md scale-[1.03]`
                        : `text-gray-500 hover:text-gray-800 hover:bg-gray-50`
                      }
                    `}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {/* Icon — visible only on active or hover */}
                    <span className={`
                      transition-all duration-300
                      ${isActive ? 'opacity-100 w-4' : 'opacity-0 w-0 overflow-hidden group-hover:opacity-60 group-hover:w-4'}
                    `}>
                      <Icon className="h-4 w-4 flex-shrink-0" />
                    </span>

                    {program.name}

                    {/* Active underline accent bar */}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-white/40" />
                    )}

                    {/* Sequence number badge — subtle, only on inactive */}
                    {!isActive && (
                      <span className="ml-0.5 text-[10px] font-bold text-gray-300 group-hover:text-gray-400 transition-colors">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    )}
                  </button>
                );
              })}

              {/* Progress dots — visual indicator of position */}
              <div className="flex-1 hidden sm:flex items-center justify-end gap-1.5 min-w-0 pl-4">
                {programs.map((program) => {
                  const c = colorMap[program.color];
                  const isActive = activeSection === program.id;
                  return (
                    <button
                      key={`dot-${program.id}`}
                      type="button"
                      onClick={() => {
                        setActiveSection(program.id);
                        scrollToSection(program.id);
                      }}
                      aria-label={`Go to ${program.name}`}
                      className={`
                        rounded-full transition-all duration-300
                        ${isActive
                          ? `w-5 h-2 ${c.navAccentBar}`
                          : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'
                        }
                      `}
                    />
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Programs Hub Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Glassmorphic Overview Hub Card */}
          <AnimatedCard animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transformative Programs for Every Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From daily digital inspiration to annual eco-campaigns, each initiative
                is designed to create measurable, lasting impact.
              </p>
            </div>
          </AnimatedCard>

          <div className="space-y-20">
            {programs.map((program, index) => {
              const colors = colorMap[program.color];
              const Icon = program.icon;
              const isEven = index % 2 === 0;

              return (
                <AnimatedCard key={program.id} animation="slideUp" delay={index * 150}>
                  <div
                    id={program.id}
                    className={`
                      flex flex-col gap-10 items-center scroll-mt-32
                      ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                    `}
                  >

                    {/* Image Block */}
                    <div className="flex-1 w-full">
                      <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl group">
                        <img
                          src={program.image}
                          alt={`${program.name} — ${program.fullName}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Color-coded gradient overlay at image bottom */}
                        <div
                          className={`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t ${colors.imageOverlay} to-transparent`}
                        />
                        {/* Category badge pinned top-left on the image */}
                        <span
                          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${colors.badge}`}
                        >
                          {program.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Block */}
                    <div className="flex-1 space-y-5">

                      {/* Header: icon + name + full name */}
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${colors.iconBg}`}>
                          <Icon className={`h-7 w-7 ${colors.iconText}`} />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                            {program.name}
                          </h3>
                          <p className="text-base text-gray-500 font-medium mt-0.5">
                            {program.fullName}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        {program.description}
                      </p>

                      {/* Feature pill chips */}
                      <div className="flex flex-wrap gap-2">
                        {program.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200 font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Impact chip + Duration badge */}
                      <div className="flex flex-wrap gap-3 items-center pt-1">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium ${colors.impactChip}`}>
                          <TrendingUp className="h-4 w-4 flex-shrink-0" />
                          <span>{program.impact}</span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-gray-100 text-gray-600 text-sm rounded-lg border border-gray-200">
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {program.duration}
                        </span>
                      </div>

                      {/* CTA — Link styled as button; no wrapping <button> element */}
                      <Link
                        to={`/programs/${program.id}`}
                        aria-label={`Learn more about ${program.name} — ${program.fullName}`}
                        className={`
                          inline-flex items-center gap-2 px-7 py-3 rounded-lg
                          font-semibold text-white transition-all duration-200
                          shadow-md hover:shadow-lg hover:-translate-y-0.5
                          ${colors.button}
                        `}
                      >
                        Learn More
                        <ArrowRight className="h-5 w-5" />
                      </Link>

                    </div>
                  </div>
                </AnimatedCard>
              );
            })}
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

              <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
                  <span className="text-xs font-black tracking-wider uppercase text-white/95">PGT Ecosystem</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                  Ready to Join Our Impact Ecosystem?
                </h2>
                
                <p className="text-base md:text-lg text-white/85 max-w-2xl mx-auto font-light leading-relaxed">
                  Take the next step in your leadership and awareness journey. PGT Global Network offers mentorship, action platforms, and real-world tools designed to help you excel.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <a
                    href="/contact"
                    className="group/btn relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-650 text-white font-extrabold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 text-sm"
                  >
                    <span>Join Now</span>
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://topmate.io/pranav_gujar/1355631?utm_source=public_profile&utm_campaign=pranav_gujar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/25 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 text-sm"
                  >
                    Book a Mentorship Session
                  </a>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
};
export default Programs;