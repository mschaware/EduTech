
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

