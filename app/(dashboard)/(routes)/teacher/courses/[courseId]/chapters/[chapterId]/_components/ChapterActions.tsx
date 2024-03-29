"use client";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/ConfirmModal";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
interface ChapterActionProps {
  disabled: boolean;
  courseId: string;
  chapterId: string;
  isPublished: boolean;
}

/**
 * Component for displaying chapter actions (publish/unpublish and delete).
 * @param {Object} props - The component props.
 * @param {boolean} props.disabled - Whether the component is disabled.
 * @param {string} props.courseId - The ID of the course the chapter belongs to.
 * @param {string} props.chapterId - The ID of the chapter.
 * @param {boolean} props.isPublished - Whether the chapter is published.
 * @returns {JSX.Element} - The rendered component.
 */
export const ChapterActions = ({
  disabled,
  courseId,
  chapterId,
  isPublished,
}: ChapterActionProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  /**
   * Handler function for deleting the chapter.
   */
  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/courses/${courseId}/chapters/${chapterId}`);
      toast.success("Chapter deleted successfully");
      router.refresh();
      router.push(`/teacher/course/${courseId}`);
    } catch (err) {
      toast.error("Something went Wrong");
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handler function for publishing/unpublishing the chapter.
   */
  const onClick = async () => {
    try {
      setLoading(true);

      if (isPublished) {
        await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}/unpublish`);
        toast.success("Chapter unpublished");
      } else {
        await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}/publish`);
        toast.success("Chapter published");
      }

      router.refresh();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={onClick}
        variant="outline"
        size="sm"
        disabled={loading || disabled}
      >
        {isPublished ? "Unpublish" : "Publish"}
      </Button>
      <ConfirmModal onConfirm={onDelete}>
        <Button size="sm">
          <Trash className="h-4 w-4"></Trash>
        </Button>
      </ConfirmModal>
    </div>
  );
};
