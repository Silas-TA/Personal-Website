import React from "react";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Membership Analyst",
      company:
        "Blue Cross Blue Shield of Michigan | Strategic Staffing Solution",
      location: "Kaunas, Kaunas",
      period: "11/2023 - Current",
      type: "Full-time",
      description:
        "Managing customer contracts, pricing structures, and service agreements while providing account management support",
      achievements: [
        "Managed customer contracts, pricing structures, and service agreements to support seamless partner operations",
        "Provided account management support, maintaining a 98% monthly quality assurance rating",
        "Performed financial reconciliations on invoices to ensure billing accuracy",
        "Escalated high-priority cases and collaborated with cross-functional teams to resolve critical issues",
      ],
      technologies: [
        "Account Management",
        "Financial Reconciliation",
        "Quality Assurance",
        "Contract Management",
        "Cross-functional Collaboration",
      ],
    },
    {
      title: "Business Intelligence Analyst",
      company: "Agrovinica",
      location: "Budapest, HU",
      period: "02/2025 - 06/2025",
      type: "Full-time",
      description:
        "Developing business intelligence solutions using NLP, customer segmentation, and web scraping technologies",
      achievements: [
        "Preprocessed a large article corpus using lemmatization and NLP libraries (e.g., NLTK) to extract keywords for a Google Ads campaign",
        "Performed customer segmentation in Google Analytics 4 to identify distinct customer groups",
        "Applied hierarchical clustering to define customer segments based on GA4 data",
        "Developed a web scraping tool with AI assistance (e.g., Claude) to automate data collection",
        "Prepared reports and presentations using Microsoft Office Suite",
      ],
      technologies: [
        "NLP",
        "NLTK",
        "Google Analytics 4",
        "Hierarchical Clustering",
        "Web Scraping",
        "AI Tools",
        "Microsoft Office Suite",
      ],
    },
    {
      title: "Waiter | Kitchen Prep",
      company: "Woodway County Club",
      location: "CT, USA",
      period: "06/2023 - 09/2024",
      type: "Part-time",
      description:
        "Provided exceptional customer service in a hospitality environment while managing financial transactions and maintaining high service standards",
      achievements: [
        "Demonstrated exceptional customer service skills in a hospitality environment",
        "Managed financial transactions, including payment processing, change counting, and receipt issuance",
        "Maintained high standards of food safety and sanitation during food and drink preparation",
        "Prepared dining areas and maintained cleanliness to meet high-quality service standards",
      ],
      technologies: [
        "Customer Service",
        "Financial Transactions",
        "Food Safety",
        "Hospitality Management",
        "Payment Processing",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            1+ years of experience in data science, business intelligence, and
            analytics across healthcare and agricultural sectors
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-primary-600 font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Award className="w-5 h-5 text-primary-600 mr-2" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready for New Opportunities
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            I'm actively seeking opportunities to leverage my data science and
            analytics expertise in challenging roles where I can contribute to
            meaningful projects and continue growing professionally.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
