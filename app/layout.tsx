import Link from "next/link";
import Navigation from "./_components/Navigation";
import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "Tranquil Peaks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Link href="/">
          <Image src="/logo-light.png" alt="logo" width={50} height={50} />
        </Link>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
