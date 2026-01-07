import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Greeting */}
        <div className="mb-6 animate-float">
          <span className="text-6xl">👋</span>
        </div>
        
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Hi, I'm{' '}
          <span className="gradient-text">Sandhiya M</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-body">
          Aspiring Software Developer | Web & Java Enthusiast
        </p>
        
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          A passionate 2nd-year Computer Science & Engineering student crafting digital experiences 
          and solving real-world problems through code.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#projects" className="neural-button text-primary-foreground font-display">
            View Projects
          </a>
          <a href="#contact" className="neural-button-outline font-display">
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
