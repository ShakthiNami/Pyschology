import { Link } from "react-router";
import { Heart, Users, Award, ArrowRight, Brain, MessageCircle, TrendingUp, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "500+", label: "Clients Helped" },
    { number: "12", label: "Certifications" },
  ];

  const services = [
    {
      icon: Heart,
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your unique needs and personal growth journey.",
      color: "bg-[#F7C7D0]",
    },
    {
      icon: Users,
      title: "Relationship Counseling",
      description: "Strengthen connections and build healthier relationships with your loved ones.",
      color: "bg-[#FFD4C4]",
    },
    {
      icon: Brain,
      title: "Stress & Anxiety Management",
      description: "Learn effective coping strategies to manage stress and reduce anxiety.",
      color: "bg-[#F5EAE0]",
    },
    {
      icon: TrendingUp,
      title: "Career & Personal Growth",
      description: "Navigate life transitions and unlock your full potential.",
      color: "bg-[#8B4556]",
      featured: true,
    },
  ];

  const expertise = [
    { skill: "Cognitive Behavioral Therapy (CBT)", level: 95 },
    { skill: "Mindfulness-Based Therapy", level: 90 },
    { skill: "Trauma-Informed Care", level: 88 },
    { skill: "Solution-Focused Therapy", level: 92 },
  ];

  return (
    <div className="bg-[#FFF9F5]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7C7D0]/20 via-transparent to-[#FFD4C4]/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center relative">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#F7C7D0]/30 rounded-full">
                <span className="text-[#8B4556] text-sm">Your Journey to Wellness Starts Here</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#3D2E29] leading-tight">
                Healing Through
                <span className="block text-[#8B4556]">Understanding & Care</span>
              </h1>
              <p className="text-lg text-[#6B5B56] leading-relaxed">
                A safe, supportive space where you can explore your thoughts, emotions, 
                and experiences with compassion and professional guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-[#8B4556] text-white rounded-full hover:bg-[#6B3544] transition-all hover:shadow-lg group"
                >
                  Book a Session
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#8B4556] border-2 border-[#8B4556] rounded-full hover:bg-[#F7C7D0]/20 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#F7C7D0] rounded-full opacity-20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#FFD4C4] rounded-full opacity-20 blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1714976694541-98e82692d0a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwY291bnNlbGluZyUyMHdvbWFuJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzcwMTg2NzIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Peaceful therapy session"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome / About Preview Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#3D2E29] mb-4">
              Welcome to Serenity Mind
            </h2>
            <p className="text-[#6B5B56] text-lg leading-relaxed">
              At Serenity Mind, we believe that everyone deserves support on their mental health journey. 
              Our approach combines evidence-based practices with genuine compassion to create 
              a therapeutic environment where healing and growth can flourish.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F7C7D0]/30 to-[#FFD4C4]/30 rounded-2xl p-8 text-center border border-[#8B4556]/10 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-serif text-[#8B4556] mb-2">{stat.number}</div>
                <div className="text-[#6B5B56]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-[#F5EAE0]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full mb-4">
              <Sparkles className="text-[#8B4556]" size={20} />
              <span className="text-[#8B4556]">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#3D2E29] mb-4">
              How We Can Help You
            </h2>
            <p className="text-[#6B5B56] text-lg">
              Specialized therapy services designed to support your unique needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 ${
                  service.featured
                    ? "bg-[#8B4556] text-white shadow-xl"
                    : "bg-white border border-[#8B4556]/10 hover:shadow-lg"
                } transition-all hover:-translate-y-1`}
              >
                <div
                  className={`w-14 h-14 rounded-full ${
                    service.featured ? "bg-white/20" : service.color
                  } flex items-center justify-center mb-4`}
                >
                  <service.icon
                    className={service.featured ? "text-white" : "text-[#8B4556]"}
                    size={24}
                  />
                </div>
                <h3
                  className={`text-xl font-serif mb-3 ${
                    service.featured ? "text-white" : "text-[#3D2E29]"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={service.featured ? "text-white/90" : "text-[#6B5B56]"}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center text-[#8B4556] hover:text-[#6B3544] transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise / Skills Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1722094250550-4993fa28a51b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwY2FsbSUyMHdlbGxuZXNzJTIwcmVsYXhhdGlvbnxlbnwxfHx8fDE3NzAxODY3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mindfulness and wellness"
                className="w-full h-[450px] object-cover"
              />
            </div>

            {/* Right - Expertise */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-[#3D2E29]">
                Expertise You Can Trust
              </h2>
              <p className="text-[#6B5B56] text-lg leading-relaxed">
                With years of specialized training and continuous professional development, 
                we bring a wealth of knowledge in evidence-based therapeutic approaches.
              </p>

              <div className="space-y-5 pt-4">
                {expertise.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#3D2E29]">{item.skill}</span>
                      <span className="text-[#8B4556]">{item.level}%</span>
                    </div>
                    <div className="h-3 bg-[#F5EAE0] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#F7C7D0] to-[#8B4556] rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-[#8B4556] text-white rounded-full hover:bg-[#6B3544] transition-all mt-6"
              >
                Learn About Our Approach
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#F7C7D0] to-[#FFD4C4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
            <MessageCircle className="text-[#8B4556]" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#3D2E29] mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-[#6B5B56] text-lg mb-8 max-w-2xl mx-auto">
            Taking the first step towards better mental health is an act of courage. 
            Let's walk this path together. Book your session today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#8B4556] text-white rounded-full hover:bg-[#6B3544] transition-all hover:shadow-xl text-lg"
          >
            Schedule an Appointment
            <ArrowRight className="ml-2" size={22} />
          </Link>
          <p className="text-[#6B5B56] text-sm mt-6">
            Free 15-minute consultation available
          </p>
        </div>
      </section>
    </div>
  );
}
