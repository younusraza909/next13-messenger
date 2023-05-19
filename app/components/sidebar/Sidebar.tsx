import DesktopSidebar from "./DesktopSidebar";
import Mobilefooter from "./Mobilefooter";

async function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <Mobilefooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}

export default Sidebar;
