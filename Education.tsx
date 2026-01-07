import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center text-primary">Education</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Academic journey and achievements
        </p>

        <div className="max-w-3xl mx-auto">
          {/* Main Education Card */}
          <div className="glass-card p-8 relative overflow-hidden">
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-bl-full" />
            
            <div className="flex items-start gap-6 relative z-10">
              {/* Icon */}
              <div className="p-4 rounded-2xl bg-primary/10 text-primary shrink-0">
                <GraduationCap size={40} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold mb-2">
                  B.E Computer Science and Design
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  Pursuing excellence in computer science with a focus on design thinking
                </p>

                {/* Details */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    <span className="text-muted-foreground">2nd Year Undergraduate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-primary" />
                    <span className="text-muted-foreground">
                      CGPA: <span className="text-primary font-semibold">7.7</span>
                    </span>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Academic Progress</span>
                    <span className="text-primary">Year 2 of 4</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Coursework */}
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="font-display font-semibold mb-4">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'Data Structures',
                  'Algorithms',
                  'Database Systems',
                  'Web Development',
                  'Object-Oriented Programming',
                  'Machine Learning',
                ].map((course, index) => (
                  <span key={index} className="skill-tag">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
