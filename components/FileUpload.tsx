"use client";
import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import toast from "react-hot-toast";
interface FileUploadProps{
    onChange:(url?: string) =>void;
    endpoint:keyof typeof ourFileRouter;
}

/**
 * Renders a file upload component with a dropzone.
 * @param onChange - A function that is called when a file is uploaded successfully. It receives the URL of the uploaded file as a parameter.
 * @param endpoint - The URL where the file will be uploaded.
 * @returns A React component that renders a file upload component with a dropzone.
 */
export const FileUpload = ({onChange,endpoint}:FileUploadProps) => {

    return(
        <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res)=>{
            onChange(res?.[0].url);
        }}
        onUploadError={(error:Error)=>{
            toast.error(`${error?.message}`)
        }}
        />
    )
};