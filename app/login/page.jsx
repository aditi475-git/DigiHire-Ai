"use client";

import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login clicked!");
  };

  return (
    <>
      {/* ⭐ DESKTOP VIEW (Your original layout — unchanged) */}
      <div className="hidden md:flex min-h-screen items-center justify-center bg-[#0F172A] py-10">
        <div className="flex w-[900px] bg-white rounded-xl shadow-xl overflow-hidden">

          {/* LEFT SECTION */}
          <div className="w-1/2 bg-[#0B1120] text-white flex flex-col justify-center items-center p-10 relative">
            <Image
              src="/loginImage.png"
              alt="Login Graphic"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>

          {/* RIGHT SECTION */}
          <div className="w-1/2 p-10 bg-white">
            <h1 className="text-3xl font-bold text-center mb-6">Welcome Back</h1>
            <p className="text-gray-500 text-center mb-8">
              Sign in to access your talent pipeline and AI insights
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="user@company.com"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full border rounded-md px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="text-gray-700">Keep me signed in</span>
                </label>

                <a href="#" className="text-blue-500 text-sm">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#01C1D6] text-white font-semibold py-3 rounded-md hover:bg-[#009FB1] transition"
              >
                SIGN IN
              </button>

              <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="px-3 text-gray-500">OR</span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 border rounded-md py-3 hover:bg-gray-100">
                  <img src="/Google logo.png" width="18" />
                  Google
                </button>

                <button className="flex-1 flex items-center justify-center gap-2 border rounded-md py-3 hover:bg-gray-100">
                  <img src="/microsoft1.png" width="18" />
                  Microsoft
                </button>
              </div>

              <p className="text-center mt-6 text-sm">
                New to DigiHireAI?{" "}
                <a href="#" className="text-blue-600 font-semibold">
                  Create an Account
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* ⭐ MOBILE VIEW (NEW — Added without touching desktop layout) */}
      <div className="md:hidden min-h-screen bg-[#0F172A] py-10 flex flex-col items-center px-6">

        {/* Image on top */}
        {/* <div className="w-full h-60 relative mb-8 rounded-xl overflow-hidden">
          <Image
            src="/loginImage.png"
            alt="Login Graphic"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div> */}

        {/* Form card */}
        <div className="w-full bg-white rounded-xl shadow-xl p-6">
          <h1 className="text-2xl font-bold text-center mb-4">Welcome Back</h1>
          <p className="text-gray-500 text-center mb-6">Sign in to continue</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="user@company.com"
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border rounded-md px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-gray-700 text-sm">Keep me signed in</span>
            </label>

            <button
              type="submit"
              className="w-full bg-[#01C1D6] text-white font-semibold py-3 rounded-md hover:bg-[#009FB1] transition"
            >
              SIGN IN
            </button>

            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-3 text-gray-500">OR</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="flex items-center justify-center gap-2 border rounded-md py-3 hover:bg-gray-100">
                <img src="/Google logo.png" width="18" />
                Google
              </button>

              <button className="flex items-center justify-center gap-2 border rounded-md py-3 hover:bg-gray-100">
                <img src="/microsoft1.png" width="18" />
                Microsoft
              </button>
            </div>

            <p className="text-center mt-6 text-sm">
              New to DigiHireAI?{" "}
              <a href="#" className="text-blue-600 font-semibold">
                Create an Account
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
