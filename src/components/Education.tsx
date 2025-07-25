import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Informatic Systems",
      school: "Vytautas Magnus University",
      location: "Kaunas, Lithuania",
      period: "2021 - 2025",
      gpa: "8/10",
      specialization: "Business Informatics",
      coursework: [
        "Data Science & Analytics",
        "Business Process Modeling (BPMN)",
        "Database Systems",
        "Statistical Analysis",
        "Information Systems",
        "Business Intelligence"
      ],
      thesis: ""
    },
    {
      degree: "Joint Program in Data Science",
      school: "Vytautas Magnus University & Silesia University",
      location: "Kaunas, Lithuania & Katowice, Poland",
      period: "Oct 2023",
      gpa: "8/10",
      specialization: "Transform 4 Europe Program",
      coursework: [
        "Data Preprocessing & Cleaning",
        "Statistical Analysis",
        "Machine Learning (Supervised & Unsupervised)",
        "Data Visualization",
        "Decision Trees & Neural Networks",
        "Analytics & Insights"
      ],
      thesis: ""
    }
  ];

  const certifications = [
    "Data Science Specialization - Transform 4 Europe",
    "Business Intelligence & Analytics",
    "Google Analytics 4 Certified",
    "IBM SPSS Statistics"
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Strong academic foundation in computer science with specialized focus on machine learning and AI
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-lg text-primary-600 font-medium">{edu.school}</p>
                      <p className="text-gray-700">{edu.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-700 font-medium">{edu.period}</p>
                      <p className="text-gray-900 font-semibold">GPA: {edu.gpa}</p>
                    </div>
                  </div>

                  {edu.specialization && (
                    <div className="mb-4">
                      <p className="text-gray-700 font-medium">
                        Specialization: <span className="text-primary-600">{edu.specialization}</span>
                      </p>
                    </div>
                  )}

                  {edu.thesis && (
                    <div className="mb-4">
                      <p className="text-gray-700 font-medium mb-1">Thesis:</p>
                      <p className="text-gray-700 italic">{edu.thesis}</p>
                    </div>
                  )}

                  <div>
                    <p className="text-gray-700 font-medium mb-2">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3">
                <BookOpen className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;