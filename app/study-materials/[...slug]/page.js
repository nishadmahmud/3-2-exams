import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { getLectureBySlug } from '../../../lib/api';
import { notFound } from 'next/navigation';

export default async function LecturePage({ params }) {
  const { slug } = await params;
  
  const lecture = getLectureBySlug(slug);

  if (!lecture) {
    notFound();
  }

  return (
    <div>
      <div className="mb-6">
        <Link 
          href="/study-materials" 
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
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ node, ...props }) => {
                let src = props.src;
                if (src && !src.startsWith('http') && !src.startsWith('/')) {
                  const folderPath = slug.slice(0, -1).join('/');
                  src = `/Lectures_markdown/${folderPath ? folderPath + '/' : ''}${src}`;
                }
                return <img {...props} src={src} className="max-w-full max-h-72 w-auto object-contain my-4 rounded-md mx-auto block shadow-sm border border-[var(--line)]" alt={props.alt || "Markdown image"} />;
              }
            }}
          >
            {lecture.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
