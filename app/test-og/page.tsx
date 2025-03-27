import { Metadata } from 'next';
import TestOGContent from './TestOGContent';

export const metadata: Metadata = {
  title: 'Social Media Share Preview Test | Mehedi Hasan',
  description: 'Test how your site appears when shared on social media platforms with proper OpenGraph tags.',
  openGraph: {
    title: 'Social Media Share Preview Test | Mehedi Hasan',
    description: 'Test how your site appears when shared on social media platforms with proper OpenGraph tags.',
    images: [
      {
        url: '/images/socialshare.png',
        width: 1200,
        height: 630,
        alt: 'Mehedi Hasan - Web Developer Portfolio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Share Preview Test | Mehedi Hasan',
    description: 'Test how your site appears when shared on social media platforms with proper OpenGraph tags.',
    images: ['/images/socialshare.png'],
  },
};

export default function TestOGPage() {
  return <TestOGContent />;
} 