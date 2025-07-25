import React from 'react';
import { Brain, Code, Database, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI/ML Expertise',
      description: 'Deep understanding of machine learning algorithms, neural networks, and AI applications'
    },
    {
      icon: Code,
      title: 'Technical Skills',
      description: 'Proficient in Python, R, SQL with experience in modern ML frameworks and tools'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Experience with data pipelines, ETL processes, and big data technologies'
    },
    {
      icon: TrendingUp,
      title: 'Problem Solving',
      description: 'Analytical mindset with a passion for solving complex business problems with data'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            I'm a passionate machine learning engineer dedicated to creating intelligent solutions 
            that make a positive impact on businesses and society.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p>
                My journey into data science and machine learning began during my Business Informatics studies 
                at Vytautas Magnus University, where I discovered the incredible potential of data-driven 
                solutions to transform business operations and solve complex problems.
              </p>
              <p>
                Through my experience as a Business Intelligence Analyst at Agrovinica and Membership Analyst 
                at Blue Cross Blue Shield of Michigan, I've developed expertise in customer segmentation, 
                NLP preprocessing, and financial data analysis, maintaining a 98% quality assurance rating.
              </p>
              <p>
                I specialize in supervised and unsupervised learning techniques, with hands-on experience 
                in Python, SQL, and data visualization. My projects include housing price prediction models, 
                customer segmentation analysis, and sentiment analysis systems.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What I'm Looking For
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-lg font-semibold text-primary-600 mb-2">Growth Opportunities</h4>
              <p className="text-gray-700">
                Seeking roles where I can expand my ML expertise while contributing to meaningful projects
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary-600 mb-2">Collaborative Environment</h4>
              <p className="text-gray-700">
                Eager to work with talented teams that value innovation, learning, and knowledge sharing
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary-600 mb-2">Real Impact</h4>
              <p className="text-gray-700">
                Passionate about building AI solutions that solve real problems and create value
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;