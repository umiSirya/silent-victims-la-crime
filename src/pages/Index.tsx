
import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DashboardSelector } from "@/components/DashboardSelector";
import { GeoDashboard } from "@/components/GeoDashboard";
import { KeyFindings } from "@/components/KeyFindings";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary">
              Silent Victims: Analyzing Child-Targeted Crimes in Los Angeles
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive analysis of crimes targeting children in Los Angeles, providing insights into patterns, 
              trends, and potential interventions to protect our most vulnerable population.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <a href="https://www.canva.com/design/DAGlLsbvI2c/oryEE56uj6PxOjUm2SAKGw/edit?utm_content=DAGlLsbvI2c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  View Full Report
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://public.tableau.com/views/final_dashboard_17452685691280/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  Open Dashboard
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/bcacbe82-4cf1-4d4b-a9c0-93039f079188.png" 
              alt="Children together" 
              className="rounded-lg shadow-lg w-full h-auto object-cover max-w-md"
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 md:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Interactive Dashboard</h2>
          <DashboardSelector />
        </div>
      </section>
      
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Key Findings</h2>
          <KeyFindings />
        </div>
      </section>
      
      <section className="py-16 px-4 md:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Geographical Patterns</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
            Our analysis reveals concentrated hotspots of child-targeted crimes in specific neighborhoods, 
            with significant variations across different districts of Los Angeles.
          </p>
          <GeoDashboard />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
