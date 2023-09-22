import { create } from "zustand";

type ConfettiStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

/**
 * A hook that creates a store for managing confetti state.
 * @returns An object containing `isOpen`, `onOpen`, and `onClose` properties.
 */
export const useConfettiStore = create<ConfettiStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));