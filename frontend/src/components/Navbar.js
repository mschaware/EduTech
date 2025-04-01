import React, { useState } from "react"; // To use state for authentication
import { useNavigate } from "react-router-dom"; // For navigation
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react"; // Headless UI components
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid"; // Icons for navbar
import { Link } from "react-router-dom"; // For navigation links

  export default function Navbar({ darkMode, toggleTheme }) {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(
      localStorage.getItem("token") !== null
    );
  
    const handleLogout = () => {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      navigate("/login");
    };

  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Quiz", href: "/quiz", current: false },
    { name: "Contest", href: "/ContestPage", current: false },
    { name: "Compiler", href: "/compiler", current: false },

    { name: "Community", href: "/community", current: false }, // Added Community link
    ...(isAuthenticated
      ? [{ name: "Logout", href: "#", current: false, action: handleLogout }]
      : [
          { name: "Login", href: "/login", current: false },
          { name: "SignUp", href: "/signup", current: false },
        ]),
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure as="nav" className="bg-purple-800">
      {
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-purple-700 hover:text-white focus:ring-2 focus:ring-white">
              <Bars3Icon
                className="block size-6 group-data-open:hidden"
                aria-hidden="true"
              />
              <XMarkIcon
                className="hidden size-6 group-data-open:block"
                aria-hidden="true"
              />
            </DisclosureButton>
          </div>

          {/* Navbar Links */}
          <div className="flex flex-1 items-center justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) =>
                  item.name === "Logout" ? (
                    <button
                      key={item.name}
                      onClick={item.action}
                      className="text-white hover:bg-gray-700 rounded-md px-3 py-2 text-lg font-bold"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        "text-white hover:bg-gray-700",
                        "rounded-md px-3 py-2 text-lg font-bold"
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Profile and Dark Mode Toggle */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white hover:bg-gray-700"
            >
              {darkMode ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>

            {/* Profile Dropdown */}
            {isAuthenticated && (
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <img
                      alt="User Profile"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                </div>
              </Menu>
            )}
          </div>
        </div>
      </div>
    }
    </Disclosure>
  );
}
