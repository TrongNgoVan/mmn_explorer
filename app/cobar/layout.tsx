import { MainLayout } from '@/components/layout';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Cobar | Mezon Dong',
  description: 'Mezon Mainnet Transaction Explorer',
  path: '/cobar',
});

export default function CobarLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
