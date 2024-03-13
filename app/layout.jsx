import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mathematics Webtoon - Home",
  description: "Tempatnya baca komik gratis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-100"}>
        <Navbar />

        {children}

        <br />
        <br />
        <br />

        <Footer />
      </body>
    </html>
  );
}
