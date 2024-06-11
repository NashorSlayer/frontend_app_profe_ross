import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";



const NavBar: React.FC = async () => {

    const session = await getServerSession(authOptions);
    console.log(session);

    return (
        <nav className="flex justify-between items-center bg-gray-950 text-white px-24 py-3">
            <h1 className="text-x1 font-bold">Home</h1>
            <Link href="/user/"> button Home</Link>
            <ul className="flex gap-x-2">
                {!session?.user ? (
                    <>
                        <li>
                            <Link href="/auth/signIn">Sign In</Link>
                        </li>
                        <li>
                            <Link href="/auth/signUp">Sign Up</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link href="/user/profile">Proifle</Link>
                        </li>
                        <li>
                            <Link href="/api/auth/signOut">Sign Out</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default NavBar;