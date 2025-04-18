import { Poppins, Playfair_Display } from 'next/font/google';

// Poppins for general use
export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
    display: 'swap',
});

// Playfair Display for titles
export const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-playfair-display',
    display: 'swap',
});