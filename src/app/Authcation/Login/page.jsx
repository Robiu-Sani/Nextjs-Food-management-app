"use client"; // Add this line to indicate client-side rendering
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast"; // For toast notifications
import axios from "axios"; // Axios for API requests

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      // Fetch user data from the API
      const response = await axios.get(
        `http://localhost:3000/api/users/${data.email}`
      );
      const user = response.data;

      // Debugging: Log the user object to ensure you're getting the correct data
      console.log("User data from API:", user.user);

      // Check if the user exists and the password matches
      if (user) {
        if (user.user.password === data.password) {
          // Remove the password from the user data before storing it in localStorage
          const { password, ...userDataWithoutPassword } = user.user;
          localStorage.setItem("user", JSON.stringify(userDataWithoutPassword));

          // Show success toast and redirect to home page
          toast.success("Login successful!");
          setTimeout(() => {
            router.push("/"); // Redirect to home page after 2 seconds
          }, 2000);
        } else {
          // Show error toast if the password doesn't match
          toast.error("Invalid password");
        }
      } else {
        // Show error toast if the user doesn't exist
        toast.error("User not found");
      }
    } catch (error) {
      console.error("API Error:", error);
      // Show error toast if there's a server error or any other issue
      toast.error("An error occurred, please try again.");
    }

    reset(); // Reset the form after submission
  };

  // Function to navigate to the signup page
  const goToSignup = () => {
    router.push("/Authcation/Signup");
  };

  return (
    <div className="w-full min-h-screen pt-20 py-8 px-4 flex justify-center items-center relative">
      <Image
        src="https://i.postimg.cc/9QLZhhsp/banner5.png"
        alt="bg-image"
        className="min-w-[100%] h-full absolute"
        layout="fill"
      />
      <Toaster className="!z-[10000] absolute top-10" />
      <div className="w-full max-w-md p-8 space-y-6 blurBg rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Feast-Frame Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                errors.email ? "border-red-500" : "border-gray-700"
              } rounded-md focus:outline-none bg-transparent placeholder:text-gray-900 `}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field with Visibility Toggle */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-900 font-semibold"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Toggle between text and password
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={`w-full px-4 py-2 mt-1 text-gray-900 border ${
                  errors.password ? "border-red-500" : "border-gray-700"
                } rounded-md focus:outline-none bg-transparent placeholder:text-gray-900`}
                placeholder="Enter your password"
              />
              <span
                onClick={togglePasswordVisibility} // Trigger the toggle function on click
                className="absolute right-3 top-4 text-xl cursor-pointer text-gray-900"
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Login
          </button>
        </form>

        <div className="text-center">
          <p className="text-gray-900 text-sm">
            Don`t have an account?{" "}
            <button
              onClick={goToSignup}
              className="text-orange-600 hover:text-orange-700 font-semibold focus:outline-none"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
