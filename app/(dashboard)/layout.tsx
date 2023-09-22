import { Sidebar } from "./_components/Sidebar";
import Navbar from "./_components/Navbar";

/**
 * Dashboard layout component that renders a navbar, sidebar and main content area.
 * @param children - The child components to be rendered within the main content area.
 * @returns A React component.
 */
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 h-full pt-[80px]">{children}</main>
    </div>
  );
};

export default DashboardLayout;
