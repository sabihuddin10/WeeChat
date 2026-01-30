import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

interface Props {
  formData: { email: string; password: string; confirmPassword: string; username: string };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onSubmit: (e: React.FormEvent) => void;
}

export default function SignUpForm({ formData, setFormData, onSubmit }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Username */}
      <div>
        <label className="block text-xs sm:text-sm md:text-base font-medium text-gray-300 mb-2">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Choose a username"
          className="w-full px-4 py-2 sm:py-3 md:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 text-sm sm:text-base md:text-base focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs sm:text-sm md:text-base font-medium text-gray-300 mb-2">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 text-gray-500" size={18} />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full pl-10 pr-4 py-2 sm:py-3 md:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 text-sm sm:text-base md:text-base focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="block text-xs sm:text-sm md:text-base font-medium text-gray-300 mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-3.5 text-gray-500" size={18} />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full pl-10 pr-10 py-2 sm:py-3 md:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 text-sm sm:text-base md:text-base focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-400 transition"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-xs sm:text-sm md:text-base font-medium text-gray-300 mb-2">
          Confirm Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-3.5 text-gray-500" size={18} />
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full pl-10 pr-4 py-2 sm:py-3 md:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 text-sm sm:text-base md:text-base focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        style={{
          background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
          boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)'
        }}
        className="w-full py-2 sm:py-3 md:py-3 rounded-lg font-semibold text-sm sm:text-base md:text-base text-white mt-6 hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105"
      >
        Create Account
      </button>
    </form>
  );
}
