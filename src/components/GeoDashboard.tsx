
import { useEffect, useState } from "react";
import { loadTableauViz, resizeTableauViz } from "@/utils/tableau";
import { TableauLoadingStatus } from "@/components/TableauLoadingStatus";

export function GeoDashboard() {
  useEffect(() => {
    const embedCode = `<div class='tableauPlaceholder' id='viz1745315623144' style='position: relative'><noscript><a href='#'><img alt='Dashboard 2 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Si&#47;SilentVictimsAnalyzingChild-TargetedCrimesinLA&#47;Dashboard2&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='path' value='views&#47;SilentVictimsAnalyzingChild-TargetedCrimesinLA&#47;Dashboard2?:language=en-US&amp;:embed=true&amp;:sid=&amp;:redirect=auth' /> <param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Si&#47;SilentVictimsAnalyzingChild-TargetedCrimesinLA&#47;Dashboard2&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>`;
    
    loadTableauViz('geo-dashboard-container', embedCode);
    
    // Handle responsive sizing
    window.addEventListener('resize', () => {
      resizeTableauViz('geo-dashboard-container');
    });
    
    // Initial sizing
    setTimeout(() => {
      resizeTableauViz('geo-dashboard-container');
    }, 1000);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', () => {
        resizeTableauViz('geo-dashboard-container');
      });
    };
  }, []);

  const reloadDashboard = () => {
    const embedCode = `<div class='tableauPlaceholder' id='viz1745315623144' style='position: relative'><noscript><a href='#'><img alt='Dashboard 2 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Si&#47;SilentVictimsAnalyzingChild-TargetedCrimesinLA&#47;Dashboard2&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='path' value='views&#47;SilentVictimsAnalyzingChild-TargetedCrimesinLA&#47;Dashboard2?:language=en-US&amp;:embed=true&amp;:sid=&amp;:redirect=auth' /> <param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Si&#47;SilentVictimsAnalyzingChild-TargetedCrimesinLA&#47;Dashboard2&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>`;
    loadTableauViz('geo-dashboard-container', embedCode);
    
    // Apply responsive sizing
    setTimeout(() => {
      resizeTableauViz('geo-dashboard-container');
    }, 500);
  };

  return (
    <div className="w-full">
      <div id="geo-dashboard-container" className="w-full h-[600px] md:h-[700px] lg:h-[800px] border rounded-lg overflow-hidden bg-card/50">
        {/* Geo dashboard will be loaded here */}
      </div>
      
      <TableauLoadingStatus 
        containerIds={['geo-dashboard-container']} 
        onReload={reloadDashboard} 
      />
    </div>
  );
}
