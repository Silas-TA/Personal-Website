import React from "react";
import { Code, Database, Cloud, BarChart3, Brain, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "blue",
      skills: ["Python", "SQL"],
    },
    {
      icon: Brain,
      title: "Machine Learning",
      color: "green",
      skills: [
        "Supervised Learning",
        "Unsupervised Learning",
        "XGBoost",
        "Ensemble Models",
        "Decision Trees",
        "Random Forest",
        "Linear Regression",
        "Logistic Regression",
      ],
    },
    {
      icon: Database,
      title: "Data Analysis & Tools",
      color: "purple",
      skills: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "K-means Clustering",
        "Hierarchical Clustering",
        "NLTK",
        "IBM SPSS Statistics",
        "Google Analytics 4",
        "A/B Testing",
      ],
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      color: "red",
      skills: [
        "Matplotlib",
        "Seaborn",
        "Tableau",
        "Data Preprocessing",
        "Statistical Analysis",
      ],
    },
    {
      icon: Cloud,
      title: "Tools & Integration",
      color: "teal",
      skills: [
        "API Integration",
        "Web Scraping",
        "Microsoft Office Suite",
        "BPMN",
        "Data Cleaning",
        "Database Management",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-primary-100 text-primary-600 border-primary-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      red: "bg-red-100 text-red-600 border-red-200",
      teal: "bg-teal-100 text-teal-600 border-teal-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
    };
    return (
      colors[color as keyof typeof colors] ||
      "bg-primary-100 text-primary-600 border-primary-200"
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive skill set spanning machine learning, data science, and
            software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(
                      category.color
                    )}`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-2 rounded-full text-sm font-medium ${getColorClasses(
                        category.color
                      )}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Additional Competencies
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-lg font-semibold text-primary-600 mb-3">
                Data Science
              </h4>
              <ul className="text-gray-700 space-y-1">
                <li>Data Preprocessing & Cleaning</li>
                <li>Feature Engineering</li>
                <li>Statistical Analysis</li>
                <li>Predictive Modeling</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary-600 mb-3">
                Business Analysis
              </h4>
              <ul className="text-gray-700 space-y-1">
                <li>Customer Analytics</li>
                <li>Financial Reconciliation</li>
                <li>Process Optimization</li>
                <li>Stakeholder Communication</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary-600 mb-3">
                Technical Skills
              </h4>
              <ul className="text-gray-700 space-y-1">
                <li>Natural Language Processing</li>
                <li>Web Scraping & Automation</li>
                <li>Database Management</li>
                <li>API Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
