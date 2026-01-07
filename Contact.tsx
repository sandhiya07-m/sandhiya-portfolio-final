import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:sandhiya.m2401@gmail.com',
      label: 'sandhiya.m2401@gmail.com',
      color: 'from-red-500 to-orange-500',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/sandhiya07-m',
      label: 'github.com/sandhiya07-m',
      color: 'from-gray-400 to-gray-600',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sandhiyam24/',
      label: 'linkedin.com/in/sandhiyam24',
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title text-center text-primary">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Let's connect and create something amazing together
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.name === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-300`}>
                <link.icon size={28} className="text-white" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {link.name}
              </h3>
              <p className="text-sm text-muted-foreground break-all">
                {link.label}
              </p>
            </a>
          ))}
        </div>

        {/* Glowing Social Icons */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.name === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="social-icon group relative"
              aria-label={link.name}
            >
              <link.icon size={24} className="group-hover:scale-110 transition-transform" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
