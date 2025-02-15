import type { Metadata } from "next";
import "../styles/global.css";

export const metadata: Metadata = {
  title: "Bank Dashboard",
  description: "A bank dashboard to manage and monitor financial activities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
