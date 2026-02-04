import type { Metadata } from "next";
import { MainLayout } from '@/components/layout';

export const metadata: Metadata = {
  title: "Dashboard | Mezon Đòng",
  description: "Mezon Mainnet Transaction Explorer",
  openGraph: {
    title: "Dashboard | Mezon Đòng",
    description: "Mezon Mainnet Transaction Explorer",
    url: "https://mmn-explorer.vercel.app",
    siteName: "Mezon Đòng",
    images: [
      {
        url: "https://mmn-explorer.vercel.app/og/dashboard.png",
        width: 1200,
        height: 630,
        alt: "Mezon Đòng Dashboard",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard | Mezon Đòng",
    description: "Mezon Mainnet Transaction Explorer",
    images: ["https://mmn-explorer.vercel.app/og/dashboard.png"],
  },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}