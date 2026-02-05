import { MainLayout } from '@/components/layout';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Transactions | Mezon Dong',
  description: 'Mezon Mainnet Transaction Explorer',
});

export default function TransactionsLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
