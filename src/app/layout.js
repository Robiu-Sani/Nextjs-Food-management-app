import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./(DefaultComponents)/NavBar";
import favicon from "../_images/favicon.ico";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Feast-Frame",
  description: "this is a food delevery app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* <link rel="shortcut icon" href={favicon} /> */}
        <link rel="shortcut icon" href={favicon} />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
