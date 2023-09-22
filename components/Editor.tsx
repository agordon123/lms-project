"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill/dist/quill.snow.css";

interface EditorProps {
  onChange: (value: string) => void;
  value: string;
}

/**
 * Editor component that uses ReactQuill to render a rich text editor.
 * @param onChange - function to be called when the editor content changes.
 * @param value - the current value of the editor.
 * @returns a React component that renders a rich text editor.
 */
export const Editor = ({ onChange, value }: EditorProps) => {
    const ReactQuill = useMemo(
        () => dynamic(() => import("react-quill"), { ssr: false }),
        []
    );

    return (
        <div className="bg-white">
            <ReactQuill theme="snow" value={value} onChange={onChange} />
        </div>
    );
};
