import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

export const metadata: Metadata = {
    title: "CannumX - AI Revenue Growth Partner",
    description: "CannumX helps businesses grow revenue with AI, automation, and custom systems.",
    icons: {
        icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <body className="bg-[#07111d] text-white antialiased">
                <Cursor />
                <Navbar />
                <main className="pt-20">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
