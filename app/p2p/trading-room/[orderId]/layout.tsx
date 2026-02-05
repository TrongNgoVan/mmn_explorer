import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Trading Room | Mezon Dong',
  description: 'Mezon Mainnet Transaction Explorer',
});

export default function TradingRoomLayout({ children }: { children: React.ReactNode }) {
  // Trading room doesn't need MainLayout as it has its own full-screen layout
  return <>{children}</>;
}
