import { MainLayout } from '@/components/layout';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Lucky Money | Mezon Dong',
  description: 'Mezon Mainnet Transaction Explorer',
  path: '/lucky-money',
});

export default function LuckyMoneyLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
