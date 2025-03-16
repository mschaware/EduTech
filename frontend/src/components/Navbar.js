// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
// import { Link, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// const navigation = [
//   { name: 'Home', href: '/', current: true },
//   { name: 'Quiz', href: '/quiz', current: false },
//   { name: 'Contest', href: '/contest', current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Navbar() {
//   const [username, setUsername] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = localStorage.getItem("username");
//     if (storedUser) {
//       setUsername(storedUser);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("username");
//     setUsername(null);
//     navigate("/login");
//   };

//   return (
//     <Disclosure as="nav" className="bg-purple-800">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-purple-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
//               <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
//             </DisclosureButton>
//           </div>

//           <div className="flex flex-1 items-center justify-start">
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {navigation.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     aria-current={item.current ? 'page' : undefined}
//                     className={classNames(
//                       'text-white hover:bg-gray-700 hover:text-white',
//                       'rounded-md px-3 py-2 text-lg font-bold'
//                     )}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none">
//               <span className="sr-only">View notifications</span>
//               <BellIcon aria-hidden="true" className="size-6" />
//             </button>

//             {/* Profile Dropdown */}
//             {username ? (
//               <Menu as="div" className="relative ml-3">
//                 <div>
//                   <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none">
//                     <img
//                       alt=""
//                       src="https://via.placeholder.com/40" // Placeholder profile image
//                       className="size-8 rounded-full"
//                     />
//                     <span className="ml-2 text-white font-semibold">{username}</span>
//                   </MenuButton>
//                 </div>
//                 <MenuItems
//                   transition
//                   className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
//                 >
//                   <MenuItem>
//                     {({ active }) => (
//                       <Link
//                         to="/profile"
//                         className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}
//                       >
//                         Your Profile
//                       </Link>
//                     )}
//                   </MenuItem>
//                   <MenuItem>
//                     {({ active }) => (
//                       <button
//                         onClick={handleLogout}
//                         className={classNames(active ? "bg-gray-100" : "", "block w-full text-left px-4 py-2 text-sm text-red-600")}
//                       >
//                         Logout
//                       </button>
//                     )}
//                   </MenuItem>
//                 </MenuItems>
//               </Menu>
//             ) : (
//               <>
//                 <Link to="/login" className="text-white font-semibold px-3 py-2">Login</Link>
//                 <Link to="/signup" className="text-white font-semibold px-3 py-2">SignUp</Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </Disclosure>
//   );
// }
import { useState } from "react"; // Import useState to manage authentication
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") !== null // Check if the user is logged in
  );

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove authentication token
    setIsAuthenticated(false); // Update state
    navigate("/login"); // Redirect to login page
  };

  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Quiz", href: "/quiz", current: false },
    { name: "Contest", href: "/contest", current: false },
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
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-purple-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <Bars3Icon className="block size-6 group-data-open:hidden" aria-hidden="true" />
              <XMarkIcon className="hidden size-6 group-data-open:block" aria-hidden="true" />
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
                      className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-bold"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        "text-white hover:bg-gray-700 hover:text-white",
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

          {/* Profile & Logout Dropdown */}
          {isAuthenticated && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                    <img
                      alt="User Profile"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full"
                    />
                  </MenuButton>
                </div>

                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5">
                  <MenuItem>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) =>
            item.name === "Logout" ? (
              <button
                key={item.name}
                onClick={item.action}
                className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700"
              >
                {item.name}
              </button>
            ) : (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {item.name}
              </DisclosureButton>
            )
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
