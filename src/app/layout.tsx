import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";

export const metadata: Metadata = {
  title: "Blog Test App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [shadesOfPurple],
      }}
    >
      <html
        lang="en"
        className="bg-gradient-to-r from-gray-950 via-slate-900 to-gray-950 flex"
      >
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
