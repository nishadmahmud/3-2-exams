import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';
import Link from 'next/link';
import PdfViewer from '../../../../../components/PdfViewer';
import MermaidDiagram from '../../../../../components/MermaidDiagram';
import { getLectureBySlug, getCourseInfo } from '../../../../../lib/api';
import { notFound } from 'next/navigation';

export default async function LecturePage({ params }) {
  const { semester, courseId, slug } = await params;
  
  const lecture = getLectureBySlug(semester, courseId, slug);
  const courseInfo = getCourseInfo(semester, courseId);
  const folderName = courseInfo?.folderName || '3-2/se_dp';

  if (!lecture) {
    notFound();
  }

  return (
    <div>
      <div className="mb-6">
        <Link 
          href={`/${semester}/${courseId}/study-materials`}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-[var(--dark)] rounded-md hover:opacity-90 transition-opacity"
          style={{ color: '#ffffff' }}
        >
          <span>←</span> Back
        </Link>
      </div>
      
      <div className="bg-white p-3 sm:p-8 rounded-lg shadow-sm border border-[var(--line)] overflow-hidden">
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--dark)] mb-6 pb-4 border-b border-[var(--line)]">
          {lecture.title}
        </h1>
        <div className="markdown-body">
          {lecture.isPdf ? (
            <PdfViewer url={lecture.fileUrl} />
          ) : (
            <ReactMarkdown 
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeRaw, rehypeKatex]}
              components={{
                code({node, inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '');
                  const isMermaid = match && match[1] === 'mermaid';
                  
                  if (!inline && isMermaid) {
                    return <MermaidDiagram chart={String(children).replace(/\n$/, '')} />;
                  }
                  return <code className={className} {...props}>{children}</code>;
                },
                img: ({ node, ...props }) => {
                  let src = props.src;
                  if (src && !src.startsWith('http') && !src.startsWith('/')) {
                    const folderPath = slug.slice(0, -1).join('/');
                    src = `/courses/${folderName}/lecture/${folderPath ? folderPath + '/' : ''}${src}`;
                  }
                  return <img {...props} src={src} className="w-full md:max-w-[80%] h-auto object-contain my-4 rounded-md mx-auto block shadow-sm border border-[var(--line)]" alt={props.alt || "Markdown image"} />;
                }
              }}
            >
              {lecture.content}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
}
