// & Root Component
import './globals.css';
import { getServerSession } from 'next-auth';
import SessionProvider from './components/SessionProvider';

export const metadata = {
  title: 'moarpls - ChatGPT Meme Creator',
  description: 'ChatGPT Meme Creator',
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className="bg-slate-950 text-white font-mono m-10">
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
