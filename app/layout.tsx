import Link from "next/link";
import Navigation from "./_components/Navigation";
import "./globals.css";
import Image from "next/image";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Tranquil Peaks",
    default: "Welcome / The Tranquil Peaks",
  },
  description:
    "Luxurious cabin hotel, located in the heart of himalayan Range, surrounded by beautiful mountains and rivers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className}  bg-primary-950 text-primary-50 min-h-screen flex flex-col `}
      >
        <Header />
        <div className=" flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto ">{children}</main>
        </div>
      </body>
    </html>
  );
}
