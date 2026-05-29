import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from '../components/TransitionLink';
import { ArrowLeft, ArrowRight, Users, Clock, Globe, Target, CheckCircle, Star, Sparkles, Check } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';
import CountUpNumber from '../components/CountUpNumber';

import LoadingSpinner from '../components/LoadingSpinner'; 
import { usePageLoading } from '../hooks/usePageLoading';

import Seminarix from '../assets/programs/Seminarix.png';
import D3 from '../assets/programs/D3.png';
import VoA from '../assets/programs/VoA.png';
import HED from '../assets/programs/HED.png';
import MotivMinds from '../assets/programs/MotiVMinds.png';

const ProgramDetail = () => {
  const loading = usePageLoading();
  const { programId } = useParams();

  const programData: { [key: string]: any } = {
    'd3': {
      name: 'D3 Program',
      fullName: 'Daily Discovery Digest',
      description: 'A continuous daily awareness initiative delivering knowledge, inspiration, and important milestones through social media stories.',
      image: D3,
      duration: 'Continuous',
      participants: '4,000+',
      difference: 'Brings learning into everyday student life',
      successRate: '95%',
      overview: 'D3 is our flagship daily inspiration program that helps students “Discover the Extraordinary Every Day.” Through Instagram and Facebook stories, it highlights important global and national days, historic milestones, and inspiring life stories.',
      objectives: [
        'Promote daily awareness among students',
        'Encourage discovery of history, science, and culture',
        'Inspire through stories of great personalities',
        'Build habit of lifelong learning',
        'Make social media a tool for growth'
      ],
      curriculum: [
        {
          module: 'Daily Themes',
          duration: 'Ongoing',
          topics: ['National & International Days', 'Historical Events', 'Great Personalities', 'Real-Life Stories']
        }
      ],
      testimonials: [
        {
          name: 'Aarohi Patil',
          role: 'Student',
          image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400',
          quote: 'D3 stories give me daily knowledge and motivation right on Instagram.'
        },
        {
          name: 'Rohit Sharma',
          role: 'College Student',
          image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
          quote: 'It’s amazing how much I’ve learned about history and leaders through D3.'
        }
      ],
      requirements: [
        'Interest in learning new things daily',
        'Access to Instagram or Facebook',
        'Openness to inspiration'
      ],
      outcomes: [
        'Improved general awareness',
        'Daily dose of inspiration',
        'Positive use of social media',
        'Connection with global knowledge'
      ],
      themeColor: 'indigo',
      bgGradient: 'from-indigo-750 to-blue-600',
      textColor: 'text-indigo-650 dark:text-indigo-400',
      accentBg: 'bg-indigo-50 border-indigo-100 text-indigo-800 dark:bg-indigo-950/40 dark:border-indigo-900/40 dark:text-indigo-300',
      iconBg: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400',
      bulletBg: 'bg-indigo-600',
      ctaBg: 'from-indigo-750 to-blue-700',
      ctaSecondaryHover: 'hover:text-indigo-600 hover:bg-white border-white/80 hover:border-white'
    },

    'voa': {
      name: 'VoA Initiative',
      fullName: 'Voices of Ability',
      description: 'A storytelling series that showcases individuals who turned personal challenges into change.',
      image: VoA,
      duration: 'Continuous series',
      participants: '6,500+',
      difference: 'Transforms challenges into inspiring stories of resilience',
      successRate: '93%',
      overview: 'VoA highlights true ability of the human spirit through real-life recorded journeys. Guests share their stories, which are then edited and published as episodes to build empathy, awareness, and empowerment.',
      objectives: [
        'Amplify voices of resilience',
        'Challenge stereotypes about disability and struggles',
        'Inspire youth through lived experiences',
        'Build empathy and awareness in society',
        'Create a library of change-making stories'
      ],
      curriculum: [
        {
          module: 'Storytelling',
          duration: 'Ongoing',
          topics: ['Life Journeys', 'Overcoming Struggles', 'Personal Growth', 'Social Change']
        }
      ],
      testimonials: [
        {
          name: 'Ankita More',
          role: 'VoA Guest',
          image: 'https://images.pexels.com/photos/3184450/pexels-photo-3184450.jpeg?auto=compress&cs=tinysrgb&w=400',
          quote: 'Sharing my journey on VoA made me feel empowered and heard.'
        },
        {
          name: 'Kunal Singh',
          role: 'Viewer',
          image: 'https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg?auto=compress&cs=tinysrgb&w=400',
          quote: 'Each episode gave me goosebumps and deep respect for real fighters.'
        }
      ],
      requirements: [
        'Willingness to share life story',
        'Commitment to inspire others',
        'Basic recording facility (audio/video)'
      ],
      outcomes: [
        'Increased empathy in society',
        'Platform for unheard voices',
        'Awareness about challenges and resilience',
        'Motivation for students and youth'
      ],
      themeColor: 'amber',
      bgGradient: 'from-amber-700 to-rose-600',
      textColor: 'text-amber-600 dark:text-amber-400',
      accentBg: 'bg-amber-50 border-amber-100 text-amber-800 dark:bg-amber-950/40 dark:border-amber-900/40 dark:text-amber-300',
      iconBg: 'bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400',
      bulletBg: 'bg-amber-600',
      ctaBg: 'from-amber-750 to-rose-700',
      ctaSecondaryHover: 'hover:text-amber-600 hover:bg-white border-white/80 hover:border-white'
    },

    'seminarix': {
      name: 'Seminarix',
      fullName: 'Seminar Series',
      description: 'Educational and motivational seminar series for 10th and 12th students to excel in academics and mental wellness.',
      image: Seminarix,
      duration: 'On-ground sessions',
      participants: '1,000+',
      difference: 'Blends academics with mental wellness strategies',
      successRate: '97%',
      overview: 'Seminarix helps board exam students with practical study strategies, motivation, and mental health tools. Conducted in schools and hostels, it empowers students to balance academics with wellness.',
      objectives: [
        'Guide students for board exams',
        'Provide practical study techniques',
        'Address exam stress and anxiety',
        'Motivate with real-life experiences',
        'Promote balanced academic and mental growth'
      ],
      curriculum: [
        {
          module: 'Seminar Sessions',
          duration: '2 hours each',
          topics: ['Study Strategies', 'Time Management', 'Exam Mindset', 'Mental Wellness']
        }
      ],
      testimonials: [
        {
          name: 'Ramesh Kumar',
          role: '10th Student',
          image: 'https://images.pexels.com/photos/3184321/pexels-photo-3184321.jpeg?auto=compress&cs=tinysrgb&w=400',
          quote: 'Seminarix gave me simple tricks that helped me top my exams.'
        },
        {
          name: 'School Teacher',
          role: 'Educator',
          image: 'https://images.pexels.com/photos/3184371/pexels-photo-3184371.jpeg?auto=compress&cs=tinysrgb&w=400',
          quote: 'Students connected deeply with the real-life stories shared in Seminarix.'
        }
      ],
      requirements: [
        'Participation from schools or hostels',
        'Interest in academic improvement',
        'Openness to motivation and wellness practices'
      ],
      outcomes: [
        'Better academic performance',
        'Reduced exam stress',
        'Practical strategies for students',
        'Motivation and confidence boost'
      ],
      themeColor: 'violet',
      bgGradient: 'from-violet-750 to-purple-600',
      textColor: 'text-violet-600 dark:text-violet-400',
      accentBg: 'bg-violet-50 border-violet-100 text-violet-800 dark:bg-violet-950/40 dark:border-violet-900/40 dark:text-violet-300',
      iconBg: 'bg-violet-50 text-violet-600 dark:bg-violet-950/60 dark:text-violet-400',
      bulletBg: 'bg-violet-600',
      ctaBg: 'from-violet-750 to-purple-700',
      ctaSecondaryHover: 'hover:text-violet-600 hover:bg-white border-white/80 hover:border-white'
    },

    'motivminds': {
      name: 'MotivMinds',
      fullName: 'Motivational Minds',
      description: 'Weekly empowerment video series delivering short, inspiring one-minute wisdom clips.',
      image: MotivMinds,
      duration: 'Weekly series',
      participants: '3,000+',
      difference: 'Delivers powerful lessons in just one minute',
      successRate: '94%',
      overview: 'MotivMinds provides students with quick, impactful motivation and real-world wisdom through 60-second videos shared on YouTube, Instagram, and Facebook every week.',
      objectives: [
        'Inspire students with weekly motivation',
        'Share real-world wisdom in short format',
        'Encourage confidence and resilience',
        'Help students unlock inner strength',
        'Build habit of positive thinking'
      ],
      curriculum: [
        {
          module: 'Weekly Videos',
          duration: '1 min each',
          topics: ['Motivation', 'Life Lessons', 'Resilience', 'Growth Mindset']
        }
      ],
      testimonials: [
        {
          name: 'Sneha Joshi',
          role: 'College Student',
          image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=400',
          quote: 'MotivMinds is my go-to for a quick dose of positivity.'
        },
        {
          name: 'Vikram Deshmukh',
          role: 'Young Professional',
          image: 'https://images.pexels.com/photos/3184445/pexels-photo-3184445.jpeg?auto=compress&cs=tinysrgb&w=400',
          quote: 'One-minute videos, but they leave an impact for the whole week.'
        }
      ],
      requirements: [
        'Willingness to spend one minute weekly',
        'Interest in motivation and growth',
        'Access to social media platforms'
      ],
      outcomes: [
        'Boost in self-confidence',
        'Inspiration for daily life',
        'Positive mindset building',
        'Weekly motivation habit'
      ],
      themeColor: 'teal',
      bgGradient: 'from-teal-700 to-cyan-600',
      textColor: 'text-teal-650 dark:text-teal-400',
      accentBg: 'bg-teal-50 border-teal-100 text-teal-800 dark:bg-teal-950/40 dark:border-teal-900/40 dark:text-teal-300',
      iconBg: 'bg-teal-50 text-teal-600 dark:bg-teal-950/60 dark:text-teal-400',
      bulletBg: 'bg-teal-600',
      ctaBg: 'from-teal-750 to-cyan-700',
      ctaSecondaryHover: 'hover:text-teal-600 hover:bg-white border-white/80 hover:border-white'
    },

    'hed': {
      name: 'HED Program',
      fullName: 'Happy Eco Diwali',
      description: 'An annual campaign encouraging eco-friendly Diwali celebrations and environmental responsibility.',
      image: HED,
      duration: 'Annual campaign',
      participants: '2,200+',
      difference: 'Promotes eco-friendly traditions during festivals',
      successRate: '97%',
      overview: 'HED is the longest-running initiative of PGT Global Network. Every Diwali, it spreads awareness on celebrating with eco-conscious practices like no-crackers, tree plantation, and sustainable celebrations.',
      objectives: [
        'Promote eco-friendly Diwali practices',
        'Reduce pollution during festivals',
        'Encourage youth to adopt sustainability',
        'Organize contests and awareness drives',
        'Celebrate tradition with responsibility'
      ],
      curriculum: [
        {
          module: 'Annual Campaign',
          duration: 'Festival Season',
          topics: ['Eco-Friendly Awareness', 'Tree Plantation', 'Innovation Contest', 'Community Celebration']
        }
      ],
      testimonials: [
        {
          name: 'Neha Kulkarni',
          role: 'School Student',
          image: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=400',
          quote: 'HED taught us how to enjoy Diwali without harming nature.'
        },
        {
          name: 'College Volunteer',
          role: 'Volunteer',
          image: 'https://images.pexels.com/photos/3184356/pexels-photo-3184356.jpeg?auto=compress&cs=tinysrgb&w=400',
          quote: 'Tree plantation and contests made this Diwali truly meaningful.'
        }
      ],
      requirements: [
        'Interest in celebrating eco-friendly festivals',
        'Participation in campaigns or contests',
        'Commitment to sustainability'
      ],
      outcomes: [
        'Eco-conscious festival celebration',
        'Youth engagement in sustainability',
        'Reduced cracker pollution',
        'Cultural celebration with responsibility'
      ],
      themeColor: 'emerald',
      bgGradient: 'from-emerald-700 to-teal-600',
      textColor: 'text-emerald-650 dark:text-emerald-400',
      accentBg: 'bg-emerald-50 border-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:border-emerald-900/40 dark:text-emerald-300',
      iconBg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400',
      bulletBg: 'bg-emerald-600',
      ctaBg: 'from-emerald-750 to-teal-700',
      ctaSecondaryHover: 'hover:text-emerald-600 hover:bg-white border-white/80 hover:border-white'
    }
  };

  const program = programData[programId || 'd3'];

  if (!program) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Program Not Found</h1>
          <Link to="/programs" className="text-blue-650 hover:text-blue-800 font-bold">
            ← Back to Programs
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      <AnimatedCard animation="fadeIn">
        <section className={`relative h-[28rem] bg-gradient-to-r ${program.bgGradient} flex items-center overflow-hidden`}>
          <div className="absolute inset-0 bg-gray-950/40 mix-blend-multiply"></div>
          {program.image && (
            <img
              src={program.image}
              alt={program.name}
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4 z-10">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight drop-shadow-sm">
                {program.name}
              </h1>
              <p className="text-lg md:text-2xl text-white/90 font-semibold mb-6 tracking-wide uppercase">
                {program.fullName}
              </p>
              <div className="h-1.5 w-20 bg-white rounded-full mx-auto mb-8 shadow-sm" />
              <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl mx-auto font-light leading-relaxed">
                {program.description}
              </p>
            </div>
          </div>
        </section>
      </AnimatedCard>

      {/* Back Button */}
      <section className="py-8 bg-white border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/programs"
            className="inline-flex items-center text-blue-655 hover:text-blue-800 font-extrabold text-sm tracking-wide uppercase transition-colors"
          >
            <ArrowLeft className="h-4.5 w-4.5 mr-2" />
            Back to Programs
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            {/* Duration */}
            <AnimatedCard animation="slideUp" delay={0}>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-150">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm ${program.iconBg}`}>
                  <Clock className="h-7 w-7" />
                </div>
                <div className="text-xl font-extrabold text-gray-900 mb-1">
                  {program.duration}
                </div>
                <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">Duration</div>
              </div>
            </AnimatedCard>

            {/* Participants */}
            <AnimatedCard animation="slideUp" delay={200}>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-150">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm ${program.iconBg}`}>
                  <Users className="h-7 w-7" />
                </div>
                <div className="text-xl font-extrabold text-gray-900 mb-1">
                  {program.participants}
                </div>
                <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">Lives Impacted</div>
              </div>
            </AnimatedCard>

            {/* Success Rate */}
            <AnimatedCard animation="slideUp" delay={400}>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-150">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm ${program.iconBg}`}>
                  <Target className="h-7 w-7" />
                </div>
                <div className="text-xl font-extrabold text-gray-900 mb-1">
                  {program.successRate}
                </div>
                <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">Success Indicator</div>
              </div>
            </AnimatedCard>

          </div>
        </div>
      </section>

      {/* Program Overview & Requirements */}
      <section className="py-20 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedCard animation="slideLeft">
              <div className="bg-white p-8 lg:p-10 rounded-3xl border border-gray-200 shadow-md">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">Program Overview</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {program.overview}
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className={`w-5 h-5 ${program.textColor}`} />
                  Learning Objectives
                </h3>
                <ul className="space-y-4">
                  {program.objectives.map((objective: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3 group">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${program.iconBg}`}>
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-gray-700 text-base leading-relaxed">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>

            <AnimatedCard animation="slideRight">
              <div className="bg-white p-8 lg:p-10 rounded-3xl border border-gray-200 shadow-md">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">Requirements</h2>
                <ul className="space-y-4 mb-10">
                  {program.requirements.map((requirement: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className={`w-2.5 h-2.5 rounded-full mt-2.5 flex-shrink-0 ${program.bulletBg}`}></div>
                      <span className="text-gray-700 text-base leading-relaxed">{requirement}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  Expected Outcomes
                </h3>
                <ul className="space-y-4">
                  {program.outcomes.map((outcome: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0 mt-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      </div>
                      <span className="text-gray-700 text-base leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Core Curriculum</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">Comprehensive, curated modules structurally engineered for maximum knowledge retention and growth.</p>
            </div>
          </AnimatedCard>

          <div className="space-y-6 max-w-5xl mx-auto">
            {program.curriculum.map((module: any, index: number) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 150}>
                <div className="bg-gray-50 border border-gray-150 rounded-2xl p-6 lg:p-8 hover:border-gray-200 transition-all duration-300 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5 border-b border-gray-200/50 pb-4">
                    <h3 className="text-xl font-extrabold text-gray-900">{module.module}</h3>
                    <span className={`font-bold text-sm tracking-wide px-3.5 py-1 rounded-full ${program.accentBg}`}>{module.duration}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {module.topics.map((topic: string, topicIndex: number) => (
                      <div key={topicIndex} className="bg-white border border-gray-150 px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors shadow-sm">
                        {topic}
                      </div>
                    ))}
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
                  <span className="text-xs font-black tracking-wider uppercase text-white/95">Take Action Today</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                  Ready to Transform Your Future?
                </h2>
                
                <p className="text-base md:text-lg text-white/85 max-w-2xl mx-auto font-light leading-relaxed font-sans">
                  Join thousands of students and individuals who have experienced growth and social leadership through the <span className="font-semibold text-white">{program.name}</span>.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  {/* Apply Button */}
                  <a
                    href="/contact"
                    className={`group/btn relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r ${program.bgGradient} text-white font-extrabold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 text-sm`}
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>

                  {/* Free Session Button */}
                  <a
                    href="https://topmate.io/pranav_gujar/1355631?utm_source=public_profile&utm_campaign=pranav_gujar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/25 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 text-sm"
                  >
                    Schedule Free Session
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

export default ProgramDetail;