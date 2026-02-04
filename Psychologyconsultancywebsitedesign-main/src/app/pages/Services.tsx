import { Heart, Users, Brain, TrendingUp, Shield, Sparkles, Video, MapPin, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router";

export function Services() {
  const services = [
    {
      icon: Heart,
      title: "Individual Therapy",
      description: "Personalized one-on-one sessions designed to address your unique mental health needs and goals.",
      details: [
        "Depression and mood disorders",
        "Anxiety and stress management",
        "Self-esteem and identity issues",
        "Life transitions and adjustments",
      ],
      duration: "50-60 minutes",
      format: "In-person or online",
    },
    {
      icon: Users,
      title: "Relationship Counseling",
      description: "Support for couples and families to strengthen bonds, improve communication, and resolve conflicts.",
      details: [
        "Couples therapy and pre-marital counseling",
        "Communication skills development",
        "Conflict resolution strategies",
        "Rebuilding trust and intimacy",
      ],
      duration: "60-75 minutes",
      format: "In-person or online",
    },
    {
      icon: Brain,
      title: "Stress & Anxiety Management",
      description: "Learn effective coping strategies to reduce anxiety, manage stress, and regain emotional balance.",
      details: [
        "Cognitive Behavioral Therapy (CBT)",
        "Mindfulness and relaxation techniques",
        "Panic attack management",
        "Work-life balance strategies",
      ],
      duration: "50 minutes",
      format: "In-person or online",
    },
    {
      icon: TrendingUp,
      title: "Career & Personal Growth",
      description: "Navigate professional challenges, career transitions, and unlock your full potential.",
      details: [
        "Career development and planning",
        "Work-related stress and burnout",
        "Confidence and leadership skills",
        "Goal setting and achievement",
      ],
      duration: "50-60 minutes",
      format: "In-person or online",
    },
    {
      icon: Shield,
      title: "Trauma-Informed Therapy",
      description: "Specialized support for processing traumatic experiences in a safe, compassionate environment.",
      details: [
        "PTSD and trauma recovery",
        "EMDR therapy",
        "Safe and grounded approach",
        "Building resilience and coping skills",
      ],
      duration: "60 minutes",
      format: "In-person recommended",
    },
    {
      icon: Sparkles,
      title: "Mindfulness & Wellness",
      description: "Develop mindfulness practices to enhance well-being, self-awareness, and emotional regulation.",
      details: [
        "Mindfulness-Based Stress Reduction",
        "Meditation and breathing exercises",
        "Body-mind awareness",
        "Holistic wellness approach",
      ],
      duration: "50 minutes",
      format: "In-person or online",
    },
  ];

  const sessionFormats = [
    {
      icon: MapPin,
      title: "In-Person Sessions",
      description: "Meet in our comfortable, private office space designed for healing and reflection.",
      features: ["Private, calming environment", "Confidential and secure", "Located in San Francisco"],
    },
    {
      icon: Video,
      title: "Online Sessions",
      description: "Access therapy from the comfort of your home through secure video conferencing.",
      features: ["Flexible scheduling", "HIPAA-compliant platform", "Same quality of care"],
    },
  ];

  return (
    <div className="bg-[#FFF9F5]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#F7C7D0]/20 to-[#FFD4C4]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif text-[#3D2E29] mb-6">
              Our Services
            </h1>
            <p className="text-lg text-[#6B5B56] leading-relaxed">
              Comprehensive mental health services tailored to support your unique journey 
              toward healing, growth, and emotional well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F7C7D0]/10 to-[#FFD4C4]/10 rounded-2xl p-8 border border-[#8B4556]/10 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-[#8B4556] flex items-center justify-center mb-5">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-serif text-[#3D2E29] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#6B5B56] mb-5 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-5">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="text-[#8B4556] flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-[#6B5B56] text-sm">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#8B4556]/10 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-[#6B5B56]">
                    <Clock size={16} className="text-[#8B4556]" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-[#6B5B56]">
                    {service.format.includes("online") ? (
                      <Video size={16} className="text-[#8B4556]" />
                    ) : (
                      <MapPin size={16} className="text-[#8B4556]" />
                    )}
                    <span>{service.format}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Formats */}
      <section className="py-16 md:py-20 bg-[#F5EAE0]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#3D2E29] mb-4">
              Session Formats
            </h2>
            <p className="text-[#6B5B56] text-lg">
              Choose the format that works best for your lifestyle and comfort level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sessionFormats.map((format, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-[#8B4556]/10 shadow-lg"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F7C7D0] to-[#E5B8C5] flex items-center justify-center mb-5">
                  <format.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-serif text-[#3D2E29] mb-3">
                  {format.title}
                </h3>
                <p className="text-[#6B5B56] mb-5 leading-relaxed">
                  {format.description}
                </p>
                <ul className="space-y-2">
                  {format.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="text-[#8B4556] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[#6B5B56]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#3D2E29] mb-4">
              How It Works
            </h2>
            <p className="text-[#6B5B56] text-lg">
              Your journey to wellness starts here—simple steps to begin therapy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Book Your Session",
                description: "Schedule a free 15-minute consultation to discuss your needs and see if we're a good fit.",
              },
              {
                number: "02",
                title: "First Appointment",
                description: "We'll explore your concerns, goals, and develop a personalized treatment plan together.",
              },
              {
                number: "03",
                title: "Ongoing Support",
                description: "Regular sessions to track progress, develop coping skills, and work toward your wellness goals.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F7C7D0] to-[#8B4556] flex items-center justify-center mx-auto mb-4 text-white text-xl font-serif">
                  {step.number}
                </div>
                <h3 className="text-xl font-serif text-[#3D2E29] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#6B5B56]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#F7C7D0] to-[#FFD4C4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#3D2E29] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-[#6B5B56] text-lg mb-8">
            Take the first step toward better mental health. Book your consultation today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#8B4556] text-white rounded-full hover:bg-[#6B3544] transition-all hover:shadow-xl text-lg"
          >
            Schedule a Consultation
          </Link>
          <p className="text-[#6B5B56] text-sm mt-6">
            Free 15-minute initial consultation • Flexible scheduling • No commitment required
          </p>
        </div>
      </section>
    </div>
  );
}
