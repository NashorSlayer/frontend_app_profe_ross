"use client"
import { signUpFetch } from "@/app/api/auth/register/route";
import { ISignUpForm } from "@/interface/auth.interface";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const SignUpPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<ISignUpForm>();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const LoginPathFront = "/signIn"


    const onSubmit: SubmitHandler<ISignUpForm> = async (data) => {
        setLoading(true)
        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        await signUpFetch({ ...data })
            .then((res) => {
                if (res?.status === 201) {
                    toast({
                        title: "Created ➕",
                        description: "Area was Created"
                    })
                } else if (res?.status === 400) {
                    toast({
                        variant: "destructive",
                        title: "Error 💥",
                        description: "Area Already Exists "
                    })
                } else {
                    toast({
                        variant: "destructive",
                        title: "Error 🚨 ",
                        description: "Failed to create Area"
                    })
                }
                setLoading(false)

            })
            .finally(() => {
                setLoading(false)
                router.push(LoginPathFront)
            })
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    SurveyApp
                </Link>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign Up
                        </h1>
                        <form className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label
                                    htmlFor="UserName"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Your Username</label>
                                <input
                                    {...register("username", { required: true })}
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"
                                    required={true} />
                            </div>
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
                            <div>
                                <label
                                    htmlFor="ConfirmPassword"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Confirm Password</label>
                                <input
                                    {...register("confirmPassword", { required: true })}
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                            </div>
                            <Button
                                disabled={loading}
                                type="submit"
                            >Sign Up</Button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Do you have an account?
                                <Link
                                    href="/signIn"
                                    className="font-bold text-primary-600 hover:underline dark:text-primary-500"
                                >Sign In</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default SignUpPage;

{/* <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/4">
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Sign Up</h1>
        <label htmlFor="username" className="text-slate-500 mb-2 block text-sm" >
            Username:
        </label>
        <input type="text"
            placeholder="example: Usuario123"
            {...register("username",
                {
                    required: {
                        value: true,
                        message: "Username is required"
                    },
                }
            )}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        {errors.username && (
            <span className="text-red-500">{errors.username.message?.toString()}</span>
        )}
        <label htmlFor="username" className="text-slate-500 mb-2 block text-sm" >
            Email:
        </label>
        <input type="email"
            placeholder="example:correo@gmail.com"
            {...register("email",
                {
                    required: {
                        value: true,
                        message: "Email is required"
                    },
                }
            )}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        {errors.email && (
            <span className="text-red-500">{errors.email.message?.toString()}</span>
        )}
        <label htmlFor="username" className="text-slate-500 mb-2 block text-sm" >
            Password:
        </label>
        <input type="password"
            placeholder="example: Hola123456."
            {...register("password",
                {
                    required: {
                        value: true,
                        message: "Password is required"
                    },
                }
            )}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"

        />
        {errors.password && (
            <span className="text-red-500">{errors.password.message?.toString()}</span>
        )}
        <label htmlFor="username" className="text-slate-500 mb-2 block text-sm" >
            Confirm Password:
        </label>
        <input type="password"
            placeholder="example: Hola123456."
            {...register("confirmPassword",
                {
                    required: {
                        value: true,
                        message: "Confirm Passowrd is required"
                    },
                }
            )}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        {errors.confirmPassword && (
            <span className="text-red-500">{errors.confirmPassword.message?.toString()}</span>
        )}

        <button
            disabled={loading}
            className="w-full bg-blue-500 text-white p-3 rounded-lg margin-top-4"
        >
            Register
        </button>
    </form>
</div> */}