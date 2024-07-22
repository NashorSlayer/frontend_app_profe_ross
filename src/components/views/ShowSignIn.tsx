"use client"
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const SignInPage = () => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const onSubmit = handleSubmit(async (data) => {
        setLoading(true);
        toast({
            title: "Loading",
            description: "Please wait while we sign you"
        })
        await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false
        })
            .then(async(res) => {
                
                if (res?.status === 200) {
                    router.push("/user");
                    router.refresh();
                    toast({
                        title: "Success ✅",
                        description: "Welcome"
                    })
                } else {
                    toast({
                        variant: "destructive",
                        title: "Error",
                        description: "Invalid credentials"
                    })
                    setLoading(false);
                }

            })
            .catch((err) => {
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: err.message
                })
                setLoading(false);
            });
    });

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    GETRANS
                </Link>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label
                                    htmlFor="Email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Your email</label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"
                                    required={true} />
                            </div>
                            <div>
                                <label
                                    htmlFor="Password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Password</label>
                                <input
                                    {...register("password", { required: true })}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                            </div>

                            <div className="flex items-center justify-between">
                                <Link
                                    href="#"
                                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                            </div>
                            <Button
                                disabled={loading}
                                type="submit"
                                onClick={onSubmit}
                            >Sign in</Button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?
                                <Link
                                    href="/auth/signUp"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SignInPage;