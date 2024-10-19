"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";

export default function SignUp() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Function to check if user already exists by email
  const checkUserExists = async (email) => {
    try {
      const res = await fetch(`http://localhost:3000/api/users/${email}`);
      const data = await res.json();
      return data.exists; // true if user exists
    } catch (error) {
      throw new Error("Failed to check user existence.");
    }
  };

  // Function to sign up a new user
  const signUpUser = async (postData) => {
    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        throw new Error("Failed to sign up");
      }

      const result = await res.json();
      return result;
    } catch (error) {
      throw error;
    }
  };

  // Form submission handler
  const onSubmit = async (data) => {
    const { confirmPassword, ...postData } = data;
    const email = data.email;

    try {
      // Check if email is already in use
      const userExists = await checkUserExists(email);
      if (userExists) {
        toast.error("Email is already registered. Please log in.");
        return;
      }

      // If no user exists, proceed with signup
      await signUpUser(postData);
      toast.success("Signup successful! Redirecting to homepage...");
      reset();
      setTimeout(() => {
        router.push("/");
        location.reload();
      }, 2000);
      const { password, ...userDataWithoutPassword } = postData;
      localStorage.setItem("user", JSON.stringify(userDataWithoutPassword));
    } catch (error) {
      toast.error(error.message || "Signup failed. Please try again.");
    }
  };

  useEffect(() => {
    // Check localStorage for user data on component mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="w-full pt-20 min-h-screen py-8 px-4 flex justify-center items-center relative">
      <Image
        src="https://i.postimg.cc/9QLZhhsp/banner5.png"
        alt="bg-image"
        className="min-w-[100%] h-full absolute"
        layout="fill"
      />
      <Toaster className="!z-[10000] absolute top-10" />
      <div className="w-full sm:max-w-[1000px] p-8 space-y-6 blurBg rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Feast-Frame Signup
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-900 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className={`w-full px-4 py-2 mt-1 text-gray-900 border ${
                errors.name ? "border-red-500" : "border-gray-900"
              } rounded-md focus:outline-none bg-transparent placeholder:text-gray-900`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-900 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className={`w-full px-4 py-2 mt-1 text-gray-900 border ${
                errors.email ? "border-red-500" : "border-gray-900"
              } rounded-md focus:outline-none bg-transparent placeholder:text-gray-900`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-gray-900 font-semibold"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className={`w-full px-4 py-2 mt-1 text-gray-900 border ${
                errors.password ? "border-red-500" : "border-gray-900"
              } rounded-md focus:outline-none bg-transparent placeholder:text-gray-900`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
            <span
              className="absolute top-12 right-3 text-xl text-gray-900 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-900 font-semibold"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className={`w-full px-4 py-2 mt-1 text-gray-900 border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-900"
              } rounded-md focus:outline-none bg-transparent placeholder:text-gray-900`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
            <span
              className="absolute top-12 right-3 text-xl text-gray-900 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>

          {/* Address Field */}
          <div className="w-full col-span-1 sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-gray-900 font-semibold"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              {...register("address", { required: "Address is required" })}
              className={`w-full px-4 py-2 mt-1 text-gray-900 border ${
                errors.address ? "border-red-500" : "border-gray-900"
              } rounded-md focus:outline-none bg-transparent placeholder:text-gray-900`}
              placeholder="Enter your address"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full col-span-1 sm:col-span-2 px-4 py-2 mt-4 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Signup
          </button>
        </form>

        <div className="text-center">
          <p className="text-gray-900 text-sm">
            Already have an account?{" "}
            <button
              onClick={() => router.push("/Authcation/Login")}
              className="text-orange-900 hover:text-orange-700 underline"
            >
              Login here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
