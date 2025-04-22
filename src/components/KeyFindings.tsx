
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function KeyFindings() {
  const findings = [
    {
      title: "1 in 3 Reported Crimes Involve a Child Victim",
      description: "29% of all reported crimes in Los Angeles involve child victims, while 71% of the reported crimes involve adult victims."
    },
    {
      title: "Age Groups Most Affected",
      description: "Children aged 13–17 years are the most affected, accounting for 38% of cases, followed by those aged 6-12 at 33%."
    },
    {
      title: "Low Arrest Rate",
      description: "Only 27% of reported child-related crimes result in adult arrests, highlighting a significant gap in accountability and enforcement."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {findings.map((finding, index) => (
        <Card key={index} className="bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-primary">{finding.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{finding.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
