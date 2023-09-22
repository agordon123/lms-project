"use client";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/ConfirmModal";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useConfettiStore } from "@/hooks/useConfettiStore";
interface ActionsProps {
  disabled: boolean;
  courseId: string;
  isPublished: boolean;
}

/**
 * Renders the actions component for a course.
 * @param {Object} props - The component props.
 * @param {boolean} props.disabled - Whether the component is disabled.
 * @param {string} props.courseId - The ID of the course.
 * @param {boolean} props.isPublished - Whether the course is published.
 * @returns {JSX.Element} - The rendered component.
 */
export const Actions = ({
    disabled,
    courseId,
    isPublished
  }: ActionsProps) => {
    const router = useRouter();
    const confetti = useConfettiStore();
    const [isLoading, setIsLoading] = useState(false);
  
    const onClick = async () => {
      try {
        setIsLoading(true);
  
        if (isPublished) {
          await axios.patch(`/api/courses/${courseId}/unpublish`);
          toast.success("Course unpublished");
        } else {
          await axios.patch(`/api/courses/${courseId}/publish`);
          toast.success("Course published");
          confetti.onOpen();
        }
  
        router.refresh();
      } catch {
        toast.error("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
  
    const onDelete = async () => {
      try {
        setIsLoading(true);
  
        await axios.delete(`/api/courses/${courseId}`);
  
        toast.success("Course deleted");
        router.refresh();
        router.push(`/teacher/courses`);
      } catch {
        toast.error("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
  
    return (
      <div className="flex items-center gap-x-2">
        <Button
          onClick={onClick}
          disabled={disabled || isLoading}
          variant="outline"
          size="sm"
        >
          {isPublished ? "Unpublish" : "Publish"}
        </Button>
        <ConfirmModal onConfirm={onDelete}>
          <Button size="sm" disabled={isLoading}>
            <Trash className="h-4 w-4" />
          </Button>
        </ConfirmModal>
      </div>
    )
  }