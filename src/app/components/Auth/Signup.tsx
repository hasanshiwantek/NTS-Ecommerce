"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import countries from "world-countries";

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
import styles from "@/styles/auth/Auth.module.css";
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
  // Prepare formatted country list (sorted alphabetically)
  const countryList = countries
    .map((country) => ({
      name: country.name.common,
      code: country.cca2,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
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
      className={`relative flex items-center justify-center min-h-screen !bg-cover !bg-center p-4 ${styles.signUpBG}`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Form Container */}
      <div
        className="relative z-10 w-full 
                   max-w-[95%] sm:max-w-[90%] lg:max-w-[80%] 2xl:max-w-[1000px]
                   bg-white rounded-lg shadow-md 
                   p-6 sm:p-8 lg:px-[40px] 
                   h-auto 2xl:h-[880px] flex flex-col justify-center"
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="h2-medium text-center">Signup</h1>
          <p className="h5-regular text-center mb-4">
            Create an account to get started.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 !w-full !max-w-full sm:!max-w-none mt-5 max-[642px]:max-w-sm max-[642px]:mx-auto"
        >
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label className="h5-regular" htmlFor="firstName">
                First Name <span className="text-red-600">*</span>
              </Label>
              <Input
                id="firstName"
                className="!w-full !max-w-full h-[60px]"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">Required</p>
              )}
            </div>
            <div>
              <Label className="h5-regular" htmlFor="lastName">
                Last Name <span className="text-red-600">*</span>
              </Label>
              <Input
                id="lastName"
                className="!w-full !max-w-full h-[60px]"
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
              <Label className="h5-regular" htmlFor="email">
                Email <span className="text-red-600">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                className="!w-full !max-w-full h-[60px]"
                {...register("email", { required: true })}
              />
              {errors.email && <p className="text-sm text-red-500">Required</p>}
            </div>
            <div>
              <Label className="h5-regular" htmlFor="phone">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                className="!w-full !max-w-full h-[60px]"
                {...register("phone")}
              />
            </div>
          </div>

          {/* Password / Confirm */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label className="h5-regular" htmlFor="password">
                Password <span className="text-red-600">*</span>
              </Label>
              <Input
                id="password"
                type="password"
                className="!w-full !max-w-full h-[60px]"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-sm text-red-500">Required</p>
              )}
            </div>
            <div>
              <Label className="h5-regular" htmlFor="confirmPassword">
                Confirm Password <span className="text-red-600">*</span>
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                className="!w-full !max-w-full h-[60px]"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-500">Required</p>
              )}
            </div>
          </div>

          {/* Company Name */}
          <div>
            <Label className="h5-regular" htmlFor="company">
              Company Name
            </Label>
            <Input
              id="company"
              className="!w-full !max-w-full h-[60px]"
              {...register("company")}
            />
          </div>

          {/* Address */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Label className="h5-regular" htmlFor="address1">
                Address Line 1 <span className="text-red-600">*</span>
              </Label>
              <Input
                id="address1"
                className="!w-full !max-w-full h-[60px]"
                {...register("address1", { required: true })}
              />
              {errors.address1 && (
                <p className="text-sm text-red-500">Required</p>
              )}
            </div>
            <div>
              <Label className="h5-regular" htmlFor="address2">
                Address Line 2
              </Label>
              <Input
                id="address2"
                className="!w-full !max-w-full h-[60px]"
                {...register("address2")}
              />
            </div>
            <div>
              <Label className="h5-regular" htmlFor="city">
                Suburb/City <span className="text-red-600">*</span>
              </Label>
              <Input
                id="city"
                className="!w-full !max-w-full h-[60px]"
                {...register("city", { required: true })}
              />
              {errors.city && <p className="text-sm text-red-500">Required</p>}
            </div>
          </div>

          {/* Country / State / Zip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Label className="h5-regular" htmlFor="country">
                Country <span className="text-red-600">*</span>
              </Label>

              <Select>
                <SelectTrigger className="!w-full !max-w-full !h-[60px]">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>

                <SelectContent>
                  {countryList.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="h5-regular" htmlFor="state">
                State/Province
              </Label>
              <Input
                id="state"
                className="!w-full !max-w-full h-[60px]"
                {...register("state")}
              />
            </div>
            <div>
              <Label className="h5-regular" htmlFor="zip">
                Zip/Postcode
              </Label>
              <Input
                id="zip"
                className="!w-full !max-w-full h-[60px]"
                {...register("zip")}
              />
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full !py-9 !rounded-full btn-primary 2xl:text-[22px] xl:text-[16.5] text-[14px]"
          >
            Sign up
          </Button>

          <p className="h6-medium text-center !text-[#4A4A4A] mt-4">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-red-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignupPage;
