import type { Metadata } from "next";
import { Inter} from "next/font/google";
import '@/styles/global.css';
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Caudex",
  description: "Codeshare app share code online collobrate share code online code editor",
  icons: {
    icon: "/assets/logo.svg"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      </body>
    </html>
  );
}
