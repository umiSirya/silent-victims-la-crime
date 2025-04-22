
/**
 * Helper function to safely load a Tableau visualization
 */
export function loadTableauViz(containerId: string, embedCode: string) {
  // Clean up any previous visualizations
  const oldScripts = document.querySelectorAll('script[src="https://public.tableau.com/javascripts/api/viz_v1.js"]');
  oldScripts.forEach(script => script.remove());

  const container = document.getElementById(containerId);
  
  if (container) {
    // Clear container first
    container.innerHTML = '';
    
    // Set the embed code
    container.innerHTML = embedCode;
    
    // Find the tableau placeholder and set its width to 100%
    const placeholder = container.querySelector('.tableauPlaceholder');
    if (placeholder) {
      placeholder.setAttribute('style', 'position: relative; width: 100%; height: 100%; margin: 0; padding: 0;');
    }
    
    // Create and append the script
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    container.appendChild(scriptElement);
    
    // Set proper sizing once the visualization is loaded
    setTimeout(() => {
      resizeTableauViz(containerId);
    }, 500);
    
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
  
  // Adjust both the placeholder and the actual viz element
  const placeholder = container.querySelector('.tableauPlaceholder');
  if (placeholder) {
    placeholder.setAttribute('style', 'position: relative; width: 100%; height: 100%; margin: 0; padding: 0;');
  }
  
  const vizElement = container.querySelector('.tableauViz');
  if (vizElement) {
    vizElement.setAttribute('style', 'width: 100% !important; height: 100% !important; margin: 0; padding: 0;');
    
    // Also adjust the inner iframe if it exists
    const iframe = vizElement.querySelector('iframe');
    if (iframe) {
      iframe.setAttribute('style', 'width: 100% !important; height: 100% !important;');
    }
  }
}
