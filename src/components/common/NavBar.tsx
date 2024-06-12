import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";



const NavBar: React.FC = async () => {

    const session = await getServerSession(authOptions);

    return (
        <nav className="flex justify-between items-center bg-gray-950 text-white px-24 py-3">
            <h1 className="text-x1 font-bold">App profesor Ross</h1>
            <Link href="/user/"> Home</Link>
            <ul className="flex gap-x-2">
                {!session?.user ? (
                    <>
                        <li>
                            <Link href="/auth/signIn">Login</Link>
                        </li>
                        <li>
                            <Link href="/auth/signUp">Register</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link href="/user/profile">Profile</Link>
                        </li>
                        <li>
                            <Link href="/api/auth/signout">Logout</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default NavBar;