import Loading from "@/app/loading";
import ShowSignIn from "@/components/views/ShowSignIn"
import { Suspense } from "react";

const SignInPage = async() => {
    await new Promise((resolve) => setTimeout(resolve, 4000))
    return(
        <Suspense fallback={<Loading/>}>
        <ShowSignIn/>
        </Suspense>
    )
}
export default SignInPage;