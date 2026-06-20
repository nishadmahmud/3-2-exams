import Link from 'next/link';
import { getLectures } from '../../lib/api';

export default function StudyMaterialsPage() {
  const lectures = getLectures();

  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--dark)] mb-6">Study Materials</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {lectures.map((lecture) => (
          <Link
            key={lecture.slug.join('/')}
            href={`/study-materials/${lecture.slug.join('/')}`}
            className="block p-5 bg-[#ffffff] shadow-md border border-[var(--line)] rounded-xl hover:border-[var(--line-dark)] hover:shadow-xl transition-all group h-full"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h2 className="text-lg font-semibold text-[var(--dark)] m-0 leading-tight break-words line-clamp-2">
                  {lecture.title}
                </h2>
                {lecture.slug.length > 1 && (
                  <p className="text-xs text-[var(--text-muted)] mt-2 line-clamp-1">
                    {lecture.slug.slice(0, -1).join(' / ')}
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
        {lectures.length === 0 && (
          <div className="col-span-full p-8 text-[var(--text-muted)] text-center border border-[var(--line)] rounded-xl">
            No study materials found.
          </div>
        )}
      </div>
    </div>
  );
}
