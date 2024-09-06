import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import byImage from "../assets/by.jpeg";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const filterActivities = (activity) => {
    const query = searchQuery.toLowerCase();
    return (
      activity.name.toLowerCase().includes(query) ||
      activity.joined.toLowerCase().includes(query) ||
      activity.type.toLowerCase().includes(query)
    );
  };

  const recentActivities = [
    {
      name: "Sitinurhaliza",
      email: "Sitinurhaliza@gmail.com",
      joined: "2023-12-09",
      type: "New",
    },
    {
      name: "Natasya",
      email: "Rajanatasyah@gmail.com",
      joined: "2023-12-05",
      type: "Member",
    },
    {
      name: "Riri",
      email: "RiriTriana@gmail.com",
      joined: "2023-11-13",
      type: "Member",
    },
    {
      name: "Susi Hariyati",
      email: "SusiHariyati@gmail.com",
      joined: "2023-12-09",
      type: "New",
    },
    {
      name: "Aisyah Romaito",
      email: "AisyahRomaito@gmail.com",
      joined: "2023-11-14",
      type: "Member",
    },
    {
      name: "Azka Pahlevi",
      email: "Azkapahlevi@gmail.com",
      joined: "2023-12-09",
      type: "New",
    },
    {
      name: "Bikash Chand",
      email: "ganeshchand@gmail.com",
      joined: "2023-11-15",
      type: "Member",
    },
  ];

  return (
    <div
      className={`flex ${
        isNavOpen ? "pl-64" : "pl-20"
      } bg-primary min-h-screen transition-all duration-500 ${
        darkMode ? "dark" : ""
      }`}
    >
      <nav
        className={`fixed top-0 left-0 h-full w-64 p-4 bg-white border-r border-gray-300 transition-all duration-500 ${
          isNavOpen ? "" : "w-20"
        } ${
          darkMode
            ? "dark:bg-gray-800 dark:border-gray-700"
            : "bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-gray-900"
        }`}
      >
        <div
          className={`flex items-center bg-white border-r border-gray-300 transition-all duration-500 ${
            isNavOpen ? "" : "w-20"
          } ${
            darkMode
              ? "dark:bg-gray-800 dark:border-gray-700"
              : "bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-gray-900"
          }`}
        >
          <img
            src={byImage}
            alt="Logo"
            className="w-10 h-10 object-cover rounded-full"
          />
          <span
            className={`ml-4 text-lg font-semibold ${
              isNavOpen ? "block" : "hidden"
            } ${darkMode ? "text-gray-200" : "text-gray-900"}`}
          >
            ADMIN SALZA
          </span>
          <li
            className={`flex items-center space-x-4 p-2 font-semibold rounded cursor-pointer ${
              darkMode ? "dark:hover:bg-gray-700" : ""
            }`}
            onClick={toggleDarkMode}
          >
            <i className="uil uil-moon text-xl"></i>
            {isNavOpen && (
              <span
                className={`text-base ${
                  darkMode ? "text-gray-300" : "text-gray-900"
                }`}
              >
                {" "}
              </span>
            )}
            {darkMode ? <Sun /> : <Moon />}
          </li>
        </div>
        <ul className="mt-10 flex flex-col space-y-2">
          
          <li>
            <Link
              to="/tambahBarang"
              className={`flex items-center space-x-4 p-2 font-semibold hover:bg-gray-200 rounded ${
                darkMode ? "dark:hover:bg-gray-700" : ""
              }`}
            >
              <i className="bx bx-add-to-queue text-xl"></i>
              {isNavOpen && (
                <span
                  className={`text-base ${
                    darkMode ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  Add Item
                </span>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/produkBarang"
              className={`flex items-center space-x-4 p-2 font-semibold hover:bg-gray-200 rounded ${
                darkMode ? "dark:hover:bg-gray-700" : ""
              }`}
            >
              <i className="bx bx-edit text-xl"></i>
              {isNavOpen && (
                <span
                  className={`text-base ${
                    darkMode ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  Edit Item
                </span>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/produkBarang"
              className={`flex items-center space-x-4 p-2 font-semibold hover:bg-gray-200 rounded ${
                darkMode ? "dark:hover:bg-gray-700" : ""
              }`}
            >
              <i className="bx bx-message-square-x text-xl"></i>
              {isNavOpen && (
                <span
                  className={`text-base ${
                    darkMode ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  Delete Item
                </span>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/produkBarang"
              className={`flex items-center space-x-4 p-2 font-semibold hover:bg-gray-200 rounded ${
                darkMode ? "dark:hover:bg-gray-700" : ""
              }`}
            >
              <i className="bx bx-detail text-xl"></i>
              {isNavOpen && (
                <span
                  className={`text-base ${
                    darkMode ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  Details Item
                </span>
              )}
            </Link>
          </li>
          {/* <li>
            <Link to="" className={`flex items-center space-x-4 p-2 hover:bg-gray-200 rounded font-semibold ${darkMode ? 'dark:hover:bg-gray-700' : ''}`}>
              <i className="uil uil-share text-xl"></i>
              {isNavOpen && <span className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>Share</span>}
            </Link>
          </li> */}
        </ul>
        <div className="mt-auto pt-4 border-t border-gray-300">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link
                to="/login"
                className={`flex items-center space-x-4 p-2 font-semibold hover:bg-gray-200 rounded ${
                  darkMode ? "dark:hover:bg-gray-700" : ""
                }`}
              >
                <i className="uil uil-signout text-xl"></i>
                {isNavOpen && (
                  <span
                    className={`text-base ${
                      darkMode ? "text-gray-300" : "text-gray-900"
                    }`}
                  >
                    Logout
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex-1">
        <div
          className={`fixed top-0 left-64 w-full bg-white p-4 border-b border-gray-300 flex justify-between items-center transition-all duration-500 ${
            darkMode
              ? "dark:bg-gray-900 dark:border-gray-700"
              : "bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-gray-900"
          }`}
        >
          <i
            className="uil uil-bars text-xl cursor-pointer"
            onClick={toggleNav}
          ></i>
          <div className="relative w-full">
            <i className="uil uil-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"></i>
            <input
              type="text"
              placeholder="Search here..."
              className={`pl-8 w-full border border-gray-300 rounded py-2 px-4 ${
                darkMode
                  ? "dark:bg-gray-800 dark:border-gray-700 text-gray-300"
                  : ""
              }`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-4">
            <img src={byImage} alt="Admin" className="w-8 h-8 rounded-full" />
            {/* <span className={`text-base font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>Welcome, Riri</span> */}
          </div>
        </div>
        <div
          className={`mt-16 p-4 ${
            darkMode
              ? "dark:bg-gray-800 dark:border-gray-700 text-gray-300"
              : ""
          }`}
        >
          <h2
            className={`text-2xl font-semibold text-center mb-4  ${
              darkMode
                ? "dark:bg-gray-800 dark:border-gray-700 text-gray-300"
                : ""
            }`}
          >
            Recent Activities
          </h2>
          <ul className="space-y-4">
            {recentActivities
              .filter(filterActivities)
              .map((activity, index) => (
                <li
                  key={index}
                  className={`p-4 border border-gray-300 rounded-lg ${
                    darkMode
                      ? "dark:bg-gray-800 dark:border-gray-700"
                      : "bg-white"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3
                        className={`text-lg font-semibold ${
                          darkMode ? "text-gray-300" : "text-gray-900"
                        }`}
                      >
                        {activity.name}
                      </h3>
                      <p
                        className={`text-gray-500 ${
                          darkMode ? "text-gray-400" : ""
                        }`}
                      >
                        {activity.email}
                      </p>
                    </div>
                    <span
                      className={`py-1 px-3 rounded-full ${
                        activity.type === "New"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-300 text-gray-700"
                      }`}
                    >
                      {activity.type}
                    </span>
                  </div>
                  <p
                    className={`text-gray-500 ${
                      darkMode ? "text-gray-400" : ""
                    }`}
                  >
                    Joined on {activity.joined}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
