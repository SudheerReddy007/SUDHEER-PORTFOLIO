import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const fontHeading = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
});

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sudheer Reddy | Electronics & Communication Engineer",
  description: "Portfolio of Sudheer Reddy, an Electronics and Communication Engineering student passionate about circuit design and digital electronics.",
  openGraph: {
    title: "Sudheer Reddy | Electronics & Communication Engineer",
    description: "Portfolio of Sudheer Reddy, an Electronics and Communication Engineering student passionate about circuit design and digital electronics.",
    url: "https://sudheerreddy.com",
    siteName: "Sudheer Reddy Portfolio",
    images: [
      {
        url: "https://sudheerreddy.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sudheer Reddy - ECE Student",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudheer Reddy | Electronics & Communication Engineer",
    description: "Portfolio of Sudheer Reddy, an Electronics and Communication Engineering student passionate about circuit design and digital electronics.",
    creator: "@sudheerreddy",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontHeading.variable} antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col pt-20 font-sans selection:bg-primary/30">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
