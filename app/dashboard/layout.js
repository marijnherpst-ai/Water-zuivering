export const metadata = {
  title: 'Advertentie-overzicht',
  robots: { index: false, follow: false, nocache: true },
};

export default function DashboardLayout({ children }) {
  return <div className="fixed inset-0 z-[60] overflow-y-auto bg-[#080A0E] text-[#E9ECF1]">{children}</div>;
}
