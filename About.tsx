import { Code, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building modern, responsive web applications with React and cutting-edge technologies.',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Passionate about algorithmic thinking and finding elegant solutions to complex problems.',
    },
    {
      icon: Heart,
      title: 'Healthcare Tech',
      description: 'Interested in applying technology to healthcare for meaningful real-world impact.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center text-primary">About Me</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Get to know me better
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a <span className="text-primary font-semibold">Computer Science & Engineering student</span> in 
              my 2nd year, driven by curiosity and a passion for building things that matter.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              My journey in tech started with a simple "Hello World" and has evolved into creating 
              full-fledged applications. I'm particularly fascinated by <span className="text-primary font-semibold">web development</span> and 
              the endless possibilities it offers to solve real-world problems.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              projects, or dreaming up the next big idea. I believe technology can transform 
              healthcare and improve lives – that's what drives me forward.
            </p>

          </div>

          {/* Highlight Cards */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 flex items-start gap-4 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
