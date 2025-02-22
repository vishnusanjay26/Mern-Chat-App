import React from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {loading,login} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-slate-300 ">
          Login
          <span className="text-blue-950 font-bold"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base text-slate-300 font-bold label-text">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your Username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base font-bold label-text text-slate-300">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-slate-100 text-sm font-semibold hover:underline hover:text-blue-600 mt-2 inline-block backdrop-contrast-100"
          >
            {"Don't"} have an account?
          </Link>
          <div className="flex justify-center">
            <button
              className="w-24 btn btn-sm mt-2 bg-gray-900 text-white py-2 rounded hover:text-blue-600"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
