import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
const CoursesPage = async() => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="p-6">
     
        <Button>
        <Link href="/teacher/create">
          New Course
          </Link>
        </Button>
      
    </div>
  );
};

export default CoursesPage;
