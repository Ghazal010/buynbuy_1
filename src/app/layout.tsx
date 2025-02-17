import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";
import Layout from "@/components/Layout";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BuyNBuy Vibes",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Layout>
          <Header />
          {children}
          <SideBar />
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                backgroundColor: "#000000",
                color: "#ffffff",
              },
            }}
          />
        </Layout>
      </body>
    </html>
  );
}
