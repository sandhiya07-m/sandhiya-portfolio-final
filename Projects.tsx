import { Shield, Heart, Activity } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Crime Management System',
      description:
        'A comprehensive system for managing crime records with secure authentication and data protection. Features include case tracking, report generation, and role-based access control.',
      tech: ['Java', 'MySQL', 'JDBC', 'Authentication'],
      icon: Shield,
      gradient: 'from-red-500 to-orange-500',
    },
    {
      title: 'Heart Disease Prediction',
      description:
        'Machine learning-based application that predicts heart disease risk using patient health data. Implements various ML algorithms to provide accurate health assessments.',
      tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas'],
      icon: Heart,
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Multiple Disease Prediction',
      description:
        'An integrated healthcare solution that predicts multiple diseases including diabetes, heart disease, and more. Uses ensemble learning techniques for improved accuracy.',
      tech: ['Python', 'ML', 'Streamlit', 'NumPy'],
      icon: Activity,
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center text-primary">Projects</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Featured work and experiments
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              {/* Project Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <project.icon size={28} className="text-white" />
              </div>

              {/* Project Title */}
              <h3 className="font-display font-semibold text-xl mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
