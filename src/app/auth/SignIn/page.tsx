"use client"

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignInPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState<string | null>(null)
    const router = useRouter();

    const onSubmit = handleSubmit(async (data) => {
        const res = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false
        });
        if (res!.error) {
            setError(res!.error);
        } else {
            router.push("/user");
            router.refresh();
        }
    });

    return (
        <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
            <form onSubmit={onSubmit} className="w-1/4">

                {error && (
                    <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">{error}</p>
                )}
                <h1 className="text-slate-200 font-bold text-4xl mb-4">Sign In</h1>
                <label htmlFor="Email" className="text-slate-500 mb-2 block text-sm" >
                    Email:
                </label>
                <input type="Email"
                    placeholder="example: email@gmail.com"
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

                <label htmlFor="Password" className="text-slate-500 mb-2 block text-sm" >
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
                <button
                    className="w-full bg-blue-500 text-white p-3 rounded-lg margin-top-4"
                > Sign In</button>
            </form>
        </div>
    );
}
export default SignInPage;