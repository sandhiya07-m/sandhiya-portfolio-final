const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'SQL', 'JavaScript'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Web Technologies',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'MySQL'],
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Soft Skills',
      skills: ['Communication', 'Teamwork', 'Problem Solving', 'Time Management'],
      color: 'from-orange-500 to-yellow-500',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center text-primary">Skills</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Technologies and abilities I've developed
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:border-primary/40 transition-all duration-500 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                <h3 className="font-display font-semibold text-xl">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-tag"
                    style={{ animationDelay: `${skillIndex * 100}ms` }}
                  >
                    {skill}
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

export default Skills;
