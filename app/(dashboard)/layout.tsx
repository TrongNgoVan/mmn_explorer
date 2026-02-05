/* eslint-disable prettier/prettier */
import { MainLayout } from '@/components/layout';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Dashboard | Mezon Dong',
  description: 'Mezon Mainnet Transaction Explorer',
  path: '/',
});

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
