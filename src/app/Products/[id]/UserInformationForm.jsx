import React from "react";
import { useForm } from "react-hook-form";

export default function UserInformationForm({ HandleCallBuy, makeOrder }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="container relative mx-auto my-10 p-8 bg-white ">
      <button
        onClick={() => HandleCallBuy(!makeOrder)}
        className="absolute top-0 left-4 p-2 px-5 rounded-md border-0 bg-orange-500 text-white"
      >
        Back
      </button>
      <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
        User Information Form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Personal Information
          </h3>
          <hr className="mb-4 border-orange-500" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="text-gray-700 font-medium">
                Full Name:
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-600 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="text-gray-700 font-medium">
                Email Address:
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="text-gray-700 font-medium">
                Phone Number:
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone", { required: "Phone number is required" })}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm">{errors.phone.message}</p>
              )}
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="dob" className="text-gray-700 font-medium">
                Date of Birth:
              </label>
              <input
                id="dob"
                type="date"
                {...register("dob", { required: "Date of birth is required" })}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
              {errors.dob && (
                <p className="text-red-600 text-sm">{errors.dob.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Address Information
          </h3>
          <hr className="mb-4 border-orange-500" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* City Field */}
            <div>
              <label htmlFor="city" className="text-gray-700 font-medium">
                City:
              </label>
              <input
                id="city"
                type="text"
                {...register("city", { required: "City is required" })}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                placeholder="Enter your city"
              />
              {errors.city && (
                <p className="text-red-600 text-sm">{errors.city.message}</p>
              )}
            </div>

            {/* State Field */}
            <div>
              <label htmlFor="state" className="text-gray-700 font-medium">
                State:
              </label>
              <input
                id="state"
                type="text"
                {...register("state", { required: "State is required" })}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                placeholder="Enter your state"
              />
              {errors.state && (
                <p className="text-red-600 text-sm">{errors.state.message}</p>
              )}
            </div>

            {/* Country Field */}
            <div>
              <label htmlFor="country" className="text-gray-700 font-medium">
                Country:
              </label>
              <input
                id="country"
                type="text"
                {...register("country", { required: "Country is required" })}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                placeholder="Enter your country"
              />
              {errors.country && (
                <p className="text-red-600 text-sm">{errors.country.message}</p>
              )}
            </div>

            {/* Zip Code Field */}
            <div>
              <label htmlFor="zip" className="text-gray-700 font-medium">
                Zip Code:
              </label>
              <input
                id="zip"
                type="text"
                {...register("zip", { required: "Zip code is required" })}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                placeholder="Enter your zip code"
              />
              {errors.zip && (
                <p className="text-red-600 text-sm">{errors.zip.message}</p>
              )}
            </div>

            {/* Gender Field */}
            <div>
              <label htmlFor="gender" className="text-gray-700 font-medium">
                Gender:
              </label>
              <select
                id="gender"
                {...register("gender", { required: "Gender is required" })}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-600 text-sm">{errors.gender.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="text-gray-700 font-medium">
                Add a note:
              </label>
              <input
                id="phone"
                type="text"
                {...register("note", { required: false })}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                placeholder="Enter a note"
              />
              {errors.note && (
                <p className="text-red-600 text-sm">{errors.note.message}</p>
              )}
            </div>
          </div>

          {/* Address Field */}
          <div className="mt-4">
            <label htmlFor="address" className="text-gray-700 font-medium">
              Address:
            </label>
            <textarea
              id="address"
              {...register("address", { required: "Address is required" })}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              placeholder="Enter your address"
            />
            {errors.address && (
              <p className="text-red-600 text-sm">{errors.address.message}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-5 bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600 transition-all duration-200"
          >
            Submit Information
          </button>
        </div>

        {/* Extra Text */}
        <p className="text-sm text-gray-600 mt-4 text-center">
          ** By submitting this form, you agree to our terms and conditions.
          Your privacy is important to us.
        </p>
      </form>
    </div>
  );
}
