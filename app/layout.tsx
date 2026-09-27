
import "./globals.css";
import {NavBar} from "@/app/NavBar";
import {Footer} from "@/app/Footer";

import './globals.css';

// @ts-ignore
export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <NavBar />
        <main className="pt-16">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}
