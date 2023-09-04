import "@/styles/globals.css";

export const metadta = {
  title: "Checkd Football Widget",
  description: "A simple widget for the Checkd frontend developer challenge",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="w-screen h-screen flex justify-center items-center">
            {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout
