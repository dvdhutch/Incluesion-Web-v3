"use client";

import type { Metadata } from "next";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Incluesion Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Message:
${formData.message}
    `);
    
    window.location.href = `mailto:elisa@incluesion.io?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ready to transform your leadership development? We'd love to hear from you and discuss how Incluesion can help your organization.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-panel p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
                <p className="text-white/70 mb-8">
                  Whether you're looking to implement leadership games for your team, need more information about our features, or want to discuss custom solutions, we're here to help.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a href="mailto:elisa@incluesion.io" className="text-white/70 hover:text-white transition-colors">
                        elisa@incluesion.io
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Response Time</h3>
                      <p className="text-white/70">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Support</h3>
                      <p className="text-white/70">
                        Dedicated support for all customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="glass-panel p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a href="/features" className="block text-white/70 hover:text-white transition-colors">
                    → Explore Features
                  </a>
                  <a href="/pricing" className="block text-white/70 hover:text-white transition-colors">
                    → View Pricing Plans
                  </a>
                  <a href="mailto:elisa@incluesion.io?subject=Demo Request" className="block text-white/70 hover:text-white transition-colors">
                    → Request a Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-panel p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-vertical"
                    placeholder="Tell us about your leadership development needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>

              <p className="text-sm text-white/60 mt-4 text-center">
                This form will open your email client to send the message to elisa@incluesion.io
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
