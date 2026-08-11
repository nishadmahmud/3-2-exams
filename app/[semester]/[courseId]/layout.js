import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { getCourseInfo } from "../../../lib/api";

export async function generateMetadata({ params }) {
  const { semester, courseId } = await params;
  const course = getCourseInfo(semester, courseId);
  return {
    title: course?.title || "Course",
    description: "Study materials and question banks",
    openGraph: {
      images: ["/og.png"],
    },
  };
}

export default async function CourseLayout({ children, params }) {
  const { semester, courseId } = await params;
  const course = getCourseInfo(semester, courseId);

  return (
    <>
      <div className="bg-[var(--bg)] border-b border-[var(--line)] px-4 sm:px-6 py-2">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="font-medium text-sm text-[var(--dark)]">
            {course?.shortTitle || "Course"}
          </div>
          <Navigation semester={semester} courseId={courseId} />
        </div>
      </div>
      {children}
    </>
  );
}
