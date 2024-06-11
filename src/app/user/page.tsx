"use client"
import ButtonClick from "@/components/ButtonClick";

const userHomePage = () => {
    return (
        <div className="">
            <h1 className="text-4xl font-bold text-center mt-10 text-white"
            >User Home Page
            </h1>
            <div className="flex justify-center items-center min-h-screen p-5 space-x-4">
                <ButtonClick
                    text="Profile"
                    onClick={() => console.log("Perfil")}
                />
                <ButtonClick
                    text="Create Survey"
                    onClick={() => console.log("Perfil")}
                />
                <ButtonClick
                    text="See Surveys"
                    onClick={() => console.log("Perfil")}
                />
            </div>
        </div>
    )
}

export default userHomePage;