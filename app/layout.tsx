import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Frontend Developer Portfolio',
  description: 'Clean and modern portfolio of a Frontend Developer specializing in React and Next.js.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark scroll-smooth`}>
      <body className="bg-black text-white font-sans antialiased selection:bg-white selection:text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
