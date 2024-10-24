import "./globals.css";
import localFont from "next/font/local";
import { connectToMongoDB } from "@/lib/db";

// component
import Header from "@/components/Header"

const pretendard = localFont({
  src: "../static/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});


export const metadata = {
  title: "JAEHONG PARK .",
  description : "THIS IS MY STROY ARCHIVE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  connectToMongoDB();
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <body className={pretendard.variable}>
          <Header />
          {children}
      </body>
    </html>
  );
}