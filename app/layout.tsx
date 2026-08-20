import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "Illinois Solar Decathlon | UIUC",
  description:
    "Illinois Solar Decathlon at the University of Illinois Urbana-Champaign designs and builds innovative, energy-efficient housing.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-root">
          <Navbar />
          <main className="app-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}


