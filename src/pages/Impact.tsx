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
      quote: 'PGT Global Network showed me that leadership isn\'t about titles—it\'s about responsibility. Through their programs, I gained confidence, clarity, and a sense of purpose that I carry with me every day.',
      impact: 'Launched successful online business'
    },
    {
      name: 'Ashish Kamble',
      role: 'MotivMinds Participant',
      country: 'Mexico',
      image: Ashish_Kamble,
      quote: 'The initiatives of PGT are unlike anything I\'ve experienced before. They combine real-world learning with inspiration, and the result is transformation you can actually feel in your life.',
      impact: 'Became a certified wellness coach'
    },
    {
      name: 'Sharayu Dole',
      role: 'HED Program Scholar',
      country: 'Nigeria',
      image: Sharayu_Dole,
      quote: 'Joining PGT\'s programs helped me discover my strengths and channel them into meaningful action. I didn\'t just learn—I grew, connected, and contributed to something bigger than myself.',
      impact: 'Earned Masters degree with distinction'
    },
    {
      name: 'Vaibhav Pandit',
      role: 'Seminarix Workshop Leader',
      country: 'Australia',
      image: Vaibhav_Pandit,
      quote: 'What makes PGT special is its authenticity. Every initiative is built with heart, vision, and commitment. It\'s not just about creating leaders; it\'s about creating change-makers.',
      impact: 'Expanded professional network by 300%'
    },
    {
      name: 'Grishma Chowdary',
      role: 'Multi-Program Participant',
      country: 'Egypt',
      image: Grishma_Chowdary,
      quote: 'I\'ve partnered with many organizations, but the energy and professionalism of PGT Global Network is unmatched. They\'re building a movement, not just running programs.',
      impact: 'Founded nonprofit organization'
    }
  ];

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="pt-16">

      {/* ── Hero ─────────────────────────────────────────────────────
          NO CHANGE — gradient bg-blue-600→purple-600 with white text.
          Already correct in both modes.                                      */}
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

      {/* ── Impact by Numbers ───*/}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Impact by Numbers
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
              Six years of dedication translated into measurable, meaningful change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 150}>
                <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg dark:shadow-slate-900/50 border border-transparent dark:border-slate-700 hover:shadow-xl transition-shadow text-center">
                  <div className={`w-16 h-16 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center mx-auto mb-6 ${stat.color}`}>
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    <CountUpNumber
                      end={stat.number}
                      suffix={stat.suffix || ''}
                      decimals={stat.decimals || 0}
                      duration={2500}
                    />
                  </div>
                  <div className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{stat.label}</div>
                  <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">{stat.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ────          */}
      <section className="py-20 bg-blue-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Voices of Transformation
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
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
                <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg dark:shadow-slate-900/50 border border-transparent dark:border-slate-600 hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                    </div>
                  </div>

                  <blockquote className="text-gray-700 dark:text-slate-300 italic mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                    <p className="text-blue-800 dark:text-blue-300 font-semibold text-sm">
                      {/* Impact: {testimonial.impact} */}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── 2030 Vision ──────*/}
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