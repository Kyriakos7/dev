import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KAZANOBA TAPAS BAR — Vision Menu | Xanthi',
  description:
    'Kazanoba Tapas Bar Pr·gr — immersive Apple Vision style digital menu. Coffees, cocktails, wines, brunch & tapas in Xanthi. EL/EN.',
  openGraph: {
    title: 'KAZANOBA TAPAS BAR — Vision Menu',
    description: 'Same beloved menu, reimagined in glass. EL/EN · 14 sections · 500+ items.',
    images: ['/logo.jpeg']
  }
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="cosmos" aria-hidden />
      <div className="orb orb-a" aria-hidden />
      <div className="orb orb-b" aria-hidden />
      <div className="orb orb-c" aria-hidden />
      {children}
    </>
  );
}
