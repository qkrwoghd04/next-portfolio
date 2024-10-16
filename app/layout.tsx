import "./globals.css";
import { Noto_Sans_KR } from "next/font/google"; 
import { connectToMongoDB } from "@/lib/db";

// component
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "400", "700", "900"],
  variable: "--noto_sans_kr"
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
    <html lang="ko" className={`${notoSansKr.variable}`}>
      <body className={`${notoSansKr.variable}`}>
          <Header />
          <StairTransition />
          <PageTransition> 
            {children}
          </PageTransition>
      </body>
    </html>
  );
}