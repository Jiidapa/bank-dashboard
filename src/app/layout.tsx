import type { Metadata } from "next";
import "../styles/global.css";
import StoreProvider from "@/components/StoreProvider/StoreProvider";

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
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
