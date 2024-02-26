


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>Blog Page Laout area</h1>
        {children}
        </body>
    </html>
  );
}
