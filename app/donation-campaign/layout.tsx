import { MainLayout } from '@/components/layout';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Donation Campaign | Mezon Dong',
  description: 'Mezon Mainnet Transaction Explorer',
  path: '/donation-campaign',
});

export default function DonationCampaignLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
