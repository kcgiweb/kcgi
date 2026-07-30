import React, { useEffect } from 'react';

export const NoPaperFormsWidget: React.FC = () => {
  useEffect(() => {
    // Dynamically inject the NoPaperForms widget script
    const scriptId = 'npf-widget-script';
    
    // Always append a new script element to ensure it runs and finds the newly mounted div
    const s = document.createElement("script");
    s.id = scriptId + '-' + Date.now();
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widgets.in4.nopaperforms.com/emwgts.js";
    document.body.appendChild(s);

    return () => {
      // Clean up script on unmount to avoid cluttering document.body in SPA
      if (document.body.contains(s)) {
        document.body.removeChild(s);
      }
    };
  }, []);

  return (
    <div className="npf_wgts" data-height="400px" data-w="bcbaa03f3023f311419ba7a96e34f6d9"></div>
  );
};
