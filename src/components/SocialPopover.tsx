
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Github, Mail, Medium } from "lucide-react";

export function SocialPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="lg">
          Connect
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-56 p-4 space-y-3">
        <a
          href="https://medium.com/@siryajumwa"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-accent transition"
        >
          <Medium size={18} /> <span>Medium</span>
        </a>
        <a
          href="https://github.com/umiSirya"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-accent transition"
        >
          <Github size={18} /> <span>GitHub</span>
        </a>
        <a
          href="mailto:siryajumwa@gmail.com"
          className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-accent transition"
        >
          <Mail size={18} /> <span>siryajumwa@gmail.com</span>
        </a>
      </PopoverContent>
    </Popover>
  );
}
