import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';
import HeroBackground from '../components/HeroBackground';
import Background from '..//components/Background';

import LoadingSpinner from '../components/LoadingSpinner'; 
import { usePageLoading } from '../hooks/usePageLoading';

const Contact = () => {
    const loading = usePageLoading();

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Name is required.';
    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required.';
    if (!formData.message.trim()) errors.message = 'Message is required.';
    return errors;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setFormSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setFormSubmitting(false);
    setFormSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors((prev) => ({ ...prev, [name]: '' }));
  };
  
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'office@pgtglobalnetwork.com',
      description: 'Send us an email and we\'ll respond within 24 hours',
      action: 'mailto:office@pgtglobalnetwork.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 8999902805',
      description: 'Speak directly with our team during business hours',
      action: 'tel:+918999902805'
    },
    // {
    //   icon: MapPin,
    //   title: 'Visit Us',
    //   details: 'Global Network HQ',
    //   description: 'Schedule a visit to our headquarters',
    //   action: '#'
    // },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM IST',
      description: 'We\'re available during these hours for immediate assistance',
      action: '#'
    }
  ];

  const offices = [
    {
      region: 'North America',
      city: 'Toronto, Canada',
      address: '123 Innovation Drive, Toronto, ON M5V 3A8',
      phone: '+1 (416) 555-0123',
      email: 'northamerica@pgtglobal.org'
    },
    {
      region: 'Asia Pacific',
      city: 'Singapore',
      address: '456 Business Park, Singapore 018956',
      phone: '+65 6555 0123',
      email: 'asiapacific@pgtglobal.org'
    },
    {
      region: 'Europe',
      city: 'London, UK',
      address: '789 Innovation Hub, London EC2A 4DP',
      phone: '+44 20 7555 0123',
      email: 'europe@pgtglobal.org'
    },
    {
      region: 'Africa',
      city: 'Lagos, Nigeria',
      address: '321 Development Center, Lagos 100001',
      phone: '+234 1 555 0123',
      email: 'africa@pgtglobal.org'
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
        Get In Touch
      </h1>
      <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>
    </div>
  </section>
</AnimatedCard>


      {/* Contact Methods */}
      <section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap justify-center gap-8">
      {contactInfo.map((info, index) => (
        <AnimatedCard key={index} animation="slideUp" delay={index * 150}>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center w-80">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <info.icon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
           <a href={info.action} className="text-lg font-semibold text-blue-600 mb-2 hover:underline block">
              {info.details}
           </a>
            <p className="text-gray-600 text-sm mb-4">{info.description}</p>
          </div>
        </AnimatedCard>
      ))}
    </div>
  </div>
</section>


      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <AnimatedCard animation="slideLeft">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We'll respond within 24 hours.
                    </p>
                    <button
                      onClick={() => { setFormSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} noValidate className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text"
                        value={formData.name} onChange={handleInputChange}
                        placeholder="Your full name"
                        className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.name ? 'border-red-400' : 'border-gray-300'}`}
                      />
                      {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email"
                        value={formData.email} onChange={handleInputChange}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.email ? 'border-red-400' : 'border-gray-300'}`}
                      />
                      {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="subject" name="subject" type="text"
                        value={formData.subject} onChange={handleInputChange}
                        placeholder="What is this about?"
                        className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.subject ? 'border-red-400' : 'border-gray-300'}`}
                      />
                      {formErrors.subject && <p className="text-red-500 text-xs mt-1">{formErrors.subject}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message" name="message" rows={5}
                        value={formData.message} onChange={handleInputChange}
                        placeholder="Write your message here..."
                        className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${formErrors.message ? 'border-red-400' : 'border-gray-300'}`}
                      />
                      {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
                    </div>

                    <button
                      type="submit" disabled={formSubmitting}
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {formSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>Send Message <Send className="ml-2 h-5 w-5" /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedCard>

            <AnimatedCard animation="slideRight">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help and answer any questions you might have.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">General Inquiries</h3>
                      <a href="mailto:office@pgtglobalnetwork.com" className="text-blue-600 hover:underline">office@pgtglobalnetwork.com</a>
                      <p className="text-gray-500 text-sm">For general questions and information</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                      <a href="tel:+918999902805" className="text-blue-600 hover:underline">+91 8999902805</a>
                      <p className="text-gray-500 text-sm">Mon–Fri: 9AM–6PM IST</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Our Response Promise</h3>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• General inquiries: Within 24 hours</li>
                    <li>• Program questions: Within 48 hours</li>
                    <li>• Partnership proposals: Within 1 week</li>
                    <li>• Urgent matters: Same day response</li>
                  </ul>
                </div>
              </div>
            </AnimatedCard>

          </div>
        </div>
      </section>

      {/* Global Offices */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Global Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With offices across four continents, we're always close to our communities
            </p>
          </div>
          </AnimatedCard>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 150}>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{office.region}</h3>
                <h4 className="text-blue-600 font-semibold mb-4">{office.city}</h4>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-blue-600">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-blue-600">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Preview */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Looking for quick answers? Check out our comprehensive FAQ section.
          </p>
          <a
            href="/faq"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            View FAQ
            <Send className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <AnimatedCard animation="fadeIn">
  <section className="relative py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
    <Background />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        We’d Love to Hear From You
      </h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
        Whether you have questions, ideas, or feedback, your voice matters.  
        Reach out and connect with our team to take the next step toward meaningful impact.
      </p>
      <p className="text-lg text-blue-200 max-w-2xl mx-auto">
        Together, we can create change and make a difference.
      </p>
    </div>
  </section>
</AnimatedCard>


    </div>
  );
};

export default Contact;