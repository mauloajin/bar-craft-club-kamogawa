import type { Metadata } from "next";
import "./globals.css";
import "./mobile.css";

const siteUrl = "https://bar-craft-club-kamogawa.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "BAR CRAFT倶楽部 KAMOGAWA｜京都・木屋町のオーセンティックカクテルバー",
  description: "京都河原町駅徒歩1分、鴨川沿いのBAR CRAFT倶楽部 KAMOGAWA。クラフトカクテルとウイスキー、京都の街並みを望むルーフトップを楽しめるバーです。火〜土19:00〜翌2:00。",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { title: "BAR CRAFT倶楽部 KAMOGAWA", description: "京都・木屋町、鴨川沿いのAuthentic Cocktail Bar", url: siteUrl, siteName: "BAR CRAFT倶楽部 KAMOGAWA", locale: "ja_JP", type: "website" },
  twitter: { card: "summary", title: "BAR CRAFT倶楽部 KAMOGAWA", description: "京都・木屋町、鴨川沿いのAuthentic Cocktail Bar" }
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="ja"><body>{children}</body></html>; }
