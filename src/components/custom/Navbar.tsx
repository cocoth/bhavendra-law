"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = () => {

    const navbarItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]

    const [isScrolled, setIsScrolled] = useState(false)

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
        <nav className={`sticky top-0 w-full font-poppins transition duration-300 ${
            isScrolled
                ? 'bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-lg'
                : 'bg-white dark:bg-gray-800 shadow-md'
        }`}>
            <div
                className="flex justify-between items-center px-4 py-2 "
            >
                <section>
                    <h1>
                        <Link href="/" className="text-2xl font-playfair-display font-bold text-gray-800 dark:text-white">
                            Bhavendra
                        </Link>
                    </h1>
                </section>
                <section>
                    <ul className="flex space-x-4 items-center">
                        {navbarItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.path}
                                    className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <LanguageSwitcher />
                        </li>
                    </ul>
                </section>
            </div>
        </nav>
    )
}

export default Navbar