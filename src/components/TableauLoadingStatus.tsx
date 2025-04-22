
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface TableauLoadingStatusProps {
  containerIds: string[];
  onReload: () => void;
}

export function TableauLoadingStatus({ containerIds, onReload }: TableauLoadingStatusProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const checkLoading = () => {
      for (const id of containerIds) {
        const container = document.getElementById(id);
        if (container) {
          const viz = container.querySelector('.tableauViz');
          if (!viz || viz.getAttribute('style')?.includes('display:none')) {
            return false;
          }
        }
      }
      return true;
    };

    // Check loading status after some time
    const timer = setTimeout(() => {
      setIsLoaded(checkLoading());
    }, 5000);

    return () => clearTimeout(timer);
  }, [containerIds]);

  if (isLoaded) {
    return null;
  }

  return (
    <div className="mt-4 flex items-center justify-center">
      <div className="bg-muted/80 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center gap-2">
        <p className="text-sm text-muted-foreground">
          Having trouble viewing the visualizations?
        </p>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onReload}
          className="text-xs flex items-center gap-1"
        >
          <RefreshCw size={14} />
          <span>Reload</span>
        </Button>
      </div>
    </div>
  );
}
