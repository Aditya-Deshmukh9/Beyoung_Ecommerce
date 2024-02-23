import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export const metadata = {
  title:
    "Beyoung - Online Shoping for Men & Women | Your Everyday Fashion Brans",
  description: "Beyoung",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
