import React from 'react';
import { ArrowRight, Shield, Globe, Cpu, Clock, Users, Trophy, Target, Zap, MessageSquare, Cloud, Code, BarChart as ChartBar, Lock, Rocket, Database } from 'lucide-react';

const Home = () => {
  const features = [
    { icon: Shield, title: "Security", description: "This is clearly a No Log Service. We respect your privacy" },
    { icon: Globe, title: "Global Reach", description: "Serving clients all across Pakistan" },
    { icon: Cpu, title: "Support Integration", description: "Contact our Team via Contact us page" },
    { icon: Clock, title: "24/7 Support", description: "Round-the-clock technical assistance" },
    { icon: Users, title: "Dedicated Teams", description: "Specialized experts for your projects" },
    { icon: Trophy, title: "Award-winning", description: "Recognized industry excellence" },
    { icon: Target, title: "Custom Solutions", description: "Tailored to your specific needs" },
    { icon: Zap, title: "Fast Delivery", description: "Quick and Fast delivery rate" },
    { icon: MessageSquare, title: "Consultation", description: "Expert guidance and planning" },
    { icon: Cloud, title: "Multiple Vendors", description: "We have many vendors working with us." },
    { icon: Code, title: "Clean Record", description: "You will face no issues!" },
    { icon: ChartBar, title: "Analytics", description: "Data-driven insights" },
    { icon: Lock, title: "Compliance", description: "Best compliance" },
    { icon: Rocket, title: "Trsuted", description: "100% Trusted services." },
    { icon: Database, title: "Data Management", description: "We keep no data after delivering your order." }
  ];

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-wider animate-fade-in">
          SIYAH INCORPORATE
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl animate-fade-in-delayed font-light">
          #01 Biggest Panel of Pakistan, It's time to catch scammers and digital gangsters.
        </p>
        <div className="mt-12 space-x-4 animate-fade-in-delayed">
          <a href="https://sb1eqzxumqr-zklk--5173--1b4252dd.local-corp.webcontainer.io/orders">
          <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors" >
            Explore Services
          </button>
          </a>
          <a href="https://sb1eqzxumqr-zklk--5173--1b4252dd.local-corp.webcontainer.io/contact">
          <button className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
            Contact Us
          </button>
          </a>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
            Why Choose Siyah
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 bg-black/20 rounded-xl backdrop-blur-sm hover:bg-white/5 transition-all duration-300">
                <feature.icon className="w-8 h-8 mb-4 text-white/80 group-hover:text-white transition-colors" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Submit Order", description: "Decide what services you need and submit your order" },
              { number: "02", title: "Payment", description: "Pay us Through Cryptocurrency" },
              { number: "03", title: "WhatsApp", description: "Contact us via Whatsapp and send payment proof" },
              { number: "04", title: "Delivery", description: "Delivery will take 1-24 hours max. depending upon service" }
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="text-6xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold mt-4">{step.title}</h3>
                <p className="text-gray-400 mt-2 font-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Clients Worldwide" },
              { number: "250+", label: "Projects Completed" },
              { number: "15+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold">{stat.number}</div>
                <div className="text-gray-300 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Ready to Teach scammer's a Lesson?
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-light">
           Join the ranks of top-notch professionals who trust Siyah Incorporate for their technological needs.
          </p>
          <a href="https://sb1eqzxumqr-zklk--5173--1b4252dd.local-corp.webcontainer.io/orders">
          <button className="px-12 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
            Get Started Today
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;