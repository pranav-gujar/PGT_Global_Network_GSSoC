import React from 'react';
import { Calendar, Award, Users, Globe, Zap, Target, Star } from 'lucide-react';
import CountUpNumber from '../components/CountUpNumber';
import AnimatedCard from '../components/AnimatedCard';
import HeroBackground from '../components/HeroBackground';
import Background from '../components/Background';

import LoadingSpinner from '../components/LoadingSpinner'; 
import { usePageLoading } from '../hooks/usePageLoading';

const Timeline = () => {
    const loading = usePageLoading();
  
  const timelineEvents = [
  {
    year: '2019',
    title: 'The Spark',
    description: 'PGT began as a small school initiative focused on awareness and eco-friendly action.',
    icon: Target,
    achievements: [
      'Launched the first Happy Eco Diwali (HED) campaign',
      'Organized quizzes to support classmates during board exam prep',
      'Encouraged eco-conscious celebrations in local community',
      'Planted the idea of Purpose, Growth, and Transformation'
    ],
    stats: { participants: 40, programs: 1, successStories: 15 }
  },
  {
    year: '2020',
    title: 'Early Growth',
    description: 'Expanded small initiatives with educational and awareness activities during board and community events.',
    icon: Zap,
    achievements: [
      'Conducted educational awareness quizzes and small drives',
      'Sustained eco-awareness campaigns despite pandemic challenges',
      'Engaged students in local and online formats',
      'Inspired first few documented student success experiences'
    ],
    stats: { participants: 120, programs: 2, successStories: 40 }
  },
  {
    year: '2021',
    title: 'Consistent Action',
    description: 'PGT continued through awareness drives and annual eco-campaigns, keeping the vision alive.',
    icon: Users,
    achievements: [
      'Held small awareness events in schools and college groups',
      'Expanded HED campaign into its 3rd edition',
      'Organized peer-to-peer motivational discussions',
      'Maintained student engagement despite limited scale'
    ],
    stats: { participants: 300, programs: 2, successStories: 55 }
  },
  {
    year: '2022',
    title: 'Foundation Building',
    description: 'Focused on maintaining continuity with eco-initiatives and light educational activities.',
    icon: Award,
    achievements: [
      'Executed HED campaign 4th edition with new volunteers',
      'Ran small-scale online awareness posts and contests',
      'Started experimenting with structured formats for impact',
      'Strengthened the identity of PGT as a student-led movement'
    ],
    stats: { participants: 600, programs: 2, successStories: 80 }
  },
  {
    year: '2023',
    title: 'Preparing for Impact',
    description: 'PGT tested new formats and strengthened groundwork for upcoming transformation.',
    icon: Globe,
    achievements: [
      'Celebrated HED 5th edition with wider outreach',
      'Engaged in mini-campaigns to test student response',
      'Shaped vision for larger global identity',
      'Prepared structure for upcoming programs'
    ],
    stats: { participants: 1000, programs: 3, successStories: 95 }
  },
  {
    year: '2024',
    title: 'Towards Global Impact',
    description: 'Rebranded as PGT Global Network and launched major flagship programs with massive reach.',
    icon: Calendar,
    achievements: [
      'Launched VoA, MotivMinds, D3, and Seminarix as flagship programs',
      'Seminarix returned to founder’s former school with great success',
      'VoA and MotivMinds inspired audiences with real stories',
      'Crossed 10,000 participants milestone in the very first year'
    ],
    stats: { participants: 8000, programs: 5, successStories: 140 }
  },
  {
  year: '2025',
  title: 'Continuing the Journey',
  description: 'PGT Global Network is actively scaling programs and building new opportunities for student leadership.',
  icon: Star,
  achievements: [
    'Going to run Happy Eco Diwali 7th edition with strong engagement',
    'Expanding VoA, MotivMinds, D3, and Seminarix reach across platforms',
    'Building collaborations with schools, colleges, and global networks',
    'Focusing on empowering thousands more students this year'
  ],
  stats: { participants: 1000, programs: 6, successStories: 200 }
}
];
  // const timelineEvents = [
  //   {
  //     year: '2019',
  //     title: 'Foundation & Vision',
  //     description: 'PGT Global Network was founded with a clear mission to transform lives through purpose-driven growth.',
  //     icon: Target,
  //     achievements: [
  //       'Established core values and mission',
  //       'Launched first pilot program',
  //       'Reached 100 initial participants',
  //       'Formed founding team of 5 members'
  //     ],
  //     stats: { participants: 100, programs: 1, countries: 2 }
  //   },
  //   {
  //     year: '2020',
  //     title: 'Digital Transformation',
  //     description: 'Adapted to global challenges by launching digital programs and expanding our reach through technology.',
  //     icon: Zap,
  //     achievements: [
  //       'Launched D3 Digital Program',
  //       'Transitioned to virtual delivery',
  //       'Expanded to 10 countries',
  //       'Introduced online mentorship'
  //     ],
  //     stats: { participants: 500, programs: 2, countries: 10 }
  //   },
  //   {
  //     year: '2021',
  //     title: 'Community Building',
  //     description: 'Focused on building strong communities and launching the Voice of Action initiative.',
  //     icon: Users,
  //     achievements: [
  //       'Launched VoA Initiative',
  //       'Established community chapters',
  //       'Introduced peer-to-peer learning',
  //       'Reached 1,000 active participants'
  //     ],
  //     stats: { participants: 1500, programs: 3, countries: 20 }
  //   },
  //   {
  //     year: '2022',
  //     title: 'Educational Excellence',
  //     description: 'Expanded educational offerings with Seminarix and MotivMinds programs.',
  //     icon: Award,
  //     achievements: [
  //       'Launched Seminarix workshop series',
  //       'Introduced MotivMinds program',
  //       'Partnerships with 25 organizations',
  //       'Won "Innovation in Education" award'
  //     ],
  //     stats: { participants: 3500, programs: 4, countries: 30 }
  //   },
  //   {
  //     year: '2023',
  //     title: 'Higher Education Focus',
  //     description: 'Launched HED Program to support higher education development and academic excellence.',
  //     icon: Globe,
  //     achievements: [
  //       'Launched HED Program',
  //       'University partnerships established',
  //       'Scholarship program initiated',
  //       'Reached 40 countries'
  //     ],
  //     stats: { participants: 6000, programs: 5, countries: 40 }
  //   },
  //   {
  //     year: '2024',
  //     title: 'Global Impact',
  //     description: 'Achieved significant milestones and expanded our global footprint.',
  //     icon: Calendar,
  //     achievements: [
  //       'Reached 10,000+ participants',
  //       'Expanded to 50+ countries',
  //       'Launched mobile app',
  //       'Established regional offices'
  //     ],
  //     stats: { participants: 10000, programs: 5, countries: 50 }
  //   }
  // ];

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
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h1>
      <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
        Six years of growth, transformation, and impact - from a vision to a global network
      </p>
    </div>
  </section>
</AnimatedCard>


      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Timeline of Transformation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every milestone in our journey represents lives transformed and communities empowered
              </p>
            </div>
          </AnimatedCard>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden lg:block"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <AnimatedCard key={event.year} animation="slideUp" delay={index * 200}>
                  <div className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
                    <div className="flex-1 lg:max-w-md">
                      <div className={`bg-white p-8 rounded-xl shadow-lg ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <event.icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{event.year}</h3>
                            <h4 className="text-lg font-semibold text-blue-600">{event.title}</h4>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>

                        <div className="space-y-2 mb-6">
                          {event.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">
                              <CountUpNumber end={event.stats.participants} suffix="+" duration={2000} />
                            </div>
                            <div className="text-xs text-gray-500">Participants</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">
                              <CountUpNumber end={event.stats.programs} duration={2000} />
                            </div>
                            <div className="text-xs text-gray-500">Programs</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">
                              <CountUpNumber end={event.stats.successStories} suffix="+" duration={2000} />
                            </div>
                            <div className="text-xs text-gray-500">Success Stories</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                        <span className="text-white font-bold text-lg">{event.year.slice(-2)}</span>
                      </div>
                    </div>

                    <div className="flex-1 lg:max-w-md hidden lg:block"></div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
<AnimatedCard animation="fadeIn">
  <section className="relative py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white overflow-hidden">
    <Background />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Looking Ahead</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Impact Target */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md">
          <div className="text-4xl font-bold text-white mb-2">
            <CountUpNumber end={100000} suffix="+" duration={3000} />
          </div>
          <p className="text-lg text-green-100">Lives to Impact</p>
        </div>

        {/* Countries to Reach */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md">
          <div className="text-4xl font-bold text-white mb-2">
            <CountUpNumber end={100} suffix="+" duration={3000} />
          </div>
          <p className="text-lg text-green-100">Countries to Reach</p>
        </div>

        {/* Target Year */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md">
          <div className="text-4xl font-bold text-white mb-2">
            <CountUpNumber end={2030} duration={3000} />
          </div>
          <p className="text-lg text-green-100">Target Year</p>
        </div>
      </div>
    </div>
  </section>
</AnimatedCard>

    </div>
  );
};

export default Timeline;
