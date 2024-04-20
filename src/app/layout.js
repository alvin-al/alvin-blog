import { Inter, PT_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });
export const ptserif = PT_Serif({
  subsets: ['latin'],
  variable: '--font-ptserif',
  weight: ["400", "700"]
})

export const metadata = {
  title: "Alvin Blog",
  description: "Lets make a story on blog!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">
            <Navbar />
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
