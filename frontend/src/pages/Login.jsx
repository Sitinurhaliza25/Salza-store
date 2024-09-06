import { useState } from "react";
import { api } from "../utils";
import bg from '../assets/brn.png';
import {Eye,EyeOff} from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      api
        .post(`/auth/sign-in?email=${email}&password=${password}`)
        .then(() => {
          alert("Login Berhasil");
          // Redirect to the employe page
          window.location.href = "/";
        })
        .catch(() => alert("Email atau password salah"));
    } catch (error) {
      console.error("Login failed:", error);
      alert("Email atau password salah");
    }
  };

  return (
    <div className="flex min-h-screen bg-blue-100">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-10 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-gray-900 ">
        <h2 className="text-3xl text-center font-bold mb-6">
         Login Ke Akun Admin Anda !!!
        </h2>

    
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-rose-200">
        <div className="w-full max-w-md p-6 space-y-6">
          <img src={bg} alt="Logo" className="w-50 h-30 object-cover rounded-full " />

          {/* <h2 className="text-2xl font-bold text-gray-900">
            Selamat Datang Kembali!
            </h2> */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email Anda"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 cursor-pointer text-gray-500"
              >
                {showPassword ? <EyeOff />  : <Eye /> }
              </span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="mr-2"
                />
                <label htmlFor="remember" className="text-sm">
                  Ingat saya
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 underline">
                Lupa password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
            >
              Masuk
            </button>


            <p className="text-center text-sm">
              Belum punya akun?{" "}
              <a href="/register" className="text-blue-600 underline">
                Daftar di sini
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
