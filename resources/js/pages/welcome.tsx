import Home from '@/pages/home';
import { Head, Link} from '@inertiajs/react';
import { useState } from 'react';

export default function Welcome() {
    // const { auth } = usePage<SharedData>().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex h-12 flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm lg:max-w-4xl">
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center justify-center gap-4">
                        <Link
                            href="#"
                            className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                        >
                            About
                        </Link>
                        <Link
                            href="#"
                            className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                        >
                            Skills
                        </Link>
                        <Link
                            href="#"
                            className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                        >
                            Projects
                        </Link>
                        <Link
                            href="#"
                            className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                        >
                            Testimonials
                        </Link>
                        <Link
                            href="#"
                            className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Mobile Navigation */}
                    <div className="flex lg:hidden items-center justify-between w-full">
                        <div className="font-medium text-lg">Logo</div>
                        <button
                            onClick={toggleMobileMenu}
                            className="flex items-center justify-center p-2"
                            aria-label="Toggle menu"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-[#1b1b18] dark:text-[#EDEDEC]"
                            >
                                {mobileMenuOpen ? (
                                    <path
                                        d="M18 6L6 18M6 6L18 18"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                ) : (
                                    <path
                                        d="M4 6H20M4 12H20M4 18H20"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    {mobileMenuOpen && (
                        <div className="lg:hidden absolute left-0 right-0 top-20 bg-[#FDFDFC] dark:bg-[#0a0a0a] shadow-md z-50 py-2 px-4">
                            <div className="flex flex-col space-y-2">
                                <Link
                                    href="#"
                                    className="block py-2 text-[#1b1b18] dark:text-[#EDEDEC] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] px-3 rounded-sm"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    About
                                </Link>
                                <Link
                                    href="#"
                                    className="block py-2 text-[#1b1b18] dark:text-[#EDEDEC] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] px-3 rounded-sm"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Skills
                                </Link>
                                <Link
                                    href="#"
                                    className="block py-2 text-[#1b1b18] dark:text-[#EDEDEC] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] px-3 rounded-sm"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Projects
                                </Link>
                                <Link
                                    href="#"
                                    className="block py-2 text-[#1b1b18] dark:text-[#EDEDEC] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] px-3 rounded-sm"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Testimonials
                                </Link>
                                <Link
                                    href="#"
                                    className="block py-2 text-[#1b1b18] dark:text-[#EDEDEC] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] px-3 rounded-sm"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    )}
                </header>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
            <Home />
        </>
    );
}
