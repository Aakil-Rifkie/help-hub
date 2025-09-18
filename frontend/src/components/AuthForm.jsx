import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react';
import FormInput from "./FormInput";

export default function AuthForm({ isLogin, setIsLogin, formData, setFormData, onSubmit }) {
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="space-y-5 sm:space-y-6">
            {!isLogin && (
                <FormInput
                    label="Full Name"
                    id="fullname"
                    name="fullname"
                    type="text"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    icon={<User className="h-5 w-5 text-gray-400" />}
                    placeholder="Enter your full name"
                />
            )}

            <FormInput
                label="Email Address"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                icon={<Mail className="h-5 w-5 text-gray-400" />}
                placeholder="Enter your email"
            />

            <FormInput
                label="Password"
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                icon={<Lock className="h-5 w-5 text-gray-400" />}
                placeholder="Enter your password"
                extraButton={
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:text-gray-600"
                    > {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-6 w-5" />}
                    </button>
                }
            />

            {!isLogin && (
                <FormInput
                    label="Confirm Password"
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    icon={<Lock className="h-5 w-5 text-gray-400" />}
                    placeholder="Confirm your password"

                />
            )}

            <button
                onClick={onSubmit}
                className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all font-medium text-sm sm:text-base"
            >
                {isLogin ? "Sign In" : "Create Account"}
            </button>

            <div className="text-center">
                <p className="text-xs sm:text-sm text-gray-600">
                    {isLogin ? "Dont have an account?" : "Already have an account?"}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-blue-600 hover:text-blue-500 font-medium"
                    >
                        {isLogin ? "Sign up" : "Sign in"}
                    </button>
                </p>
            </div>
        </div>
    )
}