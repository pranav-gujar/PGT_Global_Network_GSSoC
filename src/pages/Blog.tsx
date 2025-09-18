import React, { useState, useMemo } from 'react';
import { Search, Calendar, User, ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCard from '../components/AnimatedCard';
import { blogPosts, BlogPost } from '../data/blogPosts'; 
import HeroBackground from '../components/HeroBackground';
import Background from '..//components/Background';

import LoadingSpinner from '../components/LoadingSpinner'; 
import { usePageLoading } from '../hooks/usePageLoading';

const Blog = () => {
    const loading = usePageLoading();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

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
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
      <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
        Insights, stories, and updates from our global community of changemakers
      </p>
    </div>
  </section>
</AnimatedCard>


      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-600" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <AnimatedCard animation="fadeIn">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
              </div>
            </AnimatedCard>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <AnimatedCard key={post.id} animation="slideUp" delay={index * 150}>
                  <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-w-16 aspect-h-9">
                      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                          <Calendar className="h-4 w-4 ml-2" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>

                        <Link
                          to={`/blog/${post.slug}`} // ✅ uses slug
                          className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </AnimatedCard>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      {/* <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Enjoyed reading?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Keep exploring more inspiring stories from our community.
              </p>

              <p className="text-gray-500 text-sm mt-4">
                Your journey doesn’t end here — more stories await.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </section> */}

      <AnimatedCard animation="fadeIn">
  <section className="relative py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white overflow-hidden">
    <Background />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Stay Inspired with Our Stories
      </h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto text-green-100">
        Explore insights, experiences, and stories from our global community of changemakers.  
        Every blog reflects a journey of growth, learning, and meaningful transformation.
      </p>
      <p className="text-lg text-green-200 max-w-2xl mx-auto">
        Dive in, get inspired, and discover how you can make a difference.
      </p>
    </div>
  </section>
</AnimatedCard>


    </div>
  );
};

export default Blog;
