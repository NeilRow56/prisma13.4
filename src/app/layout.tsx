import Header from "./components/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Notion Minimal",
  description: "A simple notion minimal version",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
