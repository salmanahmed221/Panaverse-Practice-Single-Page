import Image from 'next/image';
import Link from 'next/link';


export default function Footer() {
    return (
        <>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 bg-black text-white p-[60px] gap-7'>
                <div>
                    <h1 className='text-3xl border-l-4 border-blue-600 pl-2'>About us</h1>
                    <Image
                        src="/Logo.png"
                        alt="logo"
                        width={120}
                        height={120}
                        className="mt-3"
                    />
                    <p className="mt-3 ">
                        The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
                        Panaverse DAO is a movement to spread
                    </p>
                </div>
                <div>
                    <h1 className='text-3xl border-l-4 border-blue-600 pl-2 mt-6 md:mt-0'>Useful Links</h1>
                    <ul className="mt-5">
                        <li className='hover:text-blue-500'>
                            <Link href="/" title='click to visit'>Home</Link>
                        </li>
                        <li className='hover:text-blue-500'>
                            <Link href="/" title='click to visit'>Explore</Link>
                        </li>
                        <li className='hover:text-blue-500'> <Link href="/" title='click to visit'>About</Link></li>
                        <li className='hover:text-blue-500'>
                            <Link href="/" title='click to visit'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-3xl border-l-4 border-blue-600 pl-2 mt-6 md:mt-0'>Follow Us</h1>
                    <ul className="mt-5">
                        <li className='hover:text-blue-500'>
                            <Link href="/" title='click to visit'>Facebook</Link>
                        </li>
                        <li className='hover:text-blue-500'>
                            <Link href="/" title='click to visit'>Twitter</Link>
                        </li>
                        <li className='hover:text-blue-500'> <Link href="/" title='click to visit'>Youtube</Link></li>
                        <li className='hover:text-blue-500'>
                            <Link href="/" title='click to visit'>Github</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-3xl border-l-4 border-blue-600 pl-2 mt-6 md:mt-0'>Contact Us</h1>
                    <ul className="mt-5">
                        <li className='hover:text-blue-500'>
                            <Link href="/" title='click to visit'>1234556</Link>
                        </li>
                        <li className='hover:text-blue-500'>
                            <Link href="/" title='click to visit'>abc@gmail.com</Link>
                        </li>
                        <li className='hover:text-blue-500' title='click to visit'> <Link href="/">Lahore, Pakistan</Link></li>
                    </ul>

                </div>
            </div>

            <div className='md:flex text-center justify-between px-16 py-4'>
                <div className='font-bold'>
                    <p>All Rights Reserved © | <Link href={"/"} title='click to visit'>Salman Ahmed</Link></p>
                </div>
                <div className='pt-1 md:pt-0'>
                    <Link href={"/"}> Legals </Link> |
                    <Link href={"/"}> Term of use </Link> |
                    <Link href={"/"}> Privacy Policy </Link>
                </div>
            </div>
        </>
    );
}
