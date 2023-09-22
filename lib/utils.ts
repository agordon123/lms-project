import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string, using Tailwind's `clsx` and `twMerge` functions.
 *
 * @param inputs - An array of class names to combine.
 * @returns A string containing all the class names, merged together.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
