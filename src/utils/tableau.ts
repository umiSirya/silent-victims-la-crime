
/**
 * Helper function to safely load a Tableau visualization
 */
export function loadTableauViz(containerId: string, embedCode: string) {
  // Clean up any previous visualizations
  const oldScripts = document.querySelectorAll('script[src="https://public.tableau.com/javascripts/api/viz_v1.js"]');
  oldScripts.forEach(script => script.remove());

  const container = document.getElementById(containerId);
  
  if (container) {
    // Set the embed code
    container.innerHTML = embedCode;
    
    // Create and append the script
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    container.appendChild(scriptElement);
    
    return true;
  }
  
  return false;
}

/**
 * Responsive sizing for Tableau visualizations 
 */
export function resizeTableauViz(containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const vizElement = container.getElementsByTagName('object')[0];
  if (!vizElement) return;
  
  const width = container.offsetWidth;
  
  if (width > 800) {
    vizElement.style.width = '100%';
    vizElement.style.height = (width * 0.75) + 'px';
  } else if (width > 500) {
    vizElement.style.width = '100%';
    vizElement.style.height = (width * 0.75) + 'px';
  } else {
    vizElement.style.width = '100%';
    vizElement.style.height = '500px';
  }
}
