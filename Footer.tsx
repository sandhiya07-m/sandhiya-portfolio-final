import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="font-display font-bold text-primary">SM</span>
            <span className="text-sm">
              © {currentYear} Sandhiya M. All rights reserved.
            </span>
          </div>

          {/* Made With Love */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> and lots of code
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sandhiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/sandhiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sandhiya@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
