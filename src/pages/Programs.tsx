import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Users, Target, Zap, Brain, GraduationCap, Award, Clock, Sparkles, Check, Filter } from 'lucide-react';
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

  const programs = [
    {
      id: 'd3',
      name: 'D3 Program',
      fullName: 'Daily Discovery Digest',
      icon: Target,
      category: 'learning',
      description: 'A flagship daily inspiration series delivering knowledge, awareness, and impactful stories to students through visual storytelling.',
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
            </p>
          </div>
        </section>
      </AnimatedCard>

      {/* Programs Hub Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Glassmorphic Overview Hub Card */}
          <AnimatedCard animation="slideUp">
            <div className="bg-white/80 border border-gray-200/50 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-xl shadow-gray-150/10 text-center mb-16 max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Transformative Journeys Built on Excellence
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We believe in structured, purposeful programs designed to target real challenges. Explore our five unique initiatives categorized across our core values of awareness, learning, and environmental preservation.
              </p>
              
              {/* Category Grid Indicator */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 text-left">
                <div className="p-5 bg-indigo-50/30 border border-indigo-100/50 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center mb-3">
                    <Target className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h4 className="font-bold text-gray-900">Daily Learning</h4>
                  <p className="text-xs text-gray-500 mt-1">High-frequency awareness digests and short wisdom clips (D3, MotivMinds).</p>
                </div>
                <div className="p-5 bg-amber-50/30 border border-amber-100/50 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-3">
                    <Users className="w-5 h-5 text-amber-600" />
                  </div>
                  <h4 className="font-bold text-gray-900">Community Impact</h4>
                  <p className="text-xs text-gray-500 mt-1">Resilience campaigns, eco-festivals, and empathy platforms (VoA, HED).</p>
                </div>
                <div className="p-5 bg-violet-50/30 border border-violet-100/50 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center mb-3">
                    <GraduationCap className="w-5 h-5 text-violet-600" />
                  </div>
                  <h4 className="font-bold text-gray-900">Growth & Wellness</h4>
                  <p className="text-xs text-gray-500 mt-1">On-ground board exam workshops, hostel wellness, and strategies (Seminarix).</p>
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Interactive Navigation / Filters */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-2 mb-6 text-gray-500 text-sm font-semibold tracking-wider uppercase">
              <Filter className="w-4 h-4" />
              <span>Browse Ecosystem</span>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-3 max-w-4xl mx-auto p-2 bg-white border border-gray-200/80 rounded-2xl shadow-md">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 scale-[1.03]'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  aria-label={`Filter by ${category.name}`}
                >
                  <span>{category.name}</span>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Initiative Cards Grid (Alternating split) */}
          <div className="space-y-24">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program, index) => (
                <AnimatedCard key={program.id} animation="slideUp" delay={index * 100}>
                  <div
                    id={program.id}
                    className={`group/card relative flex flex-col ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } gap-12 lg:gap-16 items-center bg-white rounded-3xl p-6 lg:p-10 border border-gray-200/60 shadow-xl shadow-gray-200/15 hover:shadow-2xl hover:shadow-gray-200/30 hover:border-gray-300 transition-all duration-500`}
                  >
                    {/* Floating Glow Spot */}
                    <div className={`absolute -inset-[1px] bg-gradient-to-r ${program.bgGradient} rounded-3xl opacity-0 group-hover/card:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />

                    {/* Image Column */}
                    <div className="relative flex-1 w-full overflow-hidden rounded-2xl group-hover/card:scale-[1.01] transition-transform duration-500">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 border border-gray-200/80 shadow-md">
                        <img
                          src={program.image}
                          alt={program.name}
                          className="w-full h-full object-cover transform group-hover/card:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                        
                        {/* Floating Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-md border backdrop-blur-md ${program.accentBg}`}>
                            {categories.find(c => c.id === program.category)?.name}
                          </span>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <span className="bg-black/60 text-white backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg border border-white/10">
                            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                            {program.impactShort}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 space-y-6 w-full">
                      {/* Header */}
                      <div className="flex items-center space-x-5">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover/card:scale-110 duration-300 ${program.iconBg}`}>
                          <program.icon className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                            {program.name}
                          </h3>
                          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mt-0.5">
                            {program.fullName}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-lg leading-relaxed font-normal">
                        {program.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 pt-2">
                        {program.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-2.5 group/item">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors group-hover/card:scale-105 ${program.iconBg}`}>
                              <Check className="w-3 h-3" />
                            </div>
                            <span className="text-gray-700 text-sm font-medium leading-tight group-hover/item:text-gray-900 transition-colors">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Logistics Info Box */}
                      <div className={`grid grid-cols-2 gap-4 p-5 rounded-2xl border transition-all duration-300 ${program.accentBg}`}>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-1.5 text-gray-500">
                            <Award className="w-4 h-4 flex-shrink-0" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Impact Scale</span>
                          </div>
                          <p className="text-gray-950 text-sm font-extrabold leading-snug">
                            {program.impact}
                          </p>
                        </div>
                        <div className="space-y-1 border-l border-gray-300/40 pl-4">
                          <div className="flex items-center space-x-1.5 text-gray-500">
                            <Clock className="w-4 h-4 flex-shrink-0" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Duration</span>
                          </div>
                          <p className="text-gray-950 text-sm font-extrabold leading-snug">
                            {program.duration}
                          </p>
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-wrap items-center gap-4 pt-2">
                        <Link
                          to={`/programs/${program.id}`}
                          className={`inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold transition-all duration-300 ${program.btnBg}`}
                          aria-label={`Learn more about ${program.name}`}
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5 transform group-hover/card:translate-x-1 transition-transform" />
                        </Link>
                        
                        <a
                          href="/contact"
                          className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-150/40 border border-gray-200 hover:border-gray-300 transition-all duration-300 text-sm bg-white"
                          aria-label={`Get involved in ${program.name}`}
                        >
                          Get Involved
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 max-w-xl mx-auto shadow-md">
                <p className="text-gray-500 text-lg font-medium">No initiatives found in this category.</p>
                <button
                  onClick={() => setActiveCategory('all')}
                  className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-colors"
                >
                  Show All Initiatives
                </button>
              </div>
            )}
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