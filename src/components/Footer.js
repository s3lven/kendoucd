// https://flowbite.com/docs/components/footer/

import Link from "next/link"

export default function Footer() {
    return(
        <footer className="mt-32">
            <div className="mx-auto w-full max-w-screen-x1 p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        {/* Insert Logo Here */}
                        Kendo Club at UC Davis Logo
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        {/* About us Sitemap */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900
                                uppercase dark:text-white">About Us</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    News and Events
                                </li>
                                <li class="mb-4">
                                    Contact Us
                                </li>
                            </ul>
                        </div>
                        {/* Beginner Info Sitemap */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900
                                uppercase dark:text-white">Join the club</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    Practice Schedule
                                </li>
                                <li class="mb-4">
                                    Beginner Resources
                                </li>
                            </ul>
                        </div>
                        {/* How to Join Sitemap */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900
                                uppercase dark:text-white">How to Join</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    How to Join Link Here
                                </li>
                                <li class="mb-4">
                                    How to Join Link Here
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg-my-8" />
            {/* Rights Reserved */}
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023{' '}
                    <Link
                        href="/"
                        className="hover:underline"
                    >Kendo Club at UC Davis    
                    </Link>. All Rights Reserved
                </span>
                {/* Social Media Icons */}
                <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                    <Link href="https://www.facebook.com/groups/109910712450233/"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                        </svg>
                        <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="https://discord.com/invite/n6ycEpTqTe"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                            <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                        </svg>
                        <span className="sr-only">Discord</span>
                    </Link>
                    <Link href="https://www.instagram.com/kendoatucd/"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span className="sr-only">Instagram</span>
                    </Link>
                </div>
            </div>

        </footer>
    )
}