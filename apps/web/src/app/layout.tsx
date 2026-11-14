import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pocket Plan | Salary, Budget & Loans',
  description: 'A calm, clear overview of your salary, budget and shared loan commitments.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
