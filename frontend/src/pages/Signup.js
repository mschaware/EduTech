// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "", email: "", mobile: "", age: "", college: "", 
//     leetcode: "", codechef: "", codeforces: "", password: ""
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
//       alert(res.data.msg);
//       navigate("/login");
//     } catch (err) {
//       setError(err.response?.data?.msg || "Signup failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold text-purple-600 mb-6">Sign Up</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           {Object.keys(formData).map((field) => (
//             <div key={field} className="mb-4">
//               <label className="block text-gray-700 capitalize">{field}</label>
//               <input
//                 type={field === "password" ? "password" : "text"}
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
//                 required={field !== "leetcode" && field !== "codechef" && field !== "codeforces"}
//               />
//             </div>
//           ))}
//           <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
//             Sign Up
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Already have an account? <a href="/login" className="text-purple-600 hover:underline">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        leetcode: "",
        codechef: "",
        codeforces: "",
        password: "",
        mobile: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.password || !formData.mobile) {
            setError("Username, Password, and Mobile No. are required!");
            return;
        }

        try {
            await axios.post("http://localhost:4000/api/auth/register", formData);
            navigate("/login");
        } catch (error) {
            setError(error.response?.data?.msg || "Signup failed. Try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="mt-4">
                    <input type="text" name="username" placeholder="Username" onChange={handleChange} className="w-full p-2 border rounded my-2" />
                    <input type="text" name="leetcode" placeholder="LeetCode Username" onChange={handleChange} className="w-full p-2 border rounded my-2" />
                    <input type="text" name="codechef" placeholder="CodeChef Username" onChange={handleChange} className="w-full p-2 border rounded my-2" />
                    <input type="text" name="codeforces" placeholder="CodeForces Username" onChange={handleChange} className="w-full p-2 border rounded my-2" />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border rounded my-2" />
                    <input type="text" name="mobile" placeholder="Mobile No." onChange={handleChange} className="w-full p-2 border rounded my-2" />
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;

