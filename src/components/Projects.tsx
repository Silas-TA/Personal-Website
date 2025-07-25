import React from "react";
import { Github, ExternalLink, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Housing Price Prediction Model",
      description:
        "Developed a housing price prediction model for a Kaggle challenge using XGBoost algorithm, achieving an impressive RMSE score of 0.14.",
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "XGBoost", "Pandas", "NumPy", "Scikit-learn"],
      features: [
        "RMSE score of 0.14 on Kaggle challenge",
        "Hyperparameter tuning and model optimization",
        "Comprehensive model evaluation and validation",
      ],
      github:
        "https://github.com/Silas-TA/Housing-Price-Prediction-using-XGBoost",
      demo: "https://github.com/Silas-TA/Housing-Price-Prediction-using-XGBoost",
      status: "Completed",
    },
    {
      title: "Article Clustering and Text Analysis",
      description:
        "Built a comprehensive article segmentation model using machine learning techniques such as heirarchical and k-means clustering to identify distinct customer groups and optimize marketing strategies.",
      image:
        "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Python",
        "NLTK",
        "K-means",
        "Hierarchical Clustering",
        "Scikit-learn",
        "Pandas",
      ],
      features: [
        "Processed over 3,000 articles using NLTK preprocessing",
        "Applied hierarchical and k-means clustering for topic grouping",
        "Discovered topic variance across article dataset",
        "Extracted popular keywords for SEO optimization strategies",
      ],
      github: "https://github.com/Silas-TA/Blog-Post-Analysis",
      demo: "https://github.com/Silas-TA",
      status: "Completed",
    },
    {
      title: "Twitter Sentiment Analysis",
      description:
        "Real-time Twitter sentiment analysis application with both command-line and GUI interfaces, using Twitter API v2 to analyze public sentiment on any keyword or handle.",
      image:
        "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Python",
        "Tweepy",
        "TextBlob",
        "Tkinter",
        "Twitter API v2",
        "Natural Language Processing",
      ],
      features: [
        "Real-time Twitter data retrieval using Twitter API v2",
        "Dual interfaces: command-line and GUI applications",
        "Text preprocessing and cleaning with regex patterns",
        "Sentiment classification with percentage breakdown",
        "Sample tweet display for each sentiment category",
        "Secure API key management with environment variables",
      ],
      github: "https://github.com/Silas-TA/Twitter-Sentiment",
      demo: "https://github.com/Silas-TA/Twitter-Sentiment",
      status: "Completed",
    },
    {
      title: "Student Performance Prediction",
      description:
        "Developed a simple linear regression model to determine student performance based on key metrics including study hours, previous scores, and extracurricular activities.",
      image:
        "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Python",
        "Scikit-learn",
        "Linear Regression",
        "Pandas",
        "Matplotlib",
      ],
      features: [
        "Linear regression model implementation",
        "Multiple feature analysis (study hours, scores, activities)",
        "Performance prediction and evaluation",
        "Data visualization and insights",
      ],
      github: "https://github.com/Silas-TA",
      demo: "https://github.com/Silas-TA",
      status: "Completed",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A showcase of machine learning projects demonstrating practical
            application of AI techniques
          </p>
          <p className="text-primary-600 mt-2">
            <em>
              GitHub repository links will be added once projects are made
              public
            </em>
          </p>
        </div>

        {/* ML Engineer Meme */}
        <div className="text-center mb-12">
          <div className="max-w-md mx-auto">
            <img
              src="/ml_engineer.jpeg"
              alt="ML Engineer Meme"
              className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Silas-TA"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
