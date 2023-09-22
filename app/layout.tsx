import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastProvider } from "@/components/providers/ToasterProvider";
import { ConfettiProvider } from "@/components/providers/ConfettiProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learning Module System - Next JS 13",
  description: "Built with NextJS13 , TailwindCSS, and ShadcnUI",
};

/**
 * Renders the root layout of the application.
 * @param children - The child components to be rendered within the layout.
 * @returns The root layout component.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
