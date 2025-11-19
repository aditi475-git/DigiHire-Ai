import "./globals.css";
import { Montserrat, Roboto } from "next/font/google"; // ✅ Import Google Fonts

// ✅ Load fonts and assign them to variables
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "DigiHire",
  description: "Modern hiring platform",
  icons: {
    icon: "/logo.png", // ✅ favicon through metadata
  },
};

// ✅ Root layout with font variables applied to HTML
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${roboto.variable}`} // ✅ Apply font vars to HTML
    >
      <body className="bg-blue-100 font-body text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
