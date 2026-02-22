// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const _geist = Geist({ subsets: ["latin"] });
// const _geistMono = Geist_Mono({ subsets: ["latin"] });
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// export const metadata = {
//   title: "Bal Niketan Sr. Sec. School, Pilani",
//   description:
//     "Premium, modern, and innovative educational experience. Discover excellence in education at Bal Niketan.",
//   generator: "v0.app",
//   icons: {
//     icon: [
//       {
//         url: "/icon-light-32x32.png",
//         media: "(prefers-color-scheme: light)",
//       },
//       {
//         url: "/icon-dark-32x32.png",
//         media: "(prefers-color-scheme: dark)",
//       },
//       {
//         url: "/icon.svg",
//         type: "image/svg+xml",
//       },
//     ],
//     apple: "/apple-icon.png",
//   },
//   viewport: {
//     width: "device-width",
//     initialScale: 1,
//     maximumScale: 5,
//     userScalable: true,
//     themeColor: "#2d5a8c",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className="font-sans antialiased bg-background text-foreground">
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstallPWAButton from "@/components/InstallPWAButton";
const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Bal Niketan Sr. Sec. School, Pilani",
  description:
    "Premium, modern, and innovative educational experience. Discover excellence in education at Bal Niketan.",

  manifest: "/manifest.json",   // ✅ ADD THIS (Important for PWA)

  icons: {
    icon: [
      { url: "/android.png" },   // Your PWA icon
    ],
    apple: "/ios.png",           // iOS install icon
  },

  themeColor: "#2d5a8c",         // ✅ Proper PWA theme color
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#2d5a8c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <Navbar />
        {children}
        <InstallPWAButton />
        <Footer />
      </body>
    </html>
  );
}