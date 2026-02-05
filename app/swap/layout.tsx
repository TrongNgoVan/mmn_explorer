import { MainLayout } from '@/components/layout';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Swap | Mezon Dong',
  description: 'Mezon Mainnet Transaction Explorer',
  path: '/swap',
});

export default function SwapLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
