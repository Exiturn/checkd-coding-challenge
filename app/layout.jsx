import "@/styles/globals.css";
import { Inter } from "next/font/google";

export const metadta = {
  title: "Checkd Football Widget",
  description: "A simple widget for the Checkd frontend developer challenge"
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="w-screen h-screen flex justify-center items-center">
            {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout
