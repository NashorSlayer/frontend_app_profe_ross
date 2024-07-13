import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import ToggleTheme from "../toggle-theme";




const NavBar: React.FC = async () => {

    const session = await getServerSession(authOptions);

    return (
        <nav className="flex justify-between items-center bg-gray-950 text-white px-24 py-2">
            <ToggleTheme />
            <h1 className="text-x1 font-bold">App profesor Ross</h1>
            <Link href="/user/" className={buttonVariants({ variant: "default" })}> Home</Link>
            <ul className="flex gap-x-2">
                {!session?.user ? (
                    <>
                        <li>
                            <Link
                                href="/auth/signIn"
                                className={buttonVariants({ variant: "outline" })}
                            >Login</Link>
                        </li>
                        <li>
                            <Link
                                href="/auth/signUp"
                                className={buttonVariants({ variant: "outline" })}
                            >Register</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link
                                href="/user/profile"
                                className={buttonVariants({ variant: "outline" })}
                            >Profile</Link>
                        </li>
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
    )
}

export default NavBar;