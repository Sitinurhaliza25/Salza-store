import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../utils";
import bg from '../assets/brn.png';


export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agree: false,
    role: "EMPLOYER",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    agree: "",
    role: "EMPLOYER",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    let isValid = true;
    const newErrors = {
      email: "",
      password: "",
      agree: "",
      role: "EMPLOYER",
    };

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (!formData.agree) {
      newErrors.agree = "You must agree to the terms";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    api
      .post("/auth/sign-up", formData)
      .then(() => {
        alert("Daftar akun berhasil!");
        navigate("/");
      })
      .catch(() => {
        alert("Email sudah terdaftar sebelumnya");
      });
  };

  return (
    <div className="flex min-h-screen bg-blue-100">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-10 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-gray-900">
        <h2 className="text-3xl font-bold mb-6">
          Daftar Menjadi Akun Admin Terbaru
        </h2>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-gradient-to-r bg-rose-200 ">
        <div className="w-full max-w-md p-8 space-y-6">
        <img src={bg} alt="Logo" className="w-50 h-30 object-cover rounded-full " />

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Masukkan email Anda"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <input
              type="password"
              name="password"
              placeholder="Masukkan password baru"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}

            <div className="flex items-center">
              <input
                type="checkbox"
                name="agree"
                id="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="agree" className="text-sm">
                Dengan mendaftar akun admin anda mudah untuk masuk ke halaman admin
              
             
              </label>
            </div>
            {errors.agree && (
              <p className="text-red-500 text-sm">{errors.agree}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-blue-600 hover:bg-blue-800 text-white"
            >
              Buat Akun
            </button>


            <p className="text-center text-sm">
              Sudah punya akun admin ?{" "}
              <a href="/login" className="text-blue-600 underline">
                Login di sini !!!
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
