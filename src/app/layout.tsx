import { Inter, Instrument_Serif, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "FX Remit - Cross-Border Payments Reimagined",
  description: "Fast, secure, and multi-chain crypto-to-fiat remittances powered by Celo and Paycrest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} ${instrumentSerif.variable} antialiased bg-white text-gray-900 transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
