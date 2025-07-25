import React from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 pt-20 md:pt-24">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[70vh] flex flex-col justify-center space-y-8 md:space-y-12">
          {/* Top - Name & Title */}
          <div className="text-center space-y-3 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight px-2">
              Silas Taiwo-Adeyemo
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-primary-200 font-bold px-2">
              Data Scientist & ML Engineer
            </p>
          </div>

          {/* Bottom - Image with Description Left and Links Right */}
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-center">
            {/* Left - Description */}
            <div className="lg:text-right text-center space-y-3 md:space-y-4 order-2 lg:order-1 px-2">
              <p className="text-base md:text-lg text-blue-100 leading-relaxed">
                Business Informatics graduate with 1+ years of experience in
                data science and machine learning
              </p>
              <p className="text-sm md:text-base text-blue-50 leading-relaxed">
                Skilled in developing data-driven decision solutions using
                Python, SQL, and data visualization techniques, with a proven
                ability to analyze complex data and present actionable insights
                to stakeholders.
              </p>
            </div>

            {/* Center - Profile Photo */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative">
                <img
                  src="/silas.jpeg"
                  alt="Silas Taiwo-Adeyemo"
                  className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/20 to-blue-500/20"></div>
              </div>
            </div>

            {/* Right - Social Links & Buttons */}
            <div className="text-center lg:text-left space-y-4 md:space-y-6 order-3 px-2">
              <div className="flex flex-col gap-2 md:gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs md:text-sm"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 font-medium rounded-lg transition-all duration-300 transform hover:scale-105 text-xs md:text-sm"
                >
                  View Projects
                </a>
              </div>

              <div className="flex justify-center lg:justify-start space-x-3 md:space-x-4 pt-2 md:pt-4">
                <a
                  href="https://github.com/Silas-TA"
                  className="p-2 md:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} className="md:w-5 md:h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/silas-taiwo-adeyemo-105a5023a/"
                  className="p-2 md:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} className="md:w-5 md:h-5" />
                </a>
                <a
                  href="mailto:taiwoadeyemosilas@gmail.com"
                  className="p-2 md:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Mail size={18} className="md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-white/80 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
