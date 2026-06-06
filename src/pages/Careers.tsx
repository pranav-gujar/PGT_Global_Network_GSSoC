import React from "react";
import { MapPin, Clock, Users, ArrowRight, ExternalLink } from "lucide-react";
import ProtectedAction from "../components/ProtectedAction";
import AnimatedCard from "../components/AnimatedCard";
import { useAuth } from "../contexts/AuthContext";
import { supabase } from "../lib/supabase";
import toast from "react-hot-toast";
import HeroBackground from "../components/HeroBackground";
import Background from "../components/Background";

import LoadingSpinner from "../components/LoadingSpinner";
import { usePageLoading } from "../hooks/usePageLoading";

const JobPosition = ({ position, handleApply, type }) => {
  return (
    <AnimatedCard animation="slideUp" delay={0}>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {position.title}
          </h3>
          <p className="text-gray-600 dark:text-slate-400 text-sm mb-4">{position.department}</p>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Key Responsibilities:
            </h4>
            <ul className="text-sm text-gray-600 dark:text-slate-300 space-y-1">
              {position.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ProtectedAction
          onAction={() => handleApply(position.title, type)}
          fallback={
            <button
              onClick={() => handleApply(position.title, type)}
              className="w-full bg-gray-400 text-white px-4 py-2 rounded-lg font-semibold inline-flex items-center justify-center mt-auto"
            >
              Sign in to Apply
              <ExternalLink className="ml-2 h-5 w-5" />
            </button>
          }
        >
          <button
            onClick={() => handleApply(position.title, type)}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center mt-auto"
          >
            Apply Now
            <ExternalLink className="ml-2 h-5 w-5" />
          </button>
        </ProtectedAction>
      </div>
    </AnimatedCard>
  );
};

const Careers = () => {
  const loading = usePageLoading();
  const { user } = useAuth();

  const handleApply = async (positionTitle, positionType) => {
    if (positionType === "internship") {
      toast.success(
        "Internship opportunities will come soon. Keep checking this page for updates!",
        {
          duration: 4000,
          style: { background: "#3B82F6", color: "white" },
        }
      );
      return;
    }

    if (user) {
      try {
        await supabase.from("user_activities").insert({
          user_id: user.id,
          activity_type: `Applied for ${positionType}`,
          activity_data: {
            position_title: positionTitle,
            position_type: positionType,
          },
        });
        toast.success("Logging application... Redirecting to application form...");
      } catch (error) {
        console.error("Error logging activity:", error);
        toast("Redirecting to application form...");
      }
    } else {
      toast("Redirecting to application form...");
    }

    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScuNgMbLFhWx-yLSNK-b0JnMeWNdREAYTVi8owvWrxNgXwmRw/viewform",
      "_blank"
    );
  };

  const openPositions = [
    {
      id: 1,
      title: "Chief Operations Director (COD)",
      department: "Operations",
      responsibilities: [
        "Manage day-to-day team operations, timelines, and internal coordination",
        "Track tasks and ensure smooth execution of programs",
        "Collaborate with all departments to keep projects running on time",
      ],
    },
    {
      id: 2,
      title: "Chief Communications Officer (CCO)",
      department: "Communications",
      responsibilities: [
        "Write and review all content: captions, posts, internal documents, and scripts",
        "Maintain the tone and voice of PGT across platforms",
        "Collaborate with PR and Design teams for campaigns",
      ],
    },
    {
      id: 3,
      title: "Creative Director (CD)",
      department: "Creative",
      responsibilities: [
        "Design posters, carousels, edit videos, reels, thumbnails, and all brand creatives",
        "Maintain visual identity and consistency across platforms",
        "Support all departments with design and media content",
      ],
    },
    {
      id: 4,
      title: "Chief Strategy Officer (CSO)",
      department: "Strategy",
      responsibilities: [
        "Lead campaign ideas, innovation, and planning",
        "Analyze what's working and suggest improvements",
        "Assist in building long-term strategies for PGT programs",
      ],
    },
    {
      id: 5,
      title: "Public Relations Head (PRH)",
      department: "Public Relations",
      responsibilities: [
        "Represent PGT publicly and build collaborations",
        "Handle outreach to colleges, NGOs, media, and influencers",
        "Support visibility and networking of the brand",
      ],
    },
    {
      id: 6,
      title: "Campus Director (CAP)",
      department: "Campus Relations",
      responsibilities: [
        "Act as the official link between PGT and college campus",
        "Organize on-ground activities and represent PGT at events",
        "Promote awareness and engagement inside campus",
      ],
    },
    {
      id: 7,
      title: "Chief Technical Director (CTD)",
      department: "Technology",
      responsibilities: [
        "Build and manage the official PGT website",
        "Create event registration pages and landing pages",
        "Maintain form integrations, analytics, and digital tools",
      ],
    },
    {
      id: 8,
      title: "General Secretary (GSEC)",
      department: "Administration",
      responsibilities: [
        "Handle official documentation, letters, and internal announcements",
        "Support the Founder in maintaining structure and follow-ups",
        "Keep track of internal workflows and communication logs",
      ],
    },
  ];

  const internshipPrograms = [
    {
      id: 1,
      title: "Marketing Intern",
      department: "Marketing",
      responsibilities: [
        "Assist in creating social media content and campaigns",
        "Support market research and analysis projects",
        "Help with event planning and promotional activities",
      ],
    },
    {
      id: 2,
      title: "Content Writing Intern",
      department: "Communications",
      responsibilities: [
        "Write blog posts, articles, and website content",
        "Create engaging social media captions and posts",
        "Assist in developing internal communication materials",
      ],
    },
    {
      id: 3,
      title: "Graphic Design Intern",
      department: "Creative",
      responsibilities: [
        "Design social media graphics and promotional materials",
        "Create visual content for campaigns and events",
        "Support brand consistency across all platforms",
      ],
    },
    {
      id: 4,
      title: "Web Development Intern",
      department: "Technology",
      responsibilities: [
        "Assist in website development and maintenance",
        "Help with creating landing pages and forms",
        "Support technical documentation and testing",
      ],
    },
    {
      id: 5,
      title: "Research Intern",
      department: "Strategy",
      responsibilities: [
        "Conduct research on industry trends and best practices",
        "Analyze data and prepare reports",
        "Support strategic planning initiatives",
      ],
    },
    {
      id: 6,
      title: "Event Management Intern",
      department: "Operations",
      responsibilities: [
        "Assist in planning and coordinating events",
        "Support logistics and vendor management",
        "Help with post-event analysis and reporting",
      ],
    },
  ];

  const benefits = [
    {
      title: "Global Impact",
      description: "Work on projects that transform lives across the world",
      icon: "🌍",
    },
    {
      title: "Professional Growth",
      description: "Continuous learning opportunities and skill development",
      icon: "📈",
    },
    {
      title: "Flexible Work",
      description: "Remote-first culture with flexible working arrangements",
      icon: "💻",
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health benefits and wellness programs",
      icon: "🏥",
    },
    {
      title: "Team Culture",
      description: "Collaborative, inclusive, and purpose-driven work environment",
      icon: "🤝",
    },
    {
      title: "Learning Budget",
      description: "Annual budget for conferences, courses, and certifications",
      icon: "📚",
    },
  ];

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="pt-16">

      {/* Hero Section — gradient, no change needed */}
      <AnimatedCard animation="fadeIn">
        <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 overflow-hidden">
          <HeroBackground />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Be part of a global network that&apos;s transforming lives through
              purpose, growth, and meaningful change
            </p>
          </div>
        </section>
      </AnimatedCard>

      {/* Why Join Us */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
                Join a team that&apos;s passionate about creating positive change and
                building a better future
              </p>
            </div>
          </AnimatedCard>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 100}>
                <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-blue-50 dark:bg-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
              Explore current opportunities to join our growing team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openPositions.map((position, index) => (
              <JobPosition
                key={index}
                position={position}
                handleApply={handleApply}
                type="job"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Programs */}
      <section className="relative py-20 bg-gradient-to-r from-slate-800 to-indigo-900 overflow-hidden">
        <Background />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="fadeIn">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden p-8 md:p-12 text-center">

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Mentorship Programs
              </h2>

              <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto mb-10">
                Structured mentorship designed to support learners from{" "}
                <span className="font-semibold text-blue-600">any educational background</span>,
                helping them gain clarity, confidence, and real-world skills.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">

                <div className="bg-gray-100 dark:bg-slate-700 p-6 rounded-xl border border-gray-100 dark:border-slate-600 hover:border-blue-100 dark:hover:border-blue-500 transition-colors">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">150+ Specialized Domains</h3>
                  <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed">
                    Spanning <strong>11+ broad categories</strong> including technology, engineering, design, business, content, and social impact.
                  </p>
                </div>

                <div className="bg-gray-100 dark:bg-slate-700 p-6 rounded-xl border border-gray-100 dark:border-slate-600 hover:border-blue-100 dark:hover:border-blue-500 transition-colors">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Open to All Streams</h3>
                  <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed">
                    Designed for students of <strong>all branches and degrees</strong>. Focuses on guided learning, hands-on practice, and mentor-led growth.
                  </p>
                </div>

                <div className="bg-gray-100 dark:bg-slate-700 p-6 rounded-xl border border-gray-100 dark:border-slate-600 hover:border-blue-100 dark:hover:border-blue-500 transition-colors">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Internship Opportunities</h3>
                  <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed">
                    Available based on performance and readiness. These are offered <strong>separately and free of cost</strong>.
                  </p>
                </div>

              </div>

              <a
                href="https://mentorship.pgtglobalnetwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Apply for Mentorship
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>

            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Internship Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
              Gain valuable experience and kickstart your career with our
              internship opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internshipPrograms.map((position, index) => (
              <JobPosition
                key={index}
                position={position}
                handleApply={handleApply}
                type="internship"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-blue-50 dark:bg-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
              Our streamlined process ensures we find the right fit for both you
              and our organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <AnimatedCard animation="zoomIn" delay={0}>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Apply Online</h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm">Submit your application through our online form</p>
              </AnimatedCard>
            </div>

            <div className="text-center">
              <AnimatedCard animation="zoomIn" delay={200}>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Initial Review</h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm">Our team reviews your application and qualifications</p>
              </AnimatedCard>
            </div>

            <div className="text-center">
              <AnimatedCard animation="zoomIn" delay={400}>
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Interview</h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm">Virtual or in-person interview with the hiring team</p>
              </AnimatedCard>
            </div>

            <div className="text-center">
              <AnimatedCard animation="zoomIn" delay={600}>
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Welcome</h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm">Join our team and start making an impact</p>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section — gradient, no change needed */}
      <AnimatedCard animation="fadeIn">
        <section className="relative py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white overflow-hidden">
          <Background />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
              Don&apos;t see a position that fits? We&apos;re always looking for
              passionate individuals to join our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Send Us Your Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </AnimatedCard>

    </div>
  );
};

export default Careers;