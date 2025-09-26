"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import SignUpBG from "@/assets/auth/Signup-bg.png";
import styles from "@/styles/auth/Auth.module.css"
interface SignupFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  country: string;
  state: string;
  zip: string;
}

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>();

  const onSubmit = (data: SignupFormValues) => {
    console.log("Signup Data:", data);
  };

  return (
    <section
      className={`!min-h-screen !w-full !h-full relative flex items-center justify-center !bg-cover !bg-center p-4 ${styles.signUpBG}`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-4xl bg-white backdrop-blur-md rounded-lg shadow-md p-8">
        <h1 className=" h1-primary text-center  mb-1">Signup</h1>
        <p className="p-primary text-center ">
          Create an account to get started.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-5 max-[642px]:max-w-sm 
    max-[642px]:mx-auto">
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">
                First Name <span className="text-red-600">*</span>
              </Label>
              <Input
                id="firstName"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">Required</p>
              )}
            </div>
            <div>
              <Label htmlFor="lastName">
                Last Name<span className="text-red-600">*</span>
              </Label>
              <Input
                id="lastName"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <p className="text-sm text-red-500">Required</p>
              )}
            </div>
          </div>

          {/* Email / Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">
                Email<span className="text-red-600">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && <p className="text-sm text-red-500">Required</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" {...register("phone")} />
            </div>
          </div>

          {/* Password / Confirm */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="password">
                Password<span className="text-red-600">*</span>
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
            <div>
              <Label htmlFor="confirmPassword">
                Confirm Password<span className="text-red-600">*</span>
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-500">Required</p>
              )}
            </div>
          </div>

          {/* Company Name */}
          <div>
            <Label htmlFor="company">Company Name</Label>
            <Input id="company" {...register("company")} />
          </div>

          {/* Address */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="address1">
                Address Line 1<span className="text-red-600">*</span>
              </Label>
              <Input
                id="address1"
                {...register("address1", { required: true })}
              />
              {errors.address1 && (
                <p className="text-sm text-red-500">Required</p>
              )}
            </div>
            <div>
              <Label htmlFor="address2">Address Line 2</Label>
              <Input id="address2" {...register("address2")} />
            </div>
            <div>
              <Label htmlFor="city">
                Suburb/City<span className="text-red-600">*</span>
              </Label>
              <Input id="city" {...register("city", { required: true })} />
              {errors.city && <p className="text-sm text-red-500">Required</p>}
            </div>
          </div>

          {/* Country / State / Zip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="country">
                Country<span className="text-red-600">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  {/* Add more */}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="state">State/Province</Label>
              <Input id="state" {...register("state")} />
            </div>
            <div>
              <Label htmlFor="zip">Zip/Postcode</Label>
              <Input id="zip" {...register("zip")} />
            </div>
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full !py-6  rounded btn-primary">
            Sign up
          </Button>
        </form>

        <p className="p-primary text-center mt-4 ">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-red-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignupPage;
