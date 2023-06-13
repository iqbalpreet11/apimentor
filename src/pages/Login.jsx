import React, { useState } from "react";
import Logo from "./../assets/logo.svg";
import { authUser, auth } from "../lib/pocketbase";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const submitLogin = () => {
    const data = { username: username, password: password };
    authUser(data).then((res) => console.log(res));
  };

  return (
    <div className="h-screen w-screen flex flex-wrap justify-center content-center bg-slate-50">
      <div className="w-96 bg-white rounded-lg shadow border px-6 py-8">
        <div className="flex justify-center">
          <img className="h-10" src={Logo} alt="" />
        </div>
        <div className="mt-10">
          <p className="text-2xl text-slate-700 font-medium">Welcome back</p>
          <p className="text-sm text-slate-400">Please enter your details !</p>

          {/* login form */}
          <div className="mt-5  ">
            {/* error */}
            {error && (
              <div className="text-sm text-red-500 mb-3">
                Invalid username or password please try again
              </div>
            )}

            <div>
              <label htmlFor="username" className="text-sm text-slate-800">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="focus:border-primary mt-1.5 border w-full rounded px-2 py-2 outline-none text-sm"
                placeholder="Enter your email"
                name="username"
                id="username"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="username" className="text-sm text-slate-800 ">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus:border-primary mt-1.5 border w-full rounded px-2 py-2 outline-none text-sm"
                placeholder="Enter your password"
                name="password"
                id="password"
              />
            </div>

            <div
              className="btn btn-primary text-center mt-5  cursor-pointer"
              onClick={() => submitLogin()}
            >
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
