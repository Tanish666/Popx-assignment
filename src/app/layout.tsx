import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SessionProvider from "next-auth/react"
import AuthProvider from "@/context/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <head>
        <title>Popx assigment</title>
      </head>
      <body
        className= {`antialiased   scrollbar scrollbar-white`}
      >
        <AuthProvider>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}

