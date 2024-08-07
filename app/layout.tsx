import type { Metadata } from "next";
import { JetBrains_Mono} from "next/font/google";
import '@/styles/global.css';
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caudex",
  description: "Codeshare app share code online collobrate share code online code editor",
  icons: {
    icon: "/assets/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>{children}</body>
    </html>
  );
}
