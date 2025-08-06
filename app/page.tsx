'use client'

import { Button } from "@/components/ui/button"
import { Clock, Shield, Users, GraduationCap, Building, CreditCard, Home, Briefcase, Phone, Mail, MapPin, Target, Eye, Heart, Zap, Smartphone, Receipt, UserCheck, ArrowRight, CheckCircle, Facebook, Instagram, Twitter, Linkedin, Menu, X } from 'lucide-react'
import { useState, useEffect } from "react"

export default function CyendeFinancePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white font-light">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src="/images/cyende-logo.png" alt="Cyende Finance" className="h-8 sm:h-10 w-auto transition-transform hover:scale-105" />
              <div className="hidden sm:block">
                <div className="text-lg sm:text-xl font-light text-blue-900">CYENDE FINANCE</div>
                <div className="text-xs text-gray-500 font-light tracking-wide">INVEST. GROW. EVOLVE</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {["About", "Products", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-900 font-normal tracking-wide transition-all duration-300 hover:scale-105 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-1 left-0 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 top-3' : ''}`}></span>
                <span className={`absolute top-3 left-0 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute top-5 left-0 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 top-3' : ''}`}></span>
              </div>
            </button>

            {/* Desktop Apply Button */}
            <Button className="hidden sm:block bg-blue-900 hover:bg-blue-800 text-white font-normal px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Apply Now
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <nav className="flex flex-col space-y-3 pt-4 border-t border-gray-100 mt-4">
              {["About", "Products", "Services", "Contact"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-900 font-normal tracking-wide transition-all duration-300 py-2 hover:pl-2"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </a>
              ))}
              <Button className="bg-blue-900 hover:bg-blue-800 text-white font-normal px-6 py-3 rounded-full w-full mt-3 transition-all duration-300 hover:scale-105">
                Apply Now
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 sm:w-1/3 h-full bg-lime-400 opacity-5 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-lime-400 opacity-10 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-lime-400 opacity-5 rounded-full blur-2xl animate-float"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="space-y-6 animate-fade-in-up">
                <div className="space-y-3">
                  <div className="text-lime-400 font-light tracking-widest text-xs sm:text-sm uppercase animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Licensed Tier IV MFI • Since 2020
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-light text-lime-400 tracking-wide animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    CYENDE FINANCE
                  </div>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white leading-none tracking-tight animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  Financial
                  <br />
                  <span className="text-lime-400 font-light">Freedom</span>
                  <br />
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-300">
                    Starts Here
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-blue-100 font-light leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  Transformative solutions that unlock potential and create lasting impact across Uganda.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <Button
                  size="lg"
                  className="bg-lime-400 hover:bg-lime-500 text-blue-900 font-normal text-base sm:text-lg px-8 py-3 rounded-full w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Get Started
                </Button>
                <button className="text-lime-400 font-light text-base sm:text-lg hover:text-lime-300 transition-all duration-300 flex items-center space-x-2 group">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative mt-8 lg:mt-0 animate-fade-in-right" style={{ animationDelay: '1.2s' }}>
              <div className="relative max-w-sm mx-auto lg:max-w-none">
                <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  <div className="text-2xl font-light text-blue-900">24hrs</div>
                  <div className="text-sm text-gray-500 font-light">Approval Time</div>
                </div>

                <div className="bg-lime-400 p-10 rounded-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 hover:shadow-2xl">
                  <div className="text-center space-y-3">
                    <div className="text-3xl font-light text-blue-900">Fast Track</div>
                    <div className="text-base text-blue-800 font-light">Your Financial Goals</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-blue-800 p-5 rounded-xl transform rotate-6 hover:rotate-12 transition-transform duration-300">
                  <CheckCircle className="h-10 w-10 text-lime-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 text-center lg:text-left">
                <div className="text-lime-400 font-light tracking-widest text-sm uppercase mb-4">
                  About Us
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-blue-900 leading-tight mb-6">
                  From Vision
                  <br />
                  to <span className="text-lime-400">Impact</span>
                </h2>
                <p className="text-gray-600 font-light text-lg leading-relaxed">
                  Founded in 2020, we've grown from a one-person service to a trusted Tier IV Microfinance Institution.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-12">
              {/* Vision & Mission */}
              <div className="relative group">
                <div className="bg-blue-900 p-8 rounded-2xl text-white transition-transform duration-300 group-hover:scale-105">
                  <div className="flex items-start space-x-4 mb-6">
                    <Eye className="h-8 w-8 text-lime-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-light mb-4">Vision</h3>
                      <p className="text-blue-100 font-light leading-relaxed">
                        To be the preferred provider of inclusive, reliable, and transformative financial solutions that
                        unlock potential and create shared prosperity.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-lime-400 p-8 rounded-2xl text-blue-900 transform translate-x-6 -translate-y-6 transition-transform duration-300 group-hover:translate-x-8 group-hover:-translate-y-8">
                  <div className="flex items-start space-x-4">
                    <Target className="h-8 w-8 text-blue-900 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-light mb-4">Mission</h3>
                      <p className="font-light leading-relaxed">
                        Empowering individuals and communities through convenient, reliable, and transformative
                        financial solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Values */}
              <div className="space-y-6">
                <h3 className="text-3xl font-light text-blue-900 text-center lg:text-left">Our Values</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Heart,
                      title: "Client-Centered Service",
                      description: "Clients at the heart of everything we do",
                    },
                    {
                      icon: Zap,
                      title: "Operational Excellence",
                      description: "High standards through efficiency and innovation",
                    },
                    {
                      icon: Shield,
                      title: "Integrity & Accountability",
                      description: "Honest, transparent, and reliable service",
                    },
                    {
                      icon: Users,
                      title: "Winning Together",
                      description: "Collaborative culture that empowers all",
                    },
                  ].map((value, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 group">
                      <div className="bg-blue-900 p-3 rounded-xl flex-shrink-0 group-hover:bg-lime-400 transition-colors duration-300">
                        <value.icon className="h-5 w-5 text-lime-400 group-hover:text-blue-900" />
                      </div>
                      <div>
                        <h4 className="text-lg font-light text-blue-900 mb-2">{value.title}</h4>
                        <p className="text-gray-600 font-light text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-lime-400 font-light tracking-widest text-sm uppercase mb-4">
              Our Products
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-blue-900 mb-6">
              Tailored <span className="text-lime-400">Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Home,
                title: "Mortgage/Asset Financing",
                description: "Finance both income-generating and non-income-generating assets",
              },
              {
                icon: Briefcase,
                title: "Business Loan",
                description: "Fast and secure capital boost for entrepreneurs",
                featured: true,
              },
              {
                icon: CreditCard,
                title: "Personal Loan",
                description: "Emergency funds for unexpected expenses",
              },
              {
                icon: UserCheck,
                title: "Salary Loan",
                description: "For civil servants and private sector employees",
              },
              {
                icon: GraduationCap,
                title: "School Fees Loan",
                description: "Education financing with flexible repayment",
              },
            ].map((product, index) => (
              <div
                key={index}
                className={`group relative ${
                  product.featured 
                    ? "bg-blue-900 text-white transform scale-105 z-10" 
                    : "bg-white hover:bg-gray-50"
                } p-8 rounded-2xl transition-all duration-500 hover:transform hover:scale-110 hover:shadow-2xl ${
                  index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div
                  className={`${
                    product.featured ? "bg-lime-400 text-blue-900" : "bg-gray-100 text-blue-900 group-hover:bg-lime-400"
                  } p-4 rounded-xl w-fit mb-6 transition-all duration-300`}
                >
                  <product.icon className="h-8 w-8" />
                </div>

                <h3
                  className={`text-xl font-light mb-4 ${
                    product.featured ? "text-white" : "text-blue-900"
                  } leading-tight`}
                >
                  {product.title}
                </h3>

                <p
                  className={`${
                    product.featured ? "text-blue-100" : "text-gray-600"
                  } font-light leading-relaxed mb-8`}
                >
                  {product.description}
                </p>

                <Button
                  className={`${
                    product.featured
                      ? "bg-lime-400 hover:bg-lime-500 text-blue-900"
                      : "bg-blue-900 hover:bg-blue-800 text-white"
                  } font-normal rounded-full px-8 w-full sm:w-auto transition-all duration-300 hover:scale-105`}
                >
                  Apply Now
                </Button>

                {product.featured && (
                  <div className="absolute -top-3 -right-3 bg-lime-400 text-blue-900 px-4 py-2 rounded-full text-sm font-normal animate-pulse">
                    Popular
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center lg:text-left">
            <div className="text-lime-400 font-light tracking-widest text-sm uppercase mb-4">
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-blue-900">
              Beyond <span className="text-lime-400">Lending</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "Agency Banking",
                description: "Community banking through our agent network",
              },
              {
                icon: Receipt,
                title: "Utilities Payment",
                description: "Quick and secure bill payment platform",
              },
              {
                icon: Smartphone,
                title: "Mobile Money",
                description: "Seamless mobile financial transactions",
              },
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-blue-900 p-8 rounded-2xl text-white h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="bg-lime-400 p-6 rounded-xl w-fit mb-8 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-12 w-12 text-blue-900" />
                  </div>

                  <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                  <p className="text-blue-100 font-light leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl">
            {/* Careers */}
            <div className="bg-blue-900 text-white p-12 flex flex-col justify-center group hover:bg-blue-800 transition-colors duration-300">
              <div className="space-y-6">
                <div>
                  <div className="text-lime-400 font-light tracking-widest text-sm uppercase mb-4">
                    Careers
                  </div>
                  <h3 className="text-3xl font-extralight mb-6">Join Our Journey</h3>
                  <p className="text-blue-100 font-light text-lg leading-relaxed mb-8">
                    Be part of transforming financial services in Uganda with competitive packages and growth
                    opportunities.
                  </p>
                </div>
                <Button className="bg-lime-400 hover:bg-lime-500 text-blue-900 font-normal rounded-full px-8 py-3 w-fit transition-all duration-300 hover:scale-105">
                  View Positions
                </Button>
              </div>
            </div>

            {/* Tenders */}
            <div className="bg-lime-400 text-blue-900 p-12 flex flex-col justify-center group hover:bg-lime-500 transition-colors duration-300">
              <div className="space-y-6">
                <div>
                  <div className="text-blue-700 font-light tracking-widest text-sm uppercase mb-4">
                    Partnerships
                  </div>
                  <h3 className="text-3xl font-extralight mb-6">Tender Opportunities</h3>
                  <p className="text-blue-800 font-light text-lg leading-relaxed mb-8">
                    Partner with us through transparent procurement processes that create mutual value and growth.
                  </p>
                </div>
                <Button className="bg-blue-900 hover:bg-blue-800 text-white font-normal rounded-full px-8 py-3 w-fit transition-all duration-300 hover:scale-105">
                  View Tenders
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-lime-400 font-light tracking-widest text-sm uppercase mb-4">
              Contact Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight mb-6">
              Let's Start Your
              <br />
              <span className="text-lime-400">Financial Journey</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: MapPin,
                    title: "Visit Our Office",
                    content: ["Mbaguta Street, Mbarara City", "P.O. Box 422050, Mbarara Uganda"],
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: ["+256 766940292", "+256 747873135"],
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: ["cyendeest24@gmail.com"],
                  },
                  {
                    icon: Clock,
                    title: "Office Hours",
                    content: ["Monday – Saturday", "8:30 AM – 5:30 PM"],
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 group">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-lime-400 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-5 w-5 text-blue-900" />
                      </div>
                      <h4 className="font-light text-lg text-lime-400">{item.title}</h4>
                    </div>
                    <div className="space-y-1">
                      {item.content.map((line, idx) => (
                        <p key={idx} className="text-blue-100 font-light">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl font-light text-blue-900 mb-2">Quick Application</h3>
                <p className="text-gray-600 font-light">Get started with your loan application today</p>
              </div>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-400 focus:border-lime-400 font-light transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-400 focus:border-lime-400 font-light transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-400 focus:border-lime-400 font-light transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loan Type *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-400 focus:border-lime-400 font-light transition-all duration-300"
                  >
                    <option value="">Select loan type</option>
                    <option value="personal">Personal Loan</option>
                    <option value="business">Business Loan</option>
                    <option value="mortgage">Mortgage/Asset Financing</option>
                    <option value="salary">Salary Loan</option>
                    <option value="school">School Fees Loan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount (UGX)</label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-400 focus:border-lime-400 font-light transition-all duration-300"
                    placeholder="Enter desired loan amount"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-normal py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  Submit Application
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-xs text-gray-500 text-center font-light">
                  By submitting this form, you agree to our terms and conditions. We'll contact you within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-6 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <img src="/images/cyende-logo.png" alt="Cyende Finance" className="h-10 w-auto" />
                <div>
                  <div className="text-xl font-light text-white">CYENDE FINANCE</div>
                  <div className="text-xs text-gray-400 font-light">INVEST. GROW. EVOLVE</div>
                </div>
              </div>
              <p className="text-gray-400 font-light leading-relaxed">
                Licensed Tier IV Microfinance Institution empowering individuals and communities through transformative
                financial solutions since 2020.
              </p>
              <div className="flex justify-center sm:justify-start space-x-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-gray-800 hover:bg-lime-400 p-3 rounded-xl transition-all duration-300 group hover:scale-110"
                  >
                    <Icon className="h-5 w-5 text-gray-400 group-hover:text-gray-900" />
                  </a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div className="text-center sm:text-left">
              <h4 className="font-medium mb-6 text-lime-400 text-lg">Products</h4>
              <ul className="space-y-3">
                {[
                  "Personal Loans",
                  "Business Loans",
                  "Mortgage/Asset Financing",
                  "Salary Loans",
                  "School Fees Loans",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white font-light transition-all duration-300 flex items-center justify-center sm:justify-start space-x-2 group"
                    >
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services & Company */}
            <div className="text-center sm:text-left">
              <h4 className="font-medium mb-6 text-lime-400 text-lg">Services & Company</h4>
              <ul className="space-y-3">
                {["Agency Banking", "Utilities Payment", "Mobile Money Services", "About Us", "Careers", "Tenders"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white font-light transition-all duration-300 flex items-center justify-center sm:justify-start space-x-2 group"
                      >
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                        <span>{item}</span>
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center sm:text-left">
              <h4 className="font-medium mb-6 text-lime-400 text-lg">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start justify-center sm:justify-start space-x-3">
                  <MapPin className="h-5 w-5 text-lime-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-400 font-light">
                    <p>Mbaguta Street, Mbarara City</p>
                    <p>P.O. Box 422050, Mbarara Uganda</p>
                  </div>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <Phone className="h-5 w-5 text-lime-400" />
                  <div className="text-gray-400 font-light">
                    <p>+256 766940292</p>
                    <p>+256 747873135</p>
                  </div>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <Mail className="h-5 w-5 text-lime-400" />
                  <p className="text-gray-400 font-light">cyendeest24@gmail.com</p>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <Clock className="h-5 w-5 text-lime-400" />
                  <div className="text-gray-400 font-light">
                    <p>Monday – Saturday</p>
                    <p>8:30 AM – 5:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-center lg:text-left">
              <div className="text-gray-400 font-light text-sm">
                © 2024 Cyende Finance Ltd. All rights reserved. Licensed Tier IV Microfinance Institution.
              </div>
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                  <a key={index} href="#" className="text-gray-400 hover:text-white font-light transition-colors duration-300">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
