import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const CourseIdPage = async({ params }: { params: { courseId: string } }) => {
  const course = await db.course.findUnique({
    where:{
      id:params.courseId
    }
  });
  const {userId} =auth();
  if(!userId){
    return redirect('/')
  }
  if(!course){
    return redirect('/');
  }

  const requiredFields = [
    course?.title,
    course?.description,
    course?.imageUrl,
    course?.price,
    course?.categoryId
  ];
  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `${completedFields}/${totalFields}}`


  return <div className="p-6">
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-2xl font-medium">Course Id {params.courseId}</h1>
        <span className="text-sm text-slate-700">
          Complete All Fields {completionText}
        </span>
      </div>
    </div>
      </div>;
};

export default CourseIdPage;