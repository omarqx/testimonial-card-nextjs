import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans } from "next/font/google";

// Load Noto Sans font with the desired weights and settings
const noto_sans = Noto_Sans({
  weight: ['400', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "User Testimonial Single Card",
  description: "A responsive user testimonial card featuring a profile image, username, and testimonial. Optimized for performance, accessibility, and design fidelity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto_sans.className} antialiased bg-gradient`}
      >
        {children}
      </body>
    </html>
  );
}
