import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { getExtraBySlug, getQuestionBySlug, getCourseInfo } from '../../../../lib/api';
import AnswerDropdown from '../../../../components/AnswerDropdown';
import MermaidDiagram from '../../../../components/MermaidDiagram';

export default async function ExtraQuestionsPage({ params }) {
  const { semester, courseId } = await params;
  const courseInfo = getCourseInfo(semester, courseId);
  
  if (!courseInfo) {
    return <div className="p-8 text-center text-red-500">Course not found.</div>;
  }
  
  const folderName = courseInfo?.folderName || '3-2/se_dp';
  
  // Try to load Math_Problems, then Xtras_qstn, and if not found (e.g. in data_science), fallback to Topic Wise
  const question = getExtraBySlug(semester, courseId, ['Math_Problems']) || getExtraBySlug(semester, courseId, ['Xtras_qstn']) || getQuestionBySlug(semester, courseId, ['Topic Wise', 'Topic Wise']);

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
                    const basePath = getExtraBySlug(semester, courseId, ['Xtras_qstn']) ? 'extras' : 'questions/Topic Wise';
                    src = `/courses/${folderName}/${basePath}/${src}`;
                  }
                  return <img {...props} src={src} className="w-full md:max-w-[80%] h-auto object-contain my-4 rounded-md mx-auto block shadow-sm border border-[var(--line)]" alt={props.alt || "Markdown image"} />;
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
