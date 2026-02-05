import type { Metadata } from 'next';

interface MetadataConfig {
  title: string;
  description: string;
  /** Optional path part of the URL, e.g. "/blocks" */
  path?: string;
  ogImage?: string;
}

const BASE_URL = 'https://mmn-explorer.vercel.app';

export function generateMetadata(config: MetadataConfig): Metadata {
  const { title, description, path, ogImage = `${BASE_URL}/og/dashboard.png` } = config;
  const url = path ? `${BASE_URL}${path}` : BASE_URL;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Mezon Dong',
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
