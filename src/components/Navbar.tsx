
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  toggleTheme: () => void;
  theme: string;
}

export function Navbar({ toggleTheme, theme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-lg md:text-xl font-semibold">
          Child Crime Analysis in LA
        </h1>
        
        <div className="flex items-center space-x-4">
          <a 
            href="https://catalog.data.gov/dataset/crime-data-from-2020-to-present" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm md:text-base hover:text-primary transition-colors"
          >
            Dataset
          </a>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>
      </div>
    </nav>
  );
}
