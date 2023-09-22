"use client";

import ReactConfetti from "react-confetti";

import { useConfettiStore } from "@/hooks/useConfettiStore";
/**
 * Renders confetti when `isOpen` is true.
 * @returns {JSX.Element | null} The confetti component or null if `isOpen` is false.
 */
export const ConfettiProvider = () => {
  const confetti = useConfettiStore();

  if (!confetti.isOpen) return null;

  return (
    <ReactConfetti
      className="pointer-events-none z-[100]"
      numberOfPieces={500}
      recycle={false}
      onConfettiComplete={() => {
        confetti.onClose();
      }}
    />
  );
};
