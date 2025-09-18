import React, { useState } from 'react';
import { Play, X, Image, Calendar, MapPin } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';
import HeroBackground from '../components/HeroBackground';
import Background from '../components/Background';

import LoadingSpinner from '../components/LoadingSpinner'; 
import { usePageLoading } from '../hooks/usePageLoading';

// Gallery Images
import one from '../assets/gallery/1.jpg';
import two from '../assets/gallery/2.jpg';
import three from '../assets/gallery/3.jpg';
import four from '../assets/gallery/4.jpg';
import five from '../assets/gallery/5.jpg';
import six from '../assets/gallery/6.jpg';
import seven from '../assets/gallery/7.jpg';
import eight from '../assets/gallery/8.jpg';
import nine from '../assets/gallery/9.jpg';
import ten from '../assets/gallery/10.jpg';
import eleven from '../assets/gallery/11.jpg';
import twelve from '../assets/gallery/12.jpg';
import thirteen from '../assets/gallery/13.jpg';
import fourteen from '../assets/gallery/14.jpg';

const Gallery = () => {
    const loading = usePageLoading();
  
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('all');

  const mediaItems = [
    {
      type: 'image',
      src: one,
      thumbnail: one,
      title: 'Initiatives Discussion',
      category: 'achievements',
      date: '2025-08-21', // YYYY-MM-DD
      location: 'Sangli, India',
      description: 'Founder presented authored books to Sangli Sub-Collector, also sharing initiatives.'
    },
    {
      type: 'image',
      src: two,
      thumbnail: two,
      title: 'Seminarix Session',
      category: 'programs',
      date: '2025-07-12',
      location: 'Daryapur, India',
      description: 'Gifted authored books and delivered Seminarix seminar for Class 10 students of Ratnabai Rathi Highschool, Daryapur, batch 2025-26.'
    },
    {
      type: 'image',
      src: three,
      thumbnail: three,
      title: 'Student Feedback',
      category: 'community',
      date: '2025-07-12',
      location: 'Daryapur, India',
      description: 'Conducted Seminarix seminar for Class 10 batch 2025-26 at Ratnabai Rathi Highschool, Daryapur, receiving inspiring student feedback and appreciation.'
    },
    {
      type: 'image',
      src: four,
      thumbnail: four,
      title: ' 5th Anniversary',
      category: 'events',
      date: '2024-05-17',
      location: 'Sangli, India',
      description: 'Celebrated five years of Purpose, Growth, and Transformation with impactful activities and community engagement.'
    },
    {
      type: 'image',
      src: five,
      thumbnail: five,
      title: 'Book Published',
      category: 'achievements',
      date: '2024-05-17',
      location: 'Sangli, India',
      description: 'Founder launched first authored book with respected Dr. K. V. Madhale from Walchand College of Engineering, Sangli.'
    },
    {
      type: 'image',
      src: six,
      thumbnail: six,
      title: 'Seminarix Inaugural',
      category: 'programs',
      date: '2024-07-06',
      location: 'Daryapur, India',
      description: 'Visited Ratnabai Rathi Highschool, Daryapur, for the first Seminarix session with Class 10 batch 2024-25, honored by school leadership.'
    },
    {
      type: 'image',
      src: seven,
      thumbnail: seven,
      title: 'Hostel Seminar',
      category: 'community',
      date: '2024-09-14',
      location: 'Daryapur, India',
      description: 'Delivered second Seminarix seminar at Dr. B. R. Ambedkar Government Boys Hostel, Daryapur, inspiring hostel students through guidance and motivation.'
    },
    {
      type: 'image',
      src: eight,
      thumbnail: eight,
      title: ' Science Outreach',
      category: 'community',
      date: '2024-09-21',
      location: 'Sangli, India',
      description: 'Engaged City Highschool students in a Shanivari Vidnyanvari science session conducted with WCE Sangli under community outreach.'
    },
    {
      type: 'image',
      src: nine,
      thumbnail: nine,
      title: 'HED 6.0',
      category: 'events',
      date: '2024-11-11',
      location: 'Sangli, India',
      description: 'Celebrated Happy Eco Diwali 6.0 with innovative contest entries and community tree plantation to promote sustainable celebrations.'
    },
    {
      type: 'image',
      src: ten,
      thumbnail: ten,
      title: 'Dr. B. R. Ambedkar Jayanti',
      category: 'team',
      date: '2025-04-14',
      location: 'Sangli, India',
      description: 'Organized Dr. Ambedkar Jayanti with speeches, poster presentations, and awareness activities with WCE Sangli students team.'
    },
    {
      type: 'image',
      src: eleven,
      thumbnail: eleven,
      title: ' Knowledge Gift',
      category: 'community',
      date: '2025-05-17',
      location: 'Sangli, India',
      description: 'Gifting Dr. B. R. Ambedkar books to Boys Hostel Sangli during PGT’s 6th Anniversary celebration for spreading knowledge and awareness.'
    },
    {
      type: 'image',
      src: twelve,
      thumbnail: twelve,
      title: 'Second Book Published',
      category: 'achievements',
      date: '2025-05-17',
      location: 'Sangli, India',
      description: 'Founder published second authored book and celebrated PGT’s 6th Anniversary with WCE Registrar and CAS Cell Member Secretary.'
    },
    {
      type: 'image',
      src: thirteen,
      thumbnail: thirteen,
      title: 'HED 5.0',
      category: 'events',
      date: '2023-12-15',
      location: 'Sangli, India',
      description: 'Concluded eco-friendly Diwali campaign HED 5.0 by planting trees and encouraging sustainable ideas among students.'
    },
    {
      type: 'image',
      src: fourteen,
      thumbnail: fourteen,
      title: 'First Seminar Of Seminarix',
      category: 'programs',
      date: '2024-07-06',
      location: 'Daryapur, India',
      description: 'Conducted first-ever Seminarix seminar at Ratnabai Rathi Highschool, Daryapur, marking the beginning of this impactful program.'
    },
    // {
    //   type: 'video',
    //   src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
    //   title: 'Partnership Announcement',
    //   category: 'events',
    //   date: '2024-06-20',
    //   location: 'São Paulo, Brazil',
    //   description: 'Announcement of new strategic partnerships with educational institutions'
    // },
   
  ];

  const tabs = [
    { id: 'all', label: 'All Media', count: mediaItems.length },
    { id: 'programs', label: 'Programs', count: mediaItems.filter(item => item.category === 'programs').length },
    { id: 'events', label: 'Events', count: mediaItems.filter(item => item.category === 'events').length },
    { id: 'achievements', label: 'Achievements', count: mediaItems.filter(item => item.category === 'achievements').length },
    { id: 'team', label: 'Team', count: mediaItems.filter(item => item.category === 'team').length },
    { id: 'community', label: 'Community', count: mediaItems.filter(item => item.category === 'community').length }
  ];

  const filteredItems = activeTab === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeTab);

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
        Gallery
      </h1>
      <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
        Capturing moments of transformation, growth, and community across our global network
      </p>
    </div>
  </section>
</AnimatedCard>


      {/* Filter Tabs */}
      <section className="py-12 bg-white sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp">
            <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <AnimatedCard
                key={index}
                animation="slideUp"
                delay={index * 100}
              >
                <div
                  className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                  onClick={() => setSelectedMedia(item)}
                >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {item.type === 'video' ? (
                      <Play className="h-12 w-12 text-white" />
                    ) : (
                      <Image className="h-12 w-12 text-white" />
                    )}
                  </div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-2 right-2">
                    {item.type === 'video' ? (
                      <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                        Video
                      </div>
                    ) : (
                      <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                        Photo
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mb-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {item.location}
                  </div>
                </div>
              </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

  <AnimatedCard animation="fadeIn">
  <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
    <Background />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Celebrating Moments of Transformation
      </h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
        Our gallery captures the stories, growth, and impact of individuals and communities we've touched.  
        Every image tells a journey of learning, connection, and meaningful change.
      </p>
      <p className="text-lg text-blue-200 max-w-2xl mx-auto">
        Scroll through to relive these moments and be inspired to create your own.
      </p>
    </div>
  </section>
</AnimatedCard>



      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedMedia.src}
                alt={selectedMedia.title}
                className="w-full h-96 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedMedia.title}
                </h3>
                <p className="text-gray-600 mb-4">{selectedMedia.description}</p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(selectedMedia.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {selectedMedia.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;