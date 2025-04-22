
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleIcon, FileChartColumnIcon, AlertCircleIcon } from "lucide-react";

export function KeyFindings() {
  const findings = [
    {
      title: "1 in 3 Reported Crimes Involve a Child Victim",
      description: "29% of all reported crimes in Los Angeles involve child victims, while 71% of the reported crimes involve adult victims.",
      icon: <CircleIcon className="w-12 h-12 text-red-500/80" />,
      color: "from-red-500/20 to-red-500/10"
    },
    {
      title: "Age Groups Most Affected",
      description: "Children aged 13–17 years are the most affected, accounting for 38% of cases, followed by those aged 6-12 at 33%.",
      icon: <FileChartColumnIcon className="w-12 h-12 text-blue-500/80" />,
      color: "from-blue-500/20 to-blue-500/10"
    },
    {
      title: "Low Arrest Rate",
      description: "Only 27% of reported child-related crimes result in adult arrests, highlighting a significant gap in accountability and enforcement.",
      icon: <AlertCircleIcon className="w-12 h-12 text-amber-500/80" />,
      color: "from-amber-500/20 to-amber-500/10"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {findings.map((finding, index) => (
        <Card 
          key={index} 
          className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br ${finding.color} border-none`}
        >
          <div className="absolute top-4 right-4 opacity-70">
            {finding.icon}
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-semibold leading-tight text-primary">
              {finding.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {finding.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
