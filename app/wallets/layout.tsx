import { MainLayout } from '@/components/layout';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Wallets | Mezon Dong',
  description: 'Mezon Mainnet Transaction Explorer',
  path: '/wallets',
});

export default function BlocksLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
