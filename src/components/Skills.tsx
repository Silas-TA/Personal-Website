import React from "react";
import { Code, Database, Cloud, BarChart3, Brain, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "Machine Learning",
      color: "blue",
      skills: [
        { name: "Supervised Learning", level: 90 },
        { name: "Unsupervised Learning", level: 88 },
        { name: "Linear Regression", level: 92 },
        { name: "Logistic Regression", level: 90 },
        { name: "Decision Trees", level: 88 },
        { name: "Random Forest & XGBoost", level: 85 },
      ],
    },
    {
      icon: Code,
      title: "Programming",
      color: "green",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 88 },
        { name: "NumPy", level: 90 },
        { name: "Pandas", level: 92 },
        { name: "Scikit-learn", level: 88 },
        { name: "NLTK", level: 80 },
      ],
    },
    {
      icon: Cpu,
      title: "Analytics & Tools",
      color: "purple",
      skills: [
        { name: "IBM SPSS Statistics", level: 85 },
        { name: "Google Analytics 4", level: 88 },
        { name: "A/B Experimentation", level: 80 },
        { name: "K-means Clustering", level: 85 },
        { name: "Hierarchical Clustering", level: 88 },
        { name: "Microsoft Office Suite", level: 95 },
      ],
    },
    {
      icon: Database,
      title: "Data Visualization",
      color: "red",
      skills: [
        { name: "Matplotlib", level: 88 },
        { name: "Seaborn", level: 90 },
        { name: "Tableau", level: 85 },
        { name: "Data Preprocessing", level: 92 },
        { name: "Report Preparation", level: 95 },
        { name: "Presentation Skills", level: 90 },
      ],
    },
    {
      icon: Cloud,
      title: "Process Modeling",
      color: "teal",
      skills: [
        { name: "BPMN", level: 80 },
        { name: "UML", level: 75 },
        { name: "Business Process Analysis", level: 85 },
        { name: "Requirements Gathering", level: 80 },
        { name: "System Design", level: 75 },
        { name: "Documentation", level: 88 },
      ],
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      color: "orange",
      skills: [
        { name: "Customer Segmentation", level: 90 },
        { name: "Financial Analysis", level: 85 },
        { name: "Quality Assurance", level: 95 },
        { name: "Data-driven Insights", level: 88 },
        { name: "Stakeholder Reporting", level: 90 },
        { name: "Web Scraping", level: 80 },
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

  const getProgressColor = (color: string) => {
    const colors = {
      blue: "bg-primary-600",
      green: "bg-green-600",
      purple: "bg-purple-600",
      red: "bg-red-600",
      teal: "bg-teal-600",
      orange: "bg-orange-600",
    };
    return colors[color as keyof typeof colors] || "bg-primary-600";
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

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-900 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-primary-600 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${getProgressColor(
                            category.color
                          )}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
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

        {/* ML Engineer Meme */}
        <div className="mt-16 text-center">
          <div className="max-w-md mx-auto">
            <img
              src="/ml_engineer.jpeg"
              alt="ML Engineer Meme"
              className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            />
            <p className="mt-4 text-gray-600 italic text-sm">
              How it feels to be an ML Engineer 😄
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
