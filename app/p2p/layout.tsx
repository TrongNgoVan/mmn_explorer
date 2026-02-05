import { MainLayout } from '@/components/layout';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'P2P | Mezon Dong',
  description: 'Mezon Mainnet Transaction Explorer',
  path: '/p2p',
});

export default function P2PLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
