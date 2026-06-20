import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Link from 'next/link';
import { getQuestionBySlug } from '../../../lib/api';
import { notFound } from 'next/navigation';
import AnswerDropdown from '../../../components/AnswerDropdown';
import MermaidDiagram from '../../../components/MermaidDiagram';

export default async function QuestionPage({ params }) {
  const { slug } = await params;
  
  if (!slug || slug.length === 0) {
    return notFound();
  }

  const question = getQuestionBySlug(slug);

  if (!question) {
    return notFound();
  }

  return (
    <div className="w-full">
      <Link href="/questions" className="text-blue-500 hover:text-blue-700 mb-6 inline-block flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Back to Questions Bank
      </Link>
      
      <div className="bg-white rounded-xl shadow-sm border border-[var(--line)] p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--dark)] mb-6 pb-4 border-b border-[var(--line)]">
          {question.title}
        </h1>
        <div className="markdown-body">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              blockquote({node, children, ...props}) {
                return <AnswerDropdown {...props}>{children}</AnswerDropdown>;
              },
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
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
                  src = `/Questions/${folderPath ? folderPath + '/' : ''}${src}`;
                }
                return <img {...props} src={src} className="max-w-full max-h-72 w-auto object-contain my-4 rounded-md mx-auto block shadow-sm border border-[var(--line)]" alt={props.alt || "Markdown image"} />;
              }
            }}
          >
            {question.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
