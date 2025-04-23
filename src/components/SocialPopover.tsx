
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Medium, Github, Mail } from "lucide-react";

export function SocialPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">Connect</Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col items-stretch space-y-2 w-56">
        <Button
          variant="ghost"
          asChild
          className="justify-start"
        >
          <a
            href="https://medium.com/@YOUR_MEDIUM_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Medium className="mr-2" size={18} />
            Medium
          </a>
        </Button>
        <Button
          variant="ghost"
          asChild
          className="justify-start"
        >
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2" size={18} />
            Github
          </a>
        </Button>
        <Button
          variant="ghost"
          asChild
          className="justify-start"
        >
          <a
            href="mailto:YOUR_EMAIL@example.com"
          >
            <Mail className="mr-2" size={18} />
            Email
          </a>
        </Button>
      </PopoverContent>
    </Popover>
  );
}
