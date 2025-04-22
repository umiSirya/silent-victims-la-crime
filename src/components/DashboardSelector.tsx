
import { useState, useEffect } from "react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { loadTableauViz, resizeTableauViz } from "@/utils/tableau";
import { TableauLoadingStatus } from "@/components/TableauLoadingStatus";

interface Dashboard {
  id: string; 
  title: string;
  embedCode: string;
}

export function DashboardSelector() {
  const [selectedDashboard, setSelectedDashboard] = useState<string>("main");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const dashboards: Record<string, Dashboard> = {
    main: {
      id: "viz1745310187828",
      title: "Main Dashboard",
      embedCode: `<div class='tableauPlaceholder' id='viz1745310187828' style='position: relative'><noscript><a href='#'><img alt='Dashboard 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;fi&#47;final_dashboard_17452685691280&#47;Dashboard1&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='final_dashboard_17452685691280&#47;Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;fi&#47;final_dashboard_17452685691280&#47;Dashboard1&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>`
    },
    typesOfCrimes: {
      id: "viz1745315214315",
      title: "Types of Crimes Against Children",
      embedCode: `<div class='tableauPlaceholder' id='viz1745315214315' style='position: relative'><noscript><a href='#'><img alt='Types of Crimes Against Children  ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ty&#47;TypesofCrimesAgainstChildren&#47;TypesofCrimesAgainstChildren&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='TypesofCrimesAgainstChildren&#47;TypesofCrimesAgainstChildren' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ty&#47;TypesofCrimesAgainstChildren&#47;TypesofCrimesAgainstChildren&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>`
    },
    numberOfCases: {
      id: "viz1745315236442",
      title: "Number of Cases Reported",
      embedCode: `<div class='tableauPlaceholder' id='viz1745315236442' style='position: relative'><noscript><a href='#'><img alt='Number of Cases Reported  ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Nu&#47;NumberofCasesReported&#47;NumberofCasesReported&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='NumberofCasesReported&#47;NumberofCasesReported' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Nu&#47;NumberofCasesReported&#47;NumberofCasesReported&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>`
    },
    genderBreakdown: {
      id: "viz1745315281486",
      title: "Gender Breakdown of Victims",
      embedCode: `<div class='tableauPlaceholder' id='viz1745315281486' style='position: relative'><noscript><a href='#'><img alt='Gender Breakdown of victims ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ge&#47;GenderBreakdownofVictims&#47;GenderBreakdownofvictims&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='GenderBreakdownofVictims&#47;GenderBreakdownofvictims' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ge&#47;GenderBreakdownofVictims&#47;GenderBreakdownofvictims&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>`
    },
    victimAge: {
      id: "viz1745315314333",
      title: "Victim Age Across Different Descents",
      embedCode: `<div class='tableauPlaceholder' id='viz1745315314333' style='position: relative'><noscript><a href='#'><img alt=' Victim Age Across Different Descents ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Vi&#47;VictimsAgeAcrossDifferentDescent&#47;VictimAgeAcrossDifferentDescents&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='VictimsAgeAcrossDifferentDescent&#47;VictimAgeAcrossDifferentDescents' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Vi&#47;VictimsAgeAcrossDifferentDescent&#47;VictimAgeAcrossDifferentDescents&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>`
    },
    ageBreakdown: {
      id: "viz1745315339457",
      title: "Age Breakdown of Child Victims",
      embedCode: `<div class='tableauPlaceholder' id='viz1745315339457' style='position: relative'><noscript><a href='#'><img alt=' Age Breakdown of Child Victims ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;ND&#47;ND63SW7H6&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='path' value='shared&#47;ND63SW7H6' /> <param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;ND&#47;ND63SW7H6&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>`
    },
    weapons: {
      id: "viz1745315370724",
      title: "Most Common Weapons Used",
      embedCode: `<div class='tableauPlaceholder' id='viz1745315370724' style='position: relative'><noscript><a href='#'><img alt='Most Common Weapons Used in Crimes Against Children ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Mo&#47;MostCommonWeaponsUsedinCrimesAgainstChildren&#47;MostCommonWeaponsUsedinCrimesAgainstChildren6&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='MostCommonWeaponsUsedinCrimesAgainstChildren&#47;MostCommonWeaponsUsedinCrimesAgainstChildren6' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Mo&#47;MostCommonWeaponsUsedinCrimesAgainstChildren&#47;MostCommonWeaponsUsedinCrimesAgainstChildren6&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>`
    },
    locations: {
      id: "viz1745315402856",
      title: "Common Locations of Child Victimization",
      embedCode: `<div class='tableauPlaceholder' id='viz1745315402856' style='position: relative'><noscript><a href='#'><img alt='Common Locations of Child Victimization ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Co&#47;CommonLocationsofChildVictimization&#47;CommonLocationsofChildVictimization&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='CommonLocationsofChildVictimization&#47;CommonLocationsofChildVictimization' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Co&#47;CommonLocationsofChildVictimization&#47;CommonLocationsofChildVictimization&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>`
    },
    proportions: {
      id: "viz1745315435086",
      title: "Proportion of Child vs Adult Victims",
      embedCode: `<div class='tableauPlaceholder' id='viz1745315435086' style='position: relative'><noscript><a href='#'><img alt='Proportion of Crimes Involving Child vs Adult Victims ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Pr&#47;PropotionsofChildvsAdultCrimes&#47;ProportionofCrimesInvolvingChildvsAdultVictims&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='PropotionsofChildvsAdultCrimes&#47;ProportionofCrimesInvolvingChildvsAdultVictims' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Pr&#47;PropotionsofChildvsAdultCrimes&#47;ProportionofCrimesInvolvingChildvsAdultVictims&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>`
    }
  };

  // Handle loading the Tableau scripts
  useEffect(() => {
    if (isLoaded) {
      const dashboard = dashboards[selectedDashboard];
      loadTableauViz('dashboard-container', dashboard.embedCode);
      
      // Handle responsive sizing
      window.addEventListener('resize', () => {
        resizeTableauViz('dashboard-container');
      });
      
      // Initial sizing
      setTimeout(() => {
        resizeTableauViz('dashboard-container');
      }, 1000);
    } else {
      setIsLoaded(true);
    }
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', () => {
        resizeTableauViz('dashboard-container');
      });
    };
  }, [selectedDashboard, isLoaded]);

  const reloadDashboard = () => {
    const dashboard = dashboards[selectedDashboard];
    loadTableauViz('dashboard-container', dashboard.embedCode);
    
    // Apply responsive sizing
    setTimeout(() => {
      resizeTableauViz('dashboard-container');
    }, 500);
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Select visualization:
        </label>
        <Select 
          value={selectedDashboard} 
          onValueChange={(value) => setSelectedDashboard(value)}
        >
          <SelectTrigger className="w-full md:w-[350px]">
            <SelectValue placeholder="Select a dashboard" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(dashboards).map(([key, dashboard]) => (
              <SelectItem key={key} value={key}>
                {dashboard.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div id="dashboard-container" className="w-full h-[600px] md:h-[700px] lg:h-[800px] border rounded-lg overflow-hidden bg-card/50">
        {/* Dashboard will be loaded here */}
      </div>
      
      <TableauLoadingStatus 
        containerIds={['dashboard-container']} 
        onReload={reloadDashboard} 
      />
    </div>
  );
}
