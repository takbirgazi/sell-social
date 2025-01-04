import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
const poppins = Poppins({
  subsets: ['latin'], // Use the required subset
  weight: ['400', '700'], // Choose font weights as needed
});

export const metadata: Metadata = {
  title: "Sell Social - Your Marketplace, Your Network",
  description: "Your Marketplace, Your Network.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html id="mainBody" lang="en">
      <body
      className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
