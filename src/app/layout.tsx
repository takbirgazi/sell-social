import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./StoreProvider";
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
    <html lang="en">
      <body className={poppins.className}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
