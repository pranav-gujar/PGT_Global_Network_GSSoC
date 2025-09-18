import React from "react";
import { useParams, Link } from "react-router-dom";
import LoadingSpinner from '../components/LoadingSpinner'; 
import { usePageLoading } from '../hooks/usePageLoading';
import {
  Calendar,
  User,
  ArrowLeft,
  Clock,
  Share2,
  Copy,
  Check,
} from "lucide-react";
import AnimatedCard from "../components/AnimatedCard";
import { blogPosts } from "../data/blogPosts"; // import shared blog data

const BlogPost = () => {
  const loading = usePageLoading();
  
  const { slug } = useParams();
  const [shareDropdownOpen, setShareDropdownOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  // find blog by slug
  const blogPost = blogPosts.find((post) => post.slug === slug);

  if (!blogPost) {
    return (
      <div className="pt-16 text-center text-gray-600 text-lg">
        Blog not found 😕
      </div>
    );
  }

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = blogPost.title;
    const text = `Check out this insightful article: "${title}" by ${blogPost.author}`;

    switch (platform) {
      case "copy":
        try {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error("Failed to copy: ", err);
        }
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            text
          )}&url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "whatsapp":
        window.open(
          `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
          "_blank"
        );
        break;
    }
    setShareDropdownOpen(false);
  };

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
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <div className="mb-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {blogPost.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {blogPost.title}
              </h1>
              <div className="flex items-center justify-center space-x-6 text-blue-100">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {blogPost.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(blogPost.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {blogPost.readTime}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedCard>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp" delay={200}>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              {/* Back Button */}
              <div className="mb-8">
                <Link
                  to="/blog"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Share this article
                  </h3>
                  <div className="relative">
                    <button
                      onClick={() => setShareDropdownOpen(!shareDropdownOpen)}
                      className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </button>

                    {shareDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                        <button
                          onClick={() => handleShare("copy")}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center"
                        >
                          {copied ? (
                            <Check className="h-4 w-4 mr-2 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4 mr-2" />
                          )}
                          {copied ? "Copied!" : "Copy Link"}
                        </button>
                        <button
                          onClick={() => handleShare("twitter")}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Share on Twitter
                        </button>
                        <button
                          onClick={() => handleShare("facebook")}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Share on Facebook
                        </button>
                        <button
                          onClick={() => handleShare("linkedin")}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Share on LinkedIn
                        </button>
                        <button
                          onClick={() => handleShare("whatsapp")}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Share on WhatsApp
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Enjoyed reading?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Keep exploring more inspiring stories from our community.
              </p>
              <p className="text-gray-500 text-sm mt-4">
                Your journey doesn’t end here — more stories await.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
