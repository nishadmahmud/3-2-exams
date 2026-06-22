import Link from 'next/link';
import { getQuestions } from '../../lib/api';

export default function QuestionsPage() {
  const questions = getQuestions();

  // Custom sort order based on user request
  const sortedQuestions = [...questions].sort((a, b) => {
    const getOrder = (title) => {
      const lowerTitle = title.toLowerCase();
      if (lowerTitle.includes("3-2") && lowerTitle.includes("2023")) return 1;
      if (lowerTitle.includes("3-2") && lowerTitle.includes("2022")) return 2;
      // Fallback if it just says 3-2
      if (lowerTitle.includes("3-2")) return 1;
      
      if (lowerTitle.includes("metro")) return 3;
      if (lowerTitle.includes("tt-2")) return 4;
      if (lowerTitle.includes("practice")) return 5;
      if (lowerTitle.includes("2015")) return 6;
      if (lowerTitle.includes("xtra")) return 7;
      return 999;
    };
    return getOrder(a.title) - getOrder(b.title);
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--dark)] mb-6">Question Answers</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedQuestions.map((question) => (
          <Link
            key={question.slug.join('/')}
            href={`/questions/${question.slug.join('/')}`}
            className="block p-5 bg-[#ffffff] shadow-md border border-[var(--line)] rounded-xl hover:border-[var(--line-dark)] hover:shadow-xl transition-all group h-full"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h2 className="text-lg font-semibold text-[var(--dark)] m-0 leading-tight break-words line-clamp-2">
                  {question.title}
                </h2>
                {question.slug.length > 1 && (
                  <p className="text-xs text-[var(--text-muted)] mt-2 line-clamp-1">
                    {question.slug.slice(0, -1).join(' / ')}
                  </p>
                )}
              </div>
              <div className="mt-6 text-right">
                <span className="text-sm font-medium text-gray-400 group-hover:text-[var(--dark)] transition-colors">
                  Read →
                </span>
              </div>
            </div>
          </Link>
        ))}
        {questions.length === 0 && (
          <div className="col-span-full p-8 text-[var(--text-muted)] text-center border border-[var(--line)] rounded-xl">
            No questions found.
          </div>
        )}
      </div>
    </div>
  );
}
