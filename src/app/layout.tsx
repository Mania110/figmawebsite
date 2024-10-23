import "./globals.css";
import Header from "./components/header"; // Capitalize component name
import Footer from "./components/footer"; // Capitalize component name
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />{children} {/* Main content goes here */}
        <main /><br></br><Footer /> {/* Correct Footer usage */}
      </body>
    </html>
  );
}
