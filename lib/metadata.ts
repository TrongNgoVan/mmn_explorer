import type { Metadata } from 'next';

interface MetadataConfig {
  title: string;
  description: string;
  ogImage?: string;
}

export function generateMetadata(config: MetadataConfig): Metadata {
  const { title, description, ogImage = 'https://mmn-explorer.vercel.app/og/dashboard.png' } = config;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: 'https://mmn-explorer.vercel.app',
      siteName: 'Mezon Đòng',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
