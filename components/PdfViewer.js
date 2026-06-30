'use client';

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the worker for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function PdfViewer({ url }) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-viewer-container flex flex-col items-center gap-6 py-4">
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="h-64 w-full max-w-3xl bg-[var(--line)] rounded-lg"></div>
            <p className="text-gray-500">Loading lecture slides...</p>
          </div>
        }
        error={
          <div className="text-red-500 p-4 border border-red-200 rounded-md bg-red-50">
            Failed to load PDF. Please make sure the file exists and the URL is correct.
          </div>
        }
      >
        {numPages &&
          Array.from(new Array(numPages), (el, index) => (
            <div key={`page_${index + 1}`} className="shadow-md rounded-lg overflow-hidden mb-6 border border-[var(--line)] bg-white">
              <Page
                pageNumber={index + 1}
                width={800} // Set a fixed width to ensure consistency
                renderTextLayer={true}
                renderAnnotationLayer={true}
                className="max-w-full"
              />
            </div>
          ))}
      </Document>
    </div>
  );
}
