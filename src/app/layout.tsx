import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";

const getPokemonFont = localFont({
  src: "./fonts/Pokemon_Classic.ttf",
  variable: "--font-pokemon",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-blue-200 ${getPokemonFont.variable}`}>
        <main className="relative w-full h-full flex items-center justify-center">
          <div className="">
            <div className="flex justify-center mb-5">
              <Image
                src="/logo_pokemon.png"
                width={300}
                height={500}
                alt="logo"
              />
            </div>
            <div className="flex justify-center">
              <Image src="/pika.png" width={150} height={150} alt="pokeball" />
            </div>
            <div className="absolute -top-24 -right-5">
              <Image src="/chari.png" width={500} height={500} alt="pokeball" />
            </div>
            <div className="absolute bottom-0 left-5">
              <Image
                src="/snorlax.png"
                width={500}
                height={500}
                alt="pokeball"
              />
            </div>
            <div className="h-[450px] w-[550px] relative overflow-hidden outline outline-4 rounded outline-black p-4">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
