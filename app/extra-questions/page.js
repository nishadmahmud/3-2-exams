import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { getExtraBySlug, getActiveCourseInfo } from '../../lib/api';
import AnswerDropdown from '../../components/AnswerDropdown';
import MermaidDiagram from '../../components/MermaidDiagram';

export default function ExtraQuestionsPage() {
  const question = getExtraBySlug(['Xtras_qstn']);
  const courseInfo = getActiveCourseInfo();
  const folderName = courseInfo?.folderName || 'se_dp';

  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--dark)] mb-6">Extra Questions</h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-[var(--line)] p-4 sm:p-6 md:p-8">
        {question ? (
          <div className="markdown-body">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeRaw, rehypeKatex]}
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
                    src = `/courses/${folderName}/extras/${src}`;
                  }
                  return <img {...props} src={src} className="max-w-full max-h-72 w-auto object-contain my-4 rounded-md mx-auto block shadow-sm border border-[var(--line)]" alt={props.alt || "Markdown image"} />;
                }
              }}
            >
              {question.content}
            </ReactMarkdown>
          </div>
        ) : (
          <p className="text-[var(--text-muted)] text-center">
            Custom questions and answers from our lectures will be added here soon.
          </p>
        )}
      </div>
    </div>
  );
}
