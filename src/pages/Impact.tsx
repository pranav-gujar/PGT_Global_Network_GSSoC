import React from 'react';
import { Users, BookOpen, Hourglass, Star, Handshake, Smile } from 'lucide-react';
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
      <AnimatedCard animation="fadeIn">
  <section className="relative py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white overflow-hidden">
    <Background />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <AnimatedCard animation="fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our 2030 Vision
        </h2>
      </AnimatedCard>
      <p className="text-xl mb-12 max-w-3xl mx-auto text-green-100">
        Building on our success, we're committed to expanding our impact and reaching even more lives
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <AnimatedCard animation="slideUp" delay={0}>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">
              <CountUpNumber end={100} suffix="K+" duration={3000} />
            </div>
            <div className="text-green-100 text-lg">Lives to Transform</div>
          </div>
        </AnimatedCard>
        <AnimatedCard animation="slideUp" delay={200}>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">
              <CountUpNumber end={100} suffix="+" duration={3000} />
            </div>
            <div className="text-green-100 text-lg">Countries to Reach</div>
          </div>
        </AnimatedCard>
        <AnimatedCard animation="slideUp" delay={400}>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">
              <CountUpNumber end={1} suffix="M+" duration={3000} />
            </div>
            <div className="text-green-100 text-lg">Indirect Beneficiaries</div>
          </div>
        </AnimatedCard>
        <AnimatedCard animation="slideUp" delay={600}>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">
              <CountUpNumber end={50} suffix="+" duration={3000} />
            </div>
            <div className="text-green-100 text-lg">New Programs</div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  </section>
</AnimatedCard>

    </div>
  );
};

export default Impact;