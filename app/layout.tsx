import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './NavBar';
import '@radix-ui/themes/styles.css';
import './theme-config.css';
import { Container, Theme, ThemePanel } from '@radix-ui/themes';
import AuthProvider from './auth/Provider';
import QueryClientProvider from './QueryClientProvider';

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
        <QueryClientProvider>
          <AuthProvider>
            <Theme accentColor='yellow' panelBackground='solid' radius='small'>
              <NavBar />
              <Container>
                <main className='p-5'>{children}</main>
              </Container>
            </Theme>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
