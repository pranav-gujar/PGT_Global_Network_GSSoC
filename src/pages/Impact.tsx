import React from 'react';
import { Users, BookOpen, Hourglass, Star, Handshake, Smile, Sparkles, ArrowRight } from 'lucide-react';
import CountUpNumber from '../components/CountUpNumber';
import AnimatedCard from '../components/AnimatedCard';
import HeroBackground from '../components/HeroBackground';
import Background from '../components/Background';

import LoadingSpinner from '../components/LoadingSpinner'; 
import { usePageLoading } from '../hooks/usePageLoading';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';


import Shraddha_Sherekar from '../assets/testimonials/ss.jpg';
import Sharayu_Dole from '../assets/testimonials/sd.jpg';
import Grishma_Chowdary from '../assets/testimonials/gc.jpg';
import Ashish_Kamble from '../assets/testimonials/ak.jpg';
import Vaibhav_Pandit from '../assets/testimonials/vp.png';



const Impact = () => {
    const loading = usePageLoading();
  
  const impactStats = [
    {
      icon: Users,
      number: 10000,
      suffix: '+',
      label: 'Lives Reached',
      description: 'Students and individuals engaged through our programs, seminars, and campaigns.',
      color: 'text-blue-600'
    },
    {
      icon: BookOpen,
      number: 8,
      suffix: '+',
      label: 'Programs & Campaigns',
      description: 'Flagship initiatives including D3, Seminarix, MotivMinds, Voices of Ability, and HED.',
      color: 'text-green-600'
    },
    {
      icon: Hourglass,
      number: 6,
      suffix: '+',
      label: 'Years of Impact',
      description: 'Empowering students and communities since our founding year.',
      color: 'text-purple-600'
    },
    {
      icon: Star,
      number: 200,
      suffix: '+',
      label: 'Success Stories',
      description: 'Participants who shared real transformations and positive feedback.',
      color: 'text-orange-600'
    },
    {
      icon: Handshake,
      number: 50,
      suffix: '+',
      label: 'Volunteer Leaders',
      description: 'Dedicated changemakers who contributed as volunteers, interns, and core team members.',
      color: 'text-pink-600'
    },
    {
      icon: Smile,
      number: 4.9,
      suffix: '/5',
      decimals: 1,
      label: 'Satisfaction Score',
      description: 'Average rating from students and participants across our initiatives.',
      color: 'text-yellow-600'
    }
  ];

  const testimonials = [
    {
      name: 'Shraddha Sherekar',
      role: 'D3 Program Graduate',
      country: 'Canada',
      image: Shraddha_Sherekar,
      quote: 'PGT Global Network showed me that leadership isn’t about titles—it’s about responsibility. Through their programs, I gained confidence, clarity, and a sense of purpose that I carry with me every day.',
      impact: 'Launched successful online business'
    },
    {
      name: 'Ashish Kamble',
      role: 'MotivMinds Participant',
      country: 'Mexico',
      image: Ashish_Kamble,
      quote: 'The initiatives of PGT are unlike anything I’ve experienced before. They combine real-world learning with inspiration, and the result is transformation you can actually feel in your life.',
      impact: 'Became a certified wellness coach'
    },
    {
      name: 'Sharayu Dole',
      role: 'HED Program Scholar',
      country: 'Nigeria',
      image: Sharayu_Dole,
      quote: 'Joining PGT’s programs helped me discover my strengths and channel them into meaningful action. I didn’t just learn—I grew, connected, and contributed to something bigger than myself.',
      impact: 'Earned Masters degree with distinction'
    },
    {
      name: 'Vaibhav Pandit',
      role: 'Seminarix Workshop Leader',
      country: 'Australia',
      image: Vaibhav_Pandit,
      quote: 'What makes PGT special is its authenticity. Every initiative is built with heart, vision, and commitment. It’s not just about creating leaders; it’s about creating change-makers.',
      impact: 'Expanded professional network by 300%'
    },
    {
      name: 'Grishma Chowdary',
      role: 'Multi-Program Participant',
      country: 'Egypt',
      image: Grishma_Chowdary,
      quote: 'I’ve partnered with many organizations, but the energy and professionalism of PGT Global Network is unmatched. They’re building a movement, not just running programs.',
      impact: 'Founded nonprofit organization'
    }
  ];

  const programImpact = [
    {
      program: 'D3 Program',
      participants: '2,500+',
      successStories: 'Started 150+ businesses',
      globalReach: '25 countries',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      program: 'VoA Initiative',
      participants: '1,800+',
      successStories: 'Led 300+ community projects',
      globalReach: '20 countries',
      color: 'bg-green-100 text-green-800'
    },
    {
      program: 'Seminarix',
      participants: '5,000+',
      successStories: '90% career advancement',
      globalReach: '35 countries',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      program: 'MotivMinds',
      participants: '3,200+',
      successStories: '85% improved wellbeing',
      globalReach: '30 countries',
      color: 'bg-orange-100 text-orange-800'
    },
    {
      program: 'HED Program',
      participants: '1,200+',
      successStories: '95% graduation rate',
      globalReach: '15 countries',
      color: 'bg-pink-100 text-pink-800'
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
        Our Impact
      </h1>
      <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
        Measuring success through the lives we've transformed and the communities we've empowered
      </p>
    </div>
  </section>
</AnimatedCard>


      {/* Impact Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Impact by Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six years of dedication translated into measurable, meaningful change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 150}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6 ${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  <CountUpNumber 
                    end={stat.number} 
                    suffix={stat.suffix || ''} 
                    decimals={stat.decimals || 0}
                    duration={2500}
                  />
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-3">{stat.label}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
              </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Program Impact */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Program-Specific Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each program creates unique value and measurable outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programImpact.map((program, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 200}>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${program.color}`}>
                  {program.program}
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Participants</span>
                    <span className="font-semibold text-gray-900">{program.participants}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Success Stories</span>
                    <span className="font-semibold text-gray-900">{program.successStories}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Global Reach</span>
                    <span className="font-semibold text-gray-900">{program.globalReach}</span>
                  </div>
                </div>
              </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Voices of Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real people whose lives have been transformed through our programs
            </p>
          </div>

          <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  pagination={{ clickable: true }}
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  loop={true}
>
  {testimonials.map((testimonial, index) => (
    <SwiperSlide key={index}>
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
            {/* <p className="text-gray-600 text-sm">{testimonial.role}</p> */}
            {/* <p className="text-gray-500 text-sm">{testimonial.country}</p> */}
          </div>
        </div>

        <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
          "{testimonial.quote}"
        </blockquote>

        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-blue-800 font-semibold text-sm">
            {/* Impact: {testimonial.impact} */}
          </p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

        </div>
      </section>

      {/* Future Goals */}
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

              <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
                  <span className="text-xs font-black tracking-wider uppercase text-white/95">PGT 2030 Vision</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                  Our 2030 Vision
                </h2>
                
                <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
                  Building on our success, we're committed to expanding our impact and reaching even more lives worldwide.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 text-center">
                  <div className="bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-2xl">
                    <div className="text-3xl font-extrabold text-white mb-1">
                      <CountUpNumber end={100} suffix="K+" duration={3000} />
                    </div>
                    <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Lives to Transform</p>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-2xl">
                    <div className="text-3xl font-extrabold text-white mb-1">
                      <CountUpNumber end={100} suffix="+" duration={3000} />
                    </div>
                    <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Countries to Reach</p>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-2xl">
                    <div className="text-3xl font-extrabold text-white mb-1">
                      <CountUpNumber end={1} suffix="M+" duration={3000} />
                    </div>
                    <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Indirect Beneficiaries</p>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-2xl">
                    <div className="text-3xl font-extrabold text-white mb-1">
                      <CountUpNumber end={50} suffix="+" duration={3000} />
                    </div>
                    <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider">New Programs</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <a
                    href="/contact"
                    className="group/btn relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-650 text-white font-extrabold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 text-sm"
                  >
                    <span>Partner With Us</span>
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/programs"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/25 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 text-sm"
                  >
                    Explore Programs
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

export default Impact;