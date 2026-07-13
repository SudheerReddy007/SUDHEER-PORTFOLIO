import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const fontHeading = { variable: "font-heading" };
const fontSans = { variable: "font-sans" };

export const metadata: Metadata = {
  title: "Sudheer Reddy | Portfolio",
  description: "Portfolio of Sudheer Reddy, an Electronics and Communication Engineering student passionate about circuit design and digital electronics.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" }
    ]
  },
  openGraph: {
    title: "Sudheer Reddy | Portfolio",
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
    title: "Sudheer Reddy | Portfolio",
    description: "Portfolio of Sudheer Reddy, an Electronics and Communication Engineering student passionate about circuit design and digital electronics.",
    creator: "@sudheerreddy",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
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
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
