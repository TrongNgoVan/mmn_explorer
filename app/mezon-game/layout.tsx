import { MainLayout } from '@/components/layout';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Mezon Game | Mezon Dong',
  description: 'Mezon Mainnet Transaction Explorer',
  path: '/mezon-game',
});

export default function MezonGameLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
