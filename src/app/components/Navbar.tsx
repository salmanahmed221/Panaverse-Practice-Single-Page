"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";


export default function Navbar() {
    const [nav, setNav] = useState(true);

    return (
        <>
            <div className="flex justify-between items-center md:px-20 px-5 py-2 w-full absolute">
                {/* Logo */}
                <div className="z-10">
                    <Image src="/logo.png" alt="log" height={120} width={120} />
                </div>
                {/* Links or Button */}
                <div>
                    <ul className="md:flex space-x-12 font-semibold hidden">
                        <li className="mt-2 hover:text-blue-900">
                            <Link href="" title='click to visit'>Home</Link>
                        </li>
                        <li className="mt-2  hover:text-blue-900">
                            <Link href="" title='click to visit'>Explore</Link>
                        </li>
                        <li className="mt-2  hover:text-blue-900">
                            <Link href="" title='click to visit'>About</Link>
                        </li>
                        <li className="mt-2  hover:text-blue-900">
                            <Link href="" title='click to visit'>Contact</Link>
                        </li>
                        <div>
                            <button className="bg-blue-600 text-white  px-6 py-2 rounded-lg hover:bg-blue-800" title='click to visit'>Apply</button>
                        </div>
                    </ul>
                </div>

                {/* Hamburger */}

                <div className="text-2xl static md:hidden z-10" onClick={() => { setNav(!nav) }}>
                    {nav ? <GiHamburgerMenu /> : <ImCross />}
                </div>

                {/* overlay */}
                {!nav ? <div className="md:hidden fixed top-0 left-0 bg-white flex items-center justify-center w-full h-[50%]">
                    <ul className="text-xl font-bold">
                        <li className="mt-2 hover:text-blue-900">
                            <Link href="" title='click to visit'>Home</Link>
                        </li>
                        <li className="mt-2  hover:text-blue-900">
                            <Link href="" title='click to visit'>Explore</Link>
                        </li>
                        <li className="mt-2  hover:text-blue-900">
                            <Link href="" title='click to visit'>About</Link>
                        </li>
                        <li className="mt-2  hover:text-blue-900">
                            <Link href="" title='click to visit'>Contact</Link>
                        </li>
                    </ul>
                </div>
                    : null}
            </div>
        </>
    )
}