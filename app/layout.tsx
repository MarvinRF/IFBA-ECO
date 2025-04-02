import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IFBA - Concientização - Educação Ambiental",
  description:
    "Portal de educação ambiental e conscientização ecológica para um futuro sustentável. Aprenda sobre preservação ambiental, reciclagem e energia renovável.",
  keywords:
    "educação ambiental, sustentabilidade, meio ambiente, reciclagem, energia renovável",
  openGraph: {
    title: "IFBA - Concientização - Educação Ambiental",
    description:
      "Portal de educação ambiental e conscientização ecológica para um futuro sustentável.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "IFBA - Concientização",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IFBA - Concientização - Educação Ambiental",
    description:
      "Portal de educação ambiental e conscientização ecológica para um futuro sustentável.",
    images: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#22c55e" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
