import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.password) {
            setError("All fields are required!");
            return;
        }

        try {
            const res = await axios.post("http://localhost:4000/api/auth/login", formData);
            localStorage.setItem("token", res.data.token);
            navigate("/");
        } catch (error) {
            setError(error.response?.data?.msg || "Invalid credentials. Try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center">Sign In</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="mt-4">
                    <input type="text" name="username" placeholder="Username" onChange={handleChange} className="w-full p-2 border rounded my-2" />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border rounded my-2" />
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Sign In</button>
                </form>
                <p className="mt-4 text-center">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-blue-500 hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
