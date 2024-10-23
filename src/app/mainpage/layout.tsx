export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-gray-950 via-slate-900 to-gray-950 flex justify-center">
        {children}
      </body>
    </html>
  );
}
