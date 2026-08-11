import Link from 'next/link';
import { getSemesters, getSemesterCourses, getCourseConfig } from '../lib/api';

export default function Home() {
  const semesters = getSemesters();
  const config = getCourseConfig();

  return (
    <div className="py-8">
      <div className="space-y-16">
        {semesters.map((semesterKey) => {
          const semesterInfo = config.semesters[semesterKey];
          const courses = getSemesterCourses(semesterKey);
          const courseEntries = Object.entries(courses);

          return (
            <section key={semesterKey}>
              <h2 className="text-2xl font-bold text-[var(--dark)] mb-6 border-b border-[var(--line)] pb-2">
                {semesterInfo.title || `Semester ${semesterKey}`}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseEntries.map(([courseId, courseInfo]) => (
                  <Link
                    key={courseId}
                    href={`/${semesterKey}/${courseId}/study-materials`}
                    className="block p-6 bg-white shadow-md border border-[var(--line)] rounded-2xl hover:border-[var(--line-dark)] hover:shadow-xl transition-all group"
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-[var(--dark)] mb-2 group-hover:text-blue-600 transition-colors">
                          {courseInfo.title}
                        </h3>
                        <p className="text-sm text-[var(--text-muted)]">
                          {courseInfo.shortTitle}
                        </p>
                      </div>
                      <div className="mt-6 flex justify-end">
                        <span className="text-sm font-semibold text-blue-500 group-hover:text-blue-700 flex items-center gap-1 transition-colors">
                          Enter Course <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
