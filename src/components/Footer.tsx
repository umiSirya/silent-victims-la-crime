
import { Mail, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 py-10 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground">
          <a 
            href="https://medium.com/@siryajumwa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z"></path>
              <circle cx="12" cy="11" r="1"></circle>
              <path d="M12 8v6"></path>
              <circle cx="12" cy="16" r="1"></circle>
            </svg>
            <span>Medium</span>
          </a>
          
          <a 
            href="https://github.com/umiSirya" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          
          <a 
            href="mailto:siryajumwa@gmail.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail size={18} />
            <span>siryajumwa@gmail.com</span>
          </a>
        </div>
        
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Child Crime Analysis in LA</p>
        </div>
      </div>
    </footer>
  );
}
