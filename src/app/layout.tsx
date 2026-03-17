import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BlackCard Collection — Luxury Rewards for Elite Players',
  description: 'Factory-authorized designer accessories from the world\'s most iconic fashion houses — curated exclusively for high-limit casino players.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
