import { MainLayout } from '@/components/layout';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Transfer | Mezon Dong',
  description: 'Mezon Mainnet Transaction Explorer',
  path: '/transfer',
});

export default function TransferLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
