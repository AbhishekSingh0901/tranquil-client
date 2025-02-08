import Navigation from "./components/navigation";
import "./globals.css";

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
        <Navigation />
        {children}
      </body>
    </html>
  );
}
