"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import styles from "@/styles/auth/Auth.module.css";

interface SigninFormValues {
  email: string;
  password: string;
}

const SigninPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormValues>();

  const onSubmit = (data: SigninFormValues) => {
    console.log("Signin Data:", data);
  };

  return (
   <section
  className={`!min-h-screen !w-full relative flex items-center justify-center !bg-cover !bg-center p-4 ${styles.signUpBG}`}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20" />

  {/* Grid Layout */}
  <div className="relative z-10 w-full max-w-8xl bg-transparent rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 overflow-hidden">
    
    {/* Left Section */}
    <div className="flex flex-col items-start justify-center p-10">
      <h1 className="text-5xl font-bold mb-4 text-white">
        Lorem ipsum dolor sit amet
      </h1>
      <h2 className="text-2xl mb-6 text-white">
        Sed ut perspiciatis, unde omnis iste natus error
      </h2>
      <Button asChild className="btn-primary !py-6 rounded">
        <Link href="/auth/signup">Call to Action</Link>
      </Button>
    </div>

    {/* Right Section (Form) */}
    <div className="flex justify-center w-full">
      <div className="p-10 bg-white w-full sm:w-10/12 md:w-8/12 lg:w-7/12">
        <h2 className="h1-primary text-center mb-1">Welcome back</h2>
        <p className="p-primary text-center mb-6">
          Login to your account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <Label htmlFor="email">
              Email <span className="text-red-600">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">Required</p>
            )}
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password">
              Password <span className="text-red-600">*</span>
            </Label>
            <Input
              id="password"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-sm text-red-500">Required</p>
            )}
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full !py-6 rounded btn-primary">
            Login
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">or continue with</span>
          <div className="flex-grow border-t border-gray-300" />
        </div>

        {/* Social Logins */}
        <div className="flex flex-col lg:flex-row justify-center gap-4">
          <Button
            variant="outline"
            className="w-56 flex items-center justify-center gap-3 !py-6"
          >
            <FcGoogle className="w-6 h-6" />
            Continue with Google
          </Button>
          <Button
            variant="outline"
            className="w-56 flex items-center justify-center gap-3 !py-6"
          >
            <FaFacebook className="w-6 h-6 text-blue-600" />
            Continue with Facebook
          </Button>
        </div>

        {/* Bottom Text */}
        <p className="p-primary text-center mt-6">
          Don’t have an account?{" "}
          <Link href="/auth/signup" className="text-red-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default SigninPage;
