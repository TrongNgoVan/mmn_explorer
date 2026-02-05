import { MainLayout } from '@/components/layout';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Blocks | Mezon Dong',
  description: 'Mezon Mainnet Transaction Explorer',
  path: '/blocks',
});

export default function BlocksLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
