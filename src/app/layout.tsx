import { Metadata } from "next";
import { cookies } from "next/headers";
import React, { Suspense } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Archie",
  description: "Share Software Architecture Ideas with the World",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  const defaultMode = theme?.value === "dark" ? "dark" : "light";

  return (
    <html lang="en">
      <body>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
