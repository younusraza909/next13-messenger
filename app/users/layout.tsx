import Sidebar from "../components/sidebar/Sidebar";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // TS giving error because Sidebar is server component and can not be used as JSX element
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}
