import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs";
const f = createUploadthing();

const handleAuth = () => {
  const { userId } = auth();
  if (!userId) throw new Error("Not logged in");
  return { userId };
};
// FileRouter for your app, can contain multiple FileRoutes
/**
 * Defines the file router for our application, which specifies the allowed file types and their upload limits.
 */
export const ourFileRouter = {
  /**
   * Specifies the allowed file types and upload limits for course images.
   * @remarks
   * The maximum file size is 4MB and only 1 file can be uploaded at a time.
   */
  courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  /**
   * Specifies the allowed file types for course attachments.
   * @remarks
   * Text, image, video, audio, and PDF files are allowed.
   */
  courseAttachment: f(["text", "image", "video", "audio", "pdf"])
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  /**
   * Specifies the allowed file types and upload limits for chapter videos.
   * @remarks
   * Only 1 video file can be uploaded at a time, and the maximum file size is 512GB.
   */
  chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
