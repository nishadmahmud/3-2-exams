import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { getExtraBySlug, getQuestionBySlug, getActiveCourseInfo } from '../../lib/api';
import AnswerDropdown from '../../components/AnswerDropdown';
import MermaidDiagram from '../../components/MermaidDiagram';

export default function ExtraQuestionsPage() {
  const courseInfo = getActiveCourseInfo();
  const folderName = courseInfo?.folderName || 'se_dp';
  
  // Try to load Xtras_qstn first, and if not found (e.g. in data_science), fallback to Topic Wise
  const question = getExtraBySlug(['Xtras_qstn']) || getQuestionBySlug(['Topic Wise', 'Topic Wise']);

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
                    // If the question is fetched from extras, use extras path, else use questions path
                    const basePath = getExtraBySlug(['Xtras_qstn']) ? 'extras' : 'questions/Topic Wise';
                    src = `/courses/${folderName}/${basePath}/${src}`;
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
