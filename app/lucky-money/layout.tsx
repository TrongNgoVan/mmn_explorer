import { MainLayout } from '@/components/layout';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Lucky Money | Mezon Dong',
  description: 'Mezon Mainnet Transaction Explorer',
});

export default function LuckyMoneyLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
