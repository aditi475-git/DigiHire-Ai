import "./globals.css";
import { Montserrat, Roboto } from "next/font/google"; // ✅ Import Google Fonts

// ✅ Load fonts and assign them to variables
// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-heading",
//   display: "swap",
// });

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   variable: "--font-body",
//   display: "swap",
// });

export const metadata = {
  title: "DigiHire",
  description: "Modern hiring platform",
};

// ✅ Root layout with font variables applied to HTML
export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
        <title>DigiHire</title>
        <link rel="icon" type="image/jpeg" href="/logo.jpeg" />
      </head>
      {/* 
        ✅ Global font usage:
        - "font-body" (Roboto) is applied to all text by default.
        - Use "font-heading" (Montserrat) in components where needed.
      */}
      <body className="bg-blue-100 font-body text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
