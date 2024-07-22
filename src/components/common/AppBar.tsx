import React from 'react'
import { buttonVariants } from "@/components/ui/button"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import ToggleTheme from '../toggle-theme'


const AppBar: React.FC = async () => {

    const session = await getServerSession(authOptions);
    return (
        <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between border-b bg-white px-6 dark:border-gray-800 dark:bg-gray-900">
            <Link href="/user" className="flex items-center gap-2" >
                <BanknoteIcon className="h-6 w-6" />
                <span className="text-lg font-semibold">SurveyApp</span>
            </Link>
            <div className="flex items-center gap-4">
                <nav className="hidden md:flex items-center gap-4 justify-center">
                    <ToggleTheme />
                    <ul className="flex gap-x-2">
                        {!session?.user ? (
                            <>
                                <li>
                                    <Link
                                        href="/auth/SignIn"
                                        className={buttonVariants({ variant: "outline" })}
                                    >Login</Link>
                                </li>
                                <li>
                                    <Link
                                        href="/auth/SignUp"
                                        className={buttonVariants({ variant: "outline" })}
                                    >Register</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        className={buttonVariants({ variant: "destructive" })}
                                        href="/api/auth/signout"
                                    >Logout</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

function BanknoteIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="12" x="2" y="6" rx="2" />
            <circle cx="12" cy="12" r="2" />
            <path d="M6 12h.01M18 12h.01" />
        </svg>
    )
}

export default AppBar