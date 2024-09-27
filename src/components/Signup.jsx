import { useState } from "react";

const Signup = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
        role: ""
    });

    const handleSignup = (e) => {
        const { value, name } = e.target;

        setData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    };

    const handleRegister = () => {
        console.log(data)
    }

    return (
        <div className="flex flex-col gap-2 max-w-[500px] m-auto mt-[100px]">
            <h3 className="text-lg font-bold">Please Register</h3>
            <input
                name="username"
                onChange={(e) => handleSignup(e)}
                value={data.username}
                className="border-black border rounded-sm"
                type="text"
                id="username"
                placeholder="ENTER USERNAME"
            />
            <input
                name="password"
                onChange={(e) => handleSignup(e)}
                value={data.password}
                className="border-black border rounded-sm"
                type="text"
                id="password"
                placeholder="ENTER PASSWORD"
            />
            <select
                value={data.role}
                onChange={(e) => handleSignup(e)}
                className="border-black border rounded-sm"
                name="role"
                id="role"
            >
                <option value="">Select User Type</option>
                <option value="reader">Reader</option>
                <option value="author">Author</option>
                <option value="admin">Admin</option>
            </select>
            <button onClick={handleRegister} className="bg-black text-white p-2">Register</button>
        </div>
    );
};

export default Signup;
