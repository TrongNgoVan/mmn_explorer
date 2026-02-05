import { MainLayout } from '@/components/layout';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Developer | Mezon Dong',
  description: 'Mezon Mainnet Transaction Explorer',
  path: '/developer',
});

export default function DeveloperLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
