import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './NavBar';
import '@radix-ui/themes/styles.css';
import './theme-config.css';
import { Container, Theme, ThemePanel } from '@radix-ui/themes';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Issue Tracker',
  description: 'Get your issues tracked',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        <Theme accentColor='yellow' panelBackground='solid' radius='small'>
          <NavBar />
          <Container>
            <main className='p-5'>{children}</main>
          </Container>
        </Theme>
      </body>
    </html>
  );
}
