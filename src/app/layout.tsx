import "./globals.css";
import { Metadata } from "next";
import Layout from "./components/Layout";

export const metadata: Metadata = {
  title: "Project Management Dashboard",
  description: "A modern project management dashboard built with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
