import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Incluesion - Transform Leadership Through Interactive Games",
  description: "Incluesion delivers interactive leadership games that develop critical skills, foster collaboration, and unlock your team's full potential. Experience the future of professional development.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
