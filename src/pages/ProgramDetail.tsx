import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Clock, Globe, Target, CheckCircle, Star } from 'lucide-react';
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

  // Mock program data - in a real app, this would come from an API
  const programData: { [key: string]: any } = {
  'd3': {
    name: 'D3 Program',
    fullName: 'Daily Discovery Digest',
    description: 'A continuous daily awareness initiative delivering knowledge, inspiration, and important milestones through social media stories.',
    image: D3,
    // image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
    ]
  },

  'voa': {
    name: 'VoA Initiative',
    fullName: 'Voices of Ability',
    description: 'A storytelling series that showcases individuals who turned personal challenges into change.',
    image: VoA,
    // image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
    ]
  },

  'seminarix': {
    name: 'Seminarix',
    fullName: 'Seminar Series',
    description: 'Educational and motivational seminar series for 10th and 12th students to excel in academics and mental wellness.',
    image: Seminarix,
    // image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
        topics: ['Study Strategies', 'Motivation', 'Time Management', 'Mental Wellness']
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
    ]
  },

  'motivminds': {
    name: 'MotivMinds',
    fullName: 'Motivational Minds',
    description: 'Weekly empowerment video series delivering short, inspiring one-minute wisdom clips.',
    image: MotivMinds,
    // image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
    ]
  },

  'hed': {
    name: 'HED Program',
    fullName: 'Happy Eco Diwali',
    description: 'An annual campaign encouraging eco-friendly Diwali celebrations and environmental responsibility.',
    image: HED,
    // image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
    ]
  }
};


  const program = programData[programId || 'd3'];

  if (!program) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Program Not Found</h1>
          <Link to="/programs" className="text-blue-600 hover:text-blue-800">
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
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AnimatedCard animation="fadeIn">
        <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <img
            src={program.image}
            alt={program.name}
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {program.name}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-6">
                {program.fullName}
              </p>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                {program.description}
              </p>
            </div>
          </div>
        </section>
      </AnimatedCard>

      {/* Back Button */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/programs"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Programs
          </Link>
        </div>
      </section>

      {/* Stats Section */}
            {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            {/* Duration */}
            <AnimatedCard animation="slideUp" delay={0}>
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {program.duration}
                </div>
                <div className="text-gray-600">Duration</div>
              </div>
            </AnimatedCard>

            {/* Participants */}
            <AnimatedCard animation="slideUp" delay={200}>
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {program.participants}
                </div>
                <div className="text-gray-600">Lives Impacted</div>
              </div>
            </AnimatedCard>

            {/* <AnimatedCard animation="slideUp" delay={400}>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  <CountUpNumber end={25} duration={2000} />
                </div>
                <div className="text-gray-600">Countries</div>
              </div>
            </AnimatedCard> */}

            {/* Success Rate */}
            <AnimatedCard animation="slideUp" delay={400}>
              <div>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {program.successRate}
                </div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </AnimatedCard>

          </div>
        </div>
      </section>


      {/* Program Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedCard animation="slideLeft">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {program.overview}
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Learning Objectives</h3>
                <ul className="space-y-3">
                  {program.objectives.map((objective: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>

            <AnimatedCard animation="slideRight">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Requirements</h2>
                <ul className="space-y-3 mb-8">
                  {program.requirements.map((requirement: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Expected Outcomes</h3>
                <ul className="space-y-3">
                  {program.outcomes.map((outcome: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Curriculum</h2>
              <p className="text-xl text-gray-600">Comprehensive learning modules designed for maximum impact</p>
            </div>
          </AnimatedCard>

          <div className="space-y-6">
            {program.curriculum.map((module: any, index: number) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 150}>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{module.module}</h3>
                    <span className="text-blue-600 font-medium">{module.duration}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {module.topics.map((topic: string, topicIndex: number) => (
                      <div key={topicIndex} className="bg-white px-3 py-2 rounded-lg text-sm text-gray-700">
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

      {/* Testimonials */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600">Hear from our program graduates</p>
            </div>
          </AnimatedCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {program.testimonials.map((testimonial: any, index: number) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 200}>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <AnimatedCard animation="fadeIn">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Transform Your Future?
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
        Join thousands of individuals who have experienced growth through the {program.name}.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* Apply Button */}
        <a
          href="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
        >
          Apply Now
        </a>

        {/* Free Session Button */}
        <a
        href="https://topmate.io/pranav_gujar/1355631?utm_source=public_profile&utm_campaign=pranav_gujar"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
        >
          Schedule Free Session
        </a>
      </div>
    </AnimatedCard>
  </div>
</section>

    </div>
  );
};

export default ProgramDetail;