import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";

import ToasterProvider from "./providers/ToastProvider";
import getCurrentUser from "./actions/getCurrentUser";
import SearchModal from "./components/modals/SearchModal";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  );
}
