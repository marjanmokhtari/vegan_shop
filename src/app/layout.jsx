import { Inter } from "next/font/google";
import "./globals.css";
import { CiUser } from "react-icons/ci";
import { PiHeartStraightLight } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TbMenu } from "react-icons/tb";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "vegan chocolate",
  description: "Generated by create next app",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/logo.ico',
        href: '/logo.ico',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <MyHeader></MyHeader>
        {children}
      </body>
    </html>
  );
}


function MyHeader() {
  return (
    <header className=" w-full ">
      <section className=" w-full flex *:w-1/2 justify-between px-10 py-8">
        <section>
          <nav className=" w-full ">
            <ul className=" w-full flex text-[#d1b17b] uppercase text-sm *:mx-5">
              <li>home</li>
              <li>pages</li>
              <li>shop</li>
              <li>blog</li>
              <li>gallery</li>
            </ul>
          </nav>
        </section>
        <section className=" bg-red-700 py-5">dfsdsf</section>
        <section>
          <nav className=" w-full flex justify-end">
            <ul className=" w-full flex justify-end text-[#d1b17b] uppercase text-xl *:mx-5">
              <li><CiUser></CiUser></li>
              <li><PiHeartStraightLight></PiHeartStraightLight></li>
              <li><HiOutlineShoppingBag></HiOutlineShoppingBag></li>
              <li><TbMenu></TbMenu></li>
            </ul>
          </nav>
        </section>
      </section>
    </header>
  )
}