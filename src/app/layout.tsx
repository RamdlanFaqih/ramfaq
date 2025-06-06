import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme/ThemeProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space_grotesk",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Ramdlan Faqih",
  description: "Your Friendly Co-worker👋",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
