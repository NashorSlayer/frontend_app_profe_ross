"use client"
import ButtonClick from "@/components/ButtonClick";
import { useRouter } from "next/navigation";

const userHomePage = () => {

    const router = useRouter();

    return (
        <div className="">
            <h1 className="text-4xl font-bold text-center mt-10 text-white "
            >User Home Page
            </h1>
            <div className="flex justify-center items-center min-h-screen p-5 space-x-4">
                <ButtonClick
                    text="Profile"
                    onClick={() => router.push("/user/profile")}
                />
                <ButtonClick
                    text="Create Survey"
                    onClick={() => router.push("/user/survey/create")}
                />
                <ButtonClick
                    text="See Surveys"
                    onClick={() => router.push("/user/survey")}
                />
            </div>
        </div>
    )
}

export default userHomePage;

