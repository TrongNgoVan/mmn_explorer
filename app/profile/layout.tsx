import { MainLayout } from '@/components/layout';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Profile | Mezon Dong',
  description: 'Mezon Mainnet Transaction Explorer',
  path: '/profile',
});

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
