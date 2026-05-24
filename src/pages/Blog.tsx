import { useState, useMemo } from 'react';
import { blogPosts } from '../data/blogPosts';
import HeroBackground from '../components/HeroBackground';
import Background from '../components/Background';
import { usePageLoading } from '../hooks/usePageLoading';
import { Search, Filter } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';
// 1. ADD THIS IMPORT AT THE TOP OF YOUR FILE:
import { SkeletonCard } from '../components/Skeletons/SkeletonCard';

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

  return (
    <div className="pt-16">
      <AnimatedCard animation="fadeIn">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 overflow-hidden">
          <HeroBackground />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Insights, stories, and updates from our global community of changemakers.
            </p>
          </div>
        </section>
      </AnimatedCard>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900 relative">
        <Background />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2 w-full md:w-auto">
                <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full md:w-auto px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </AnimatedCard>

          {/* 2. CONDITIONAL RENDERING FOR SKELETONS VS LIVE POSTS */}
          {loading ? (
            /* Shows pulsing skeletons inside the layout grid while page is loading */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <SkeletonCard key={n} />
              ))}
            </div>
          ) : filteredPosts.length > 0 ? (
            /* Shows the actual blog posts when loading is complete */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <AnimatedCard key={post.id} animation="fadeIn">
                  {/* Your actual Blog Card component code usually sits here */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700">
                    <img src={post.image} alt={post.title} className="w-full aspect-video object-cover" />
                    <div className="p-6">
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{post.category}</span>
                      <h3 className="text-xl font-bold mt-2 text-gray-900 dark:text-white">{post.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">{post.excerpt}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          ) : (
            /* Fallback empty state if search matches nothing */
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;