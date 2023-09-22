import { generateComponents } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

/**
 * Generates components for uploading files using the specified file router.
 * @template T - The type of the file router.
 * @returns An object containing the UploadButton, UploadDropzone, and Uploader components.
 */
export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();
