import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description:
    "Airbnb is an online marketplace that connects people who want to rent out their property with people who are looking for accommodations, typically for short stays. Airbnb offers hosts a relatively easy way to earn some income from their property. Guests often find that Airbnb rentals are cheaper and homier than hotels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-[160px] ">
        <Header />
        {children}
      </body>
    </html>
  );
}
