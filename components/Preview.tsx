"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

import "react-quill/dist/quill.bubble.css";

interface PreviewProps {
  value: string;
};

/**
 * Renders a preview of the given value using ReactQuill.
 * @param {Object} props - The component props.
 * @param {string} props.value - The value to preview.
 * @returns {JSX.Element} - The rendered component.
 */
export const Preview = ({
  value,
}: PreviewProps) => {
  const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), []);

  return (
    <ReactQuill
      theme="bubble"
      value={value}
      readOnly
    />
  );
};