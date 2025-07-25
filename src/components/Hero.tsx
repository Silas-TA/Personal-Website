import React from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-center min-h-[80vh]">
          {/* Left Side - Description */}
          <div className="lg:text-right text-center space-y-6 order-2 lg:order-1">
            <p className="text-xl text-blue-100 leading-relaxed">
              Business Informatics graduate with 1+ years of experience in data
              science and machine learning
            </p>
            <p className="text-lg text-blue-50 leading-relaxed">
              Skilled in developing data-driven decision solutions using Python,
              SQL, and data visualization techniques, with a proven ability to
              analyze complex data and present actionable insights to
              stakeholders.
            </p>
            <div className="flex justify-center lg:justify-end space-x-4">
              <a
                href="https://github.com/Silas-TA"
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/silas-taiwo-adeyemo-105a5023a/"
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:taiwoadeyemosilas@gmail.com"
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Center - Profile Photo */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <img
                src="/silas.jpeg"
                alt="Silas Taiwo-Adeyemo"
                className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white/20 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/20 to-blue-500/20"></div>
            </div>
          </div>

          {/* Right Side - Name & Title */}
          <div className="text-center lg:text-left space-y-6 order-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Silas Taiwo-Adeyemo
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-primary-200 text-2xl sm:text-3xl lg:text-4xl mt-2">
                Data Scientist & ML Engineer
              </span>
            </h1>
            <p className="text-sm text-blue-200 italic">
              (yes, it's quite a journey!)
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 font-medium rounded-lg transition-all duration-300 transform hover:scale-105 text-sm"
              >
                View Projects
              </a>
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
