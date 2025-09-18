import React, { useState } from "react";
import { Heart } from "lucide-react";
import AuthForm from "./AuthForm";
import AuthWelcome from "./AuthWelcome";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('Email and passwords are required');
      return false;
    }

    if (!isLogin) {
      if (!formData.fullname) {
        setError('Full name is required');
        return false;
      }

      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return (false);
      }

      if (formData.password.length < 6) {
        setError('Password must be atleast 6 characters');
        return false;
      }
    }

    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;
    setIsLoading(true);

    try {

      if (isLogin) {
        const response = await axios.post("http://localhost:5000/api/users/login", {
          email: formData.email,
          password: formData.password
        });

        const token = response.data.token

        const user = {
          id: response.data._id,
          fullname: response.data.fullname,
          email: response.data.email,
        };
        
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));


        navigate("/home");
      } 
      else {
        const response = await axios.post("http://localhost:5000/api/users", {
          fullname: formData.fullname,
          email: formData.email,
          password: formData.password
        });

        setIsLogin(true);
      }

    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      setError(errorMessage);
      console.error('Auth error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-slate-50">
        <div className="w-full max-w-md space-y-8">

          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-600 p-3 rounded-xl">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {isLogin ? "Welcome back" : "Create account"}
            </h2>
            <p className="mt-2 text-gray-600">
              {isLogin
                ? "Sign in to your Help Hub account"
                : "Join the Help Hub community"}
            </p>
          </div>


          <AuthForm
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
          />
        </div>
      </div>


      <div className="hidden md:flex w-full md:w-1/2 bg-gradient-to-br from-blue-600 to-purple-700 items-center justify-center">
        <AuthWelcome />
      </div>
    </div>
  );
}
