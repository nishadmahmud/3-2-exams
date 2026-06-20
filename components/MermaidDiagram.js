"use client";

import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
});

export default function MermaidDiagram({ chart }) {
  const containerRef = useRef(null);
  const [svgContent, setSvgContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const renderMermaid = async () => {
      try {
        if (!chart) return;
        
        // Generate a unique ID for the diagram
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        
        // Let mermaid process the chart
        const { svg } = await mermaid.render(id, chart);
        
        if (isMounted) {
          setSvgContent(svg);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Mermaid parsing error:", err);
          setError("Failed to render diagram.");
        }
      }
    };

    renderMermaid();

    return () => {
      isMounted = false;
    };
  }, [chart]);

  if (error) {
    return (
      <div className="p-4 border border-red-300 bg-red-50 text-red-700 rounded-md my-4 font-mono text-sm">
        {error}
        <pre className="mt-2 overflow-x-auto text-xs text-red-600">{chart}</pre>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="my-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm flex justify-center overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
