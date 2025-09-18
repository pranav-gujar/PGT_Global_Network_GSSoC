import React from 'react';
import { FileText, Scale, Shield, AlertTriangle, Users, Globe } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';
import HeroBackground from '../components/HeroBackground';

import LoadingSpinner from '../components/LoadingSpinner'; 
import { usePageLoading } from '../hooks/usePageLoading';


const Terms = () => {
    const loading = usePageLoading();
  
  const sections = [
    {
      icon: Users,
      title: 'User Responsibilities',
      items: [
        'Provide accurate and complete information during registration',
        'Maintain confidentiality of account credentials',
        'Use our services in compliance with applicable laws',
        'Respect intellectual property rights of PGT and others'
      ]
    },
    {
      icon: Shield,
      title: 'Prohibited Activities',
      items: [
        'Harassment, discrimination, or harmful behavior toward others',
        'Sharing false, misleading, or inappropriate content',
        'Attempting to gain unauthorized access to our systems',
        'Using our services for illegal or unethical purposes'
      ]
    },
    {
      icon: Globe,
      title: 'Intellectual Property',
      items: [
        'All content and materials are owned by PGT Global Network',
        'Users retain rights to their original contributions',
        'Limited license granted for personal, non-commercial use',
        'Respect for third-party intellectual property rights'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Limitation of Liability',
      items: [
        'Services provided "as is" without warranties',
        'No liability for indirect or consequential damages',
        'Maximum liability limited to fees paid (if any)',
        'Users responsible for their own decisions and actions'
      ]
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
        Terms & Conditions
      </h1>
      <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
        Please read these terms carefully before using our services and participating in our programs.
      </p>
    </div>
  </section>
</AnimatedCard>


      {/* Last Updated */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard animation="slideUp">
            <div className="text-center">
            <p className="text-gray-600">
              <strong>Last Updated:</strong> September 15, 2025 | <strong>Effective Date:</strong> September 15, 2025
            </p>
          </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Welcome to PGT Global Network. These Terms and Conditions ("Terms") govern your use of our 
              website, programs, and services. By accessing or using our services, you agree to be bound 
              by these Terms and our Privacy Policy.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              If you do not agree with any part of these Terms, please do not use our services. 
              We reserve the right to modify these Terms at any time, and your continued use constitutes 
              acceptance of any changes.
            </p>
          </div>
        </div>
      </section>

      {/* Key Sections Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Terms Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding your rights and responsibilities when using our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <AnimatedCard key={index} animation="slideUp" delay={index * 150}>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <section.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Acceptance of Terms */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                {/* <Scale className="h-8 w-8 text-blue-600 mr-3" /> */}
                1. Acceptance of Terms
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  By accessing and using PGT Global Network's website, programs, and services, you acknowledge 
                  that you have read, understood, and agree to be bound by these Terms and Conditions, as well 
                  as our Privacy Policy.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and PGT Global Network. 
                  If you are using our services on behalf of an organization, you represent that you have 
                  the authority to bind that organization to these Terms.
                </p>
              </div>
            </div>

            {/* Services Description */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Description of Services</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>PGT Global Network provides:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Educational programs and workshops (D3, VoA, Seminarix, MotivMinds, HED)</li>
                  <li>Online learning platforms and resources</li>
                  <li>Community networking and mentorship opportunities</li>
                  <li>Career development and placement assistance</li>
                  <li>Research and impact measurement services</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any service at any time without 
                  prior notice. We are not liable for any modification, suspension, or discontinuation of services.
                </p>
              </div>
            </div>

            {/* User Accounts */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. User Accounts and Registration</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>To access certain services, you may need to create an account. You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and update your information to keep it accurate and current</li>
                  <li>Maintain the security and confidentiality of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
                <p>
                  We reserve the right to suspend or terminate accounts that violate these Terms or 
                  engage in prohibited activities.
                </p>
              </div>
            </div>

            {/* Program Participation */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Program Participation</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>Participation in our programs is subject to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Meeting eligibility criteria and application requirements</li>
                  <li>Completing any required assessments or interviews</li>
                  <li>Adhering to program schedules and attendance requirements</li>
                  <li>Maintaining respectful and professional conduct</li>
                  <li>Completing program evaluations and feedback requests</li>
                </ul>
                <p>
                  Program completion certificates are awarded based on meeting specified requirements. 
                  We reserve the right to remove participants who violate program guidelines or these Terms.
                </p>
              </div>
            </div>

            {/* Content and Conduct */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Content and Conduct Guidelines</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>When using our services, you agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Post or share content that is illegal, harmful, threatening, or discriminatory</li>
                  <li>Infringe on intellectual property rights of others</li>
                  <li>Engage in harassment, bullying, or inappropriate behavior</li>
                  <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                  <li>Use our services for commercial purposes without prior written consent</li>
                  <li>Distribute spam, malware, or other harmful content</li>
                </ul>
                <p>
                  We reserve the right to remove content and suspend users who violate these guidelines.
                </p>
              </div>
            </div>

            {/* Privacy and Data Protection */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Privacy and Data Protection</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Your privacy is important to us. Our collection, use, and protection of your personal 
                  information is governed by our Privacy Policy, which is incorporated into these Terms 
                  by reference.
                </p>
                <p>
                  By using our services, you consent to the collection and use of your information as 
                  described in our Privacy Policy. You also agree that we may use anonymized, aggregated 
                  data for research, impact measurement, and service improvement purposes.
                </p>
              </div>
            </div>

            {/* Disclaimers and Warranties */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Disclaimers and Warranties</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Our services are provided "as is" and "as available" without warranties of any kind, 
                  either express or implied. We disclaim all warranties, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Merchantability and fitness for a particular purpose</li>
                  <li>Non-infringement of third-party rights</li>
                  <li>Accuracy, completeness, or reliability of content</li>
                  <li>Uninterrupted or error-free operation of services</li>
                </ul>
                <p>
                  While we strive to provide high-quality programs and services, we cannot guarantee 
                  specific outcomes or results from participation in our programs.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Termination</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Either party may terminate this agreement at any time. We may suspend or terminate 
                  your access to our services immediately, without prior notice, for any reason, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violation of these Terms or our policies</li>
                  <li>Fraudulent, abusive, or illegal activity</li>
                  <li>Extended periods of inactivity</li>
                  <li>Technical or security reasons</li>
                </ul>
                <p>
                  Upon termination, your right to use our services ceases immediately, but these Terms 
                  will continue to apply to any prior use of our services.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Governing Law and Dispute Resolution</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  These Terms are governed by the laws of Canada, without regard to conflict of law principles. 
                  Any disputes arising from these Terms or your use of our services will be resolved through:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Good faith negotiations between the parties</li>
                  <li>Mediation, if negotiations are unsuccessful</li>
                  <li>Binding arbitration, if mediation fails</li>
                </ol>
                <p>
                  You agree to submit to the jurisdiction of the courts in Toronto, Ontario, Canada, 
                  for any legal proceedings related to these Terms.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Changes to Terms</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  We reserve the right to modify these Terms at any time. When we make changes, we will:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Update the "Last Updated" date at the top of this page</li>
                  <li>Notify users via email or prominent website notice for material changes</li>
                  <li>Provide a reasonable notice period before changes take effect</li>
                </ul>
                <p>
                  Your continued use of our services after any changes constitutes acceptance of the 
                  modified Terms. If you do not agree with the changes, you should discontinue use of our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
            <p className="text-xl text-gray-600">
              If you have questions about these Terms and Conditions, please contact us:
            </p>
          </div>
          
          <div className="flex justify-center">
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <h3 className="text-lg font-semibold text-gray-900 mb-4 ">T&C Query</h3>
    <div className="space-y-2 text-gray-700">
      <p>Email: office@pgtglobalnetwork.com</p>
      <p>Phone: +91 8999902805</p>
      <p>Response Time: Within 5 business days</p>
    </div>
  </div>
</div>

        </div>
      </section>
    </div>
  );
};

export default Terms;