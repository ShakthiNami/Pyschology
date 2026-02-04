import { CheckCircle, Award, BookOpen, Heart, Target, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const qualifications = [
    "Ph.D. in Clinical Psychology, Stanford University",
    "Licensed Clinical Psychologist (LCP)",
    "Certified Cognitive Behavioral Therapist (CBT)",
    "Trauma-Informed Care Specialist",
    "Mindfulness-Based Stress Reduction (MBSR) Certified",
    "Member, American Psychological Association (APA)",
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We approach every client with empathy, warmth, and genuine understanding.",
    },
    {
      icon: Target,
      title: "Client-Centered",
      description: "Your goals, values, and experiences guide our therapeutic approach.",
    },
    {
      icon: BookOpen,
      title: "Evidence-Based",
      description: "We utilize proven therapeutic methods backed by scientific research.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Therapy is a partnership—we work together toward your wellness.",
    },
  ];

  return (
    <div className="bg-[#FFF9F5]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#F7C7D0]/20 to-[#FFD4C4]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif text-[#3D2E29] mb-6">
              About Dr. Sarah Mitchell
            </h1>
            <p className="text-lg text-[#6B5B56] leading-relaxed">
              A dedicated professional committed to helping individuals find clarity, 
              healing, and growth through compassionate, evidence-based therapy.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-[#F7C7D0] to-[#FFD4C4] rounded-3xl opacity-20" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1706087471046-e69f82fbeb59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXBpc3QlMjBwc3ljaG9sb2dpc3QlMjBwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NzAxODY3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dr. Sarah Mitchell"
                  className="w-full h-[550px] object-cover"
                />
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-serif text-[#3D2E29] mb-4">
                  A Partner in Your Wellness Journey
                </h2>
                <div className="space-y-4 text-[#6B5B56] leading-relaxed">
                  <p>
                    Hello, I'm Dr. Sarah Mitchell, and I'm honored to be a part of your path 
                    toward emotional well-being. With over 15 years of experience in clinical 
                    psychology, I've had the privilege of supporting individuals through life's 
                    most challenging moments.
                  </p>
                  <p>
                    My approach to therapy is rooted in the belief that every person has 
                    inherent strength and resilience. My role is to help you discover and 
                    harness these qualities, providing tools and support as you navigate 
                    anxiety, depression, trauma, relationships, and personal growth.
                  </p>
                  <p>
                    I specialize in Cognitive Behavioral Therapy (CBT), mindfulness-based 
                    interventions, and trauma-informed care. Whether you're facing a specific 
                    challenge or seeking deeper self-understanding, I create a safe, 
                    non-judgmental space for exploration and healing.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#F7C7D0]/30 rounded-full">
                  <Award className="text-[#8B4556]" size={20} />
                  <span className="text-[#8B4556]">Professional Qualifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 md:py-20 bg-[#F5EAE0]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#3D2E29] mb-4">
              Education & Certifications
            </h2>
            <p className="text-[#6B5B56] text-lg">
              Committed to excellence through continuous learning and professional development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {qualifications.map((qual, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-white rounded-xl p-5 border border-[#8B4556]/10 hover:shadow-md transition-shadow"
              >
                <CheckCircle className="text-[#8B4556] flex-shrink-0 mt-0.5" size={22} />
                <span className="text-[#3D2E29]">{qual}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach / Philosophy Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#3D2E29] mb-4">
              My Therapeutic Approach
            </h2>
            <p className="text-[#6B5B56] text-lg">
              Core values that guide my practice and shape the therapeutic experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F7C7D0]/20 to-[#FFD4C4]/20 rounded-2xl p-6 text-center border border-[#8B4556]/10 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow-sm">
                  <value.icon className="text-[#8B4556]" size={24} />
                </div>
                <h3 className="text-xl font-serif text-[#3D2E29] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#6B5B56]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#F7C7D0]/30 to-[#FFD4C4]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <blockquote className="text-center">
              <p className="text-2xl font-serif text-[#3D2E29] mb-6 leading-relaxed italic">
                "Therapy is not about fixing what's broken—it's about discovering 
                your inherent wholeness and learning to navigate life's challenges 
                with greater awareness, compassion, and resilience."
              </p>
              <footer className="text-[#8B4556] font-serif">
                — Dr. Sarah Mitchell
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#3D2E29] mb-4">
            Let's Begin This Journey Together
          </h2>
          <p className="text-[#6B5B56] text-lg mb-8">
            I'd be honored to support you. Reach out today to schedule your consultation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#8B4556] text-white rounded-full hover:bg-[#6B3544] transition-all hover:shadow-lg"
          >
            Book Your Session
          </a>
        </div>
      </section>
    </div>
  );
}
