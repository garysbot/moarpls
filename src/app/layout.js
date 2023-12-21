import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "moarpls - ChatGPT Meme Creator",
  description: "ChatGPT Meme Creator",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-white`}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
        {/* <script src=""></script> */}
      </body>
    </html>
  );
}
