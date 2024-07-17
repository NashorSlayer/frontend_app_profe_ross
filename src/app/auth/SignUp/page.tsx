"use client"
import { BASE_BACKEND_URL, HTTPMETHODS, UserBackendPaths } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const SignUpPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const LoginPathFront = "/api/auth/signin"
    const onSubmit = handleSubmit(async (data) => {
        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const res = await fetch(BASE_BACKEND_URL.LOCAL + UserBackendPaths.CREATE, {
            method: HTTPMETHODS.POST,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: data.username,
                email: data.email,
                password: data.password
            })
        });
        if (res.ok) {
            router.push(LoginPathFront);
        } else {
            alert(res.statusText.toString());
        }

    });
    console.log(errors)
    return (
        <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
            <form onSubmit={onSubmit} className="w-1/4">
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
                    className="w-full bg-blue-500 text-white p-3 rounded-lg margin-top-4"
                > Register</button>
            </form>
        </div>
    );
}
export default SignUpPage;