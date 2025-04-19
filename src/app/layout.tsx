import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { poppins, playfairDisplay } from "@/lib/fonts"
import "@/css/globals.css";
// import "@/css/app.css";
import { getLocale, getMessages, getRequestConfig } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
})

export const metadata: Metadata = {
  title: "Legal Bhavendra",
  description: "Your trusted legal partner",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} ${playfairDisplay.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
