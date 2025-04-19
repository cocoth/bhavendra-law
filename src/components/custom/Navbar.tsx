"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {

    const navbarItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]

    const [isScrolled, setIsScrolled] = useState(false)
    const [hamburger, setHamburger] = useState(false)
    const switcherRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
                setHamburger(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 2) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav
            ref={switcherRef}
            className={`sticky top-0 w-full font-poppins transition duration-300 ${isScrolled
                ? 'bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-lg'
                : 'bg-white dark:bg-gray-800 shadow-md'
                }`}>
            <div
                className="flex justify-between items-center px-2 md:px-4 py-2 "
            >
                <section>
                    <h1 className=''>
                        <Link href="/" className="flex items-center space-x-2 text-2xl font-playfair-display font-bold text-gray-800 dark:text-white">
                            <Image
                                src={"/assets/favicon.png"}
                                height={500}
                                width={500}
                                alt="logo"
                                className="h-12 w-12 md:h-14 md:w-14 rounded-full"
                            />
                            <p className='block font-poppins font-bold text-xl md:text-2xl'>
                                Bhavendra
                            </p>
                        </Link>
                    </h1>
                </section>
                <section className='flex gap-2 md:space-x-2 items-center'>
                    <div className='md:hidden block'>
                        <LanguageSwitcher />
                    </div>
                    <button
                        onClick={() => setHamburger(!hamburger)}
                        className="md:hidden flex items-center justify-center p-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition duration-300 cursor-pointer"
                    >
                        <RxHamburgerMenu className='text-2xl font-bold' />
                    </button>
                    <ul>
                        <div
                            onClick={() => setHamburger(!hamburger)}
                            className={`${hamburger ? 'md:hidden fixed top-[4rem] z-20 rounded-bl-lg border-s border-b  right-0 h-max w-40 text-black bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-lg flex flex-col space-y-4 items-end p-4 transform translate-x-0 transition-transform duration-300' : 'md:hidden fixed top-[4rem] z-20 rounded-bl-lg border-s border-b  right-0 h-max w-40 text-black bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-lg flex flex-col space-y-4 items-end p-4 transform translate-x-full transition-transform duration-300'}`}
                        >
                            {navbarItems.map((item) => (
                                <li
                                    key={item.name}
                                >
                                    <Link
                                        href={item.path}
                                        className="font-semibold dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </div>
                        <div className={`hidden md:flex space-x-4 items-center`}>
                            {navbarItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.path}
                                        className="font-semibold text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </div>
                    </ul>
                    <div className='hidden md:block'>
                        <LanguageSwitcher />
                    </div>
                </section>
            </div>
        </nav>
    )
}

export default Navbar