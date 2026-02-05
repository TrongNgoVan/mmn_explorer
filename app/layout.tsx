import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

import './globals.css';
import { ErrorBoundary } from '@/components/shared';
import { AppProvider } from '@/providers/AppProvider';
import Providers from '@/providers/QueryClientProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dashboard | Mezon Đòng',
  description: 'Mezon Mainnet Transaction Explorer',
  openGraph: {
    title: 'Dashboard | Mezon Đòng',
    description: 'Mezon Mainnet Transaction Explorer',
    url: 'https://mmn-explorer.vercel.app',
    siteName: 'Mezon Đòng',
    images: [
      {
        url: 'https://mmn-explorer.vercel.app/og/dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Mezon Đòng Dashboard',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dashboard | Mezon Đòng',
    description: 'Mezon Mainnet Transaction Explorer',
    images: ['https://mmn-explorer.vercel.app/og/dashboard.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider defaultTheme="dark">
          <ErrorBoundary>
            <Suspense fallback={null}>
              <AppProvider>
                <Providers>{children}</Providers>
              </AppProvider>
            </Suspense>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
