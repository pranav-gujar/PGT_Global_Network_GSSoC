import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';
import HeroBackground from '../components/HeroBackground';

import LoadingSpinner from '../components/LoadingSpinner';
import { usePageLoading } from '../hooks/usePageLoading';

const FAQ = () => {
  const loading = usePageLoading();

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItem, setOpenItem] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'programs', name: 'Programs' },
    { id: 'application', name: 'Application Process' },
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Technical' },
    { id: 'partnership', name: 'Partnerships' }
  ];

  const faqItems = [
    {
      id: 1,
      category: 'general',
      question: 'What is PGT Global Network?',
      answer: 'PGT Global Network is a student-led, purpose-driven organization empowering individuals through leadership, awareness, education, and community-driven programs. Founded in 2019, it has grown into a platform where students discover real-world learning, social leadership, and meaningful impact.'
    },
    {
      id: 2,
      category: 'programs',
      question: 'What programs does PGT offer?',
      answer: 'We run flagship initiatives including D3 (Daily Discovery Digest), VoA (Voices of Ability), Seminarix workshops, MotivMinds video series, and the annual HED – Happy Eco Diwali campaign. Each program focuses on empowering students and communities in different ways.'
    },
    {
      id: 3,
      category: 'application',
      question: 'How can I participate in a program?',
      answer: 'Each program has its own mode of participation. For example, MotivMinds and D3 are published on our social platforms for open access, Seminarix is delivered directly in schools and hostels, and VoA accepts guest storytellers by invitation or application. Details are shared on our website and social media.'
    },
    {
      id: 4,
      category: 'programs',
      question: 'Are the programs free?',
      answer: 'Yes, almost all PGT Global Network initiatives are offered free of cost. Our goal is to make awareness, learning, and empowerment accessible to everyone.'
    },
    {
      id: 5,
      category: 'general',
      question: 'Where is PGT based?',
      answer: 'PGT Global Network is based in Daryapur, Maharashtra, India. While we operate from our hometown, our reach extends globally through digital platforms and connections.'
    },
    {
      id: 6,
      category: 'application',
      question: 'Who can join or benefit from PGT programs?',
      answer: 'Anyone interested in leadership, learning, and personal growth can benefit from our programs. Most of our initiatives are designed for students, but they are open to all age groups who seek inspiration and awareness.'
    },
    {
      id: 7,
      category: 'partnership',
      question: 'Can organizations or individuals partner with PGT?',
      answer: 'Yes, we welcome partnerships with schools, colleges, organizations, and individuals who share our vision of empowering students and communities. For collaborations, you can reach out at office@pgtglobalnetwork.com.'
    },
    {
      id: 8,
      category: 'general',
      question: 'How can I stay updated on PGT initiatives?',
      answer: 'You can follow us on Instagram, LinkedIn, and YouTube, or visit our website pgtglobalnetwork.com. All major program updates and new initiatives are announced there.'
    },
    {
      id: 9,
      category: 'technical',
      question: 'How can I report a technical issue with PGT platforms?',
      answer: 'If you face any technical issues while using our website or platforms, you can contact us at office@pgtglobalnetwork.com with details or screenshots of the problem. Our technical team will assist you as soon as possible.'
    }
  ];


  const toggleItem = (id: number) => {
    setOpenItem(prev => (prev === id ? null : id));
  };

  const filteredFAQs = faqItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Find answers to common questions about our programs, application process, and organization
            </p>
          </div>
        </section>
      </AnimatedCard>


      {/* Search and Filter */}
      <section className="py-12 bg-white sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <AnimatedCard animation="slideUp">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </AnimatedCard>

          {/* Category Filter */}
          <AnimatedCard animation="slideUp" delay={200}>
            <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-full whitespace-nowrap font-medium transition-all duration-200 flex-shrink-0 ${activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((item) => (
                <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    {openItem === item.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openItem === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              Contact Us
              <HelpCircle className="ml-2 h-5 w-5" />
            </a>
            {/* <a
              href="mailto:office@pgtglobalnetwork.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center justify-center"
            >
              Email Support
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;