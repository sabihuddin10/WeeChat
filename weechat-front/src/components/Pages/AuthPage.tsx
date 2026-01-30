import { useState } from "react";
import LoginForm from "../SignUpLogin/Login/LoginForm/LoginForm";
import SignUpForm from "../SignUpLogin/SignUp/SignUpForm/SignUpForm";
import logo from '../../assets/WCH.png';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8 relative z-10">
          <h1 className="text-2xl font-bold text-white mb-2">FUCK FUCK FUCK</h1>
          <div className="inline-flex items-center justify-center mb-4">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
                boxShadow: "0 4px 12px rgba(168, 85, 247, 0.3)",
              }}
            >
              <img
                src={logo}
                alt="WeeChat Logo"
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain rounded-full"
              />
            </div>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
            WeeChat
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400">
            Connect instantly
          </p>
        </div>

        {/* Auth Card */}
        <div
          style={{
            background: "rgba(17, 24, 39, 0.8)",
            backdropFilter: "blur(10px)",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
          className="p-6 sm:p-8 relative z-10"
        >
          {/* Tabs */}
          <div className="flex gap-4 mb-6 sm:mb-8 text-sm sm:text-base">
            <button
              onClick={() => setIsSignUp(false)}
              className={`flex-1 pb-2 sm:pb-3 font-semibold transition-all ${
                !isSignUp
                  ? "text-white border-b-2 border-purple-500"
                  : "text-gray-400 border-b border-gray-700 hover:text-gray-300"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className={`flex-1 pb-2 sm:pb-3 font-semibold transition-all ${
                isSignUp
                  ? "text-white border-b-2 border-purple-500"
                  : "text-gray-400 border-b border-gray-700 hover:text-gray-300"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Render Forms */}
          {isSignUp ? (
            <SignUpForm
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleSubmit}
            />
          ) : (
            <LoginForm
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleSubmit}
            />
          )}

          {/* Footer toggle */}
          <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm md:text-base text-gray-400">
            {!isSignUp ? (
              <>
                Don't have an account?{" "}
                <button
                  onClick={() => setIsSignUp(true)}
                  className="text-purple-400 hover:text-purple-300 font-semibold transition"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsSignUp(false)}
                  className="text-purple-400 hover:text-purple-300 font-semibold transition"
                >
                  Sign in
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
