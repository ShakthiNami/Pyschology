import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Calendar, Send } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    preferredFormat: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceType: "",
        preferredFormat: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      subtext: "Mon-Fri, 9am-6pm PST",
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@serenitymind.com",
      subtext: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: "123 Wellness Avenue",
      subtext: "San Francisco, CA 94102",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday - Friday",
      subtext: "9:00 AM - 7:00 PM",
    },
  ];

  return (
    <div className="bg-[#FFF9F5]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#F7C7D0]/20 to-[#FFD4C4]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif text-[#3D2E29] mb-6">
              Book Your Session
            </h1>
            <p className="text-lg text-[#6B5B56] leading-relaxed">
              Take the first step toward healing and growth. Schedule your free consultation 
              or book an appointment today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F7C7D0]/20 to-[#FFD4C4]/20 rounded-2xl p-6 border border-[#8B4556]/10 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 shadow-sm">
                  <info.icon className="text-[#8B4556]" size={22} />
                </div>
                <h3 className="font-serif text-[#3D2E29] mb-2">{info.title}</h3>
                <p className="text-[#3D2E29] mb-1">{info.details}</p>
                <p className="text-[#6B5B56] text-sm">{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form & Map */}
      <section className="py-16 md:py-20 bg-[#F5EAE0]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
              <div className="mb-8">
                <h2 className="text-3xl font-serif text-[#3D2E29] mb-3">
                  Schedule an Appointment
                </h2>
                <p className="text-[#6B5B56]">
                  Fill out the form below and we'll contact you within 24 hours to confirm your appointment.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-[#F7C7D0]/30 border border-[#8B4556]/20 rounded-xl text-[#8B4556] text-center">
                  Thank you! We'll be in touch soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-[#3D2E29] mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#FFF9F5] border border-[#8B4556]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4556] transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-[#3D2E29] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#FFF9F5] border border-[#8B4556]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4556] transition-all"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#3D2E29] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#FFF9F5] border border-[#8B4556]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4556] transition-all"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[#3D2E29] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#FFF9F5] border border-[#8B4556]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4556] transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-[#3D2E29] mb-2">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#FFF9F5] border border-[#8B4556]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4556] transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="individual">Individual Therapy</option>
                    <option value="relationship">Relationship Counseling</option>
                    <option value="stress">Stress & Anxiety Management</option>
                    <option value="career">Career & Personal Growth</option>
                    <option value="trauma">Trauma-Informed Therapy</option>
                    <option value="mindfulness">Mindfulness & Wellness</option>
                    <option value="consultation">Free Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredFormat" className="block text-[#3D2E29] mb-2">
                    Preferred Format *
                  </label>
                  <select
                    id="preferredFormat"
                    name="preferredFormat"
                    value={formData.preferredFormat}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#FFF9F5] border border-[#8B4556]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4556] transition-all"
                  >
                    <option value="">Select format</option>
                    <option value="in-person">In-Person</option>
                    <option value="online">Online (Video)</option>
                    <option value="either">No Preference</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="preferredDate" className="block text-[#3D2E29] mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FFF9F5] border border-[#8B4556]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4556] transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-[#3D2E29] mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FFF9F5] border border-[#8B4556]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4556] transition-all"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (9am-12pm)</option>
                      <option value="afternoon">Afternoon (12pm-4pm)</option>
                      <option value="evening">Evening (4pm-7pm)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#3D2E29] mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#FFF9F5] border border-[#8B4556]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4556] transition-all resize-none"
                    placeholder="Tell us a bit about what brings you here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-[#8B4556] text-white rounded-full hover:bg-[#6B3544] transition-all hover:shadow-lg"
                >
                  <span>Submit Request</span>
                  <Send size={20} />
                </button>

                <p className="text-[#6B5B56] text-sm text-center">
                  By submitting this form, you agree to our Privacy Policy and consent to be contacted.
                </p>
              </form>
            </div>

            {/* Map & Office Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="relative h-[400px] bg-gradient-to-br from-[#F7C7D0]/30 to-[#FFD4C4]/30 flex items-center justify-center">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1718220268527-4477fd170775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBpbnRlcmlvciUyMGNhbG0lMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NzAxODY3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Office interior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#8B4556]/10 flex items-center justify-center">
                    <div className="bg-white/95 rounded-2xl p-6 text-center shadow-lg">
                      <MapPin className="text-[#8B4556] mx-auto mb-2" size={32} />
                      <p className="text-[#3D2E29] font-serif text-lg">Our Office</p>
                      <p className="text-[#6B5B56] text-sm">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Description */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-serif text-[#3D2E29] mb-4">
                  Visit Our Office
                </h3>
                <p className="text-[#6B5B56] mb-4 leading-relaxed">
                  Our office is designed to be a calming, safe space where you can feel 
                  comfortable opening up. We're located in the heart of San Francisco, 
                  easily accessible by public transit with parking available nearby.
                </p>
                <div className="space-y-3 pt-4 border-t border-[#8B4556]/10">
                  <div className="flex items-start space-x-3">
                    <Calendar className="text-[#8B4556] flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-[#3D2E29]">Flexible Scheduling</p>
                      <p className="text-[#6B5B56] text-sm">Evening and weekend appointments available</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-[#8B4556] flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-[#3D2E29]">Easy Access</p>
                      <p className="text-[#6B5B56] text-sm">Near public transit • Free parking</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Info */}
              <div className="bg-gradient-to-br from-[#F7C7D0]/30 to-[#FFD4C4]/30 rounded-3xl p-6 border border-[#8B4556]/20">
                <p className="text-[#3D2E29] mb-2">
                  <strong>Crisis Support:</strong>
                </p>
                <p className="text-[#6B5B56] text-sm">
                  If you're experiencing a mental health emergency, please call 988 (Suicide & Crisis Lifeline) 
                  or go to your nearest emergency room.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
