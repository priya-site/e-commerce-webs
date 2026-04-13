import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    // Dummy login logic (you can replace with API later)
    if (email === "admin@gmail.com" && password === "1234") {
      toast.success("Login Successful ✅");
    } else {
      toast.error("Invalid Credentials ❌");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h2 className="text-center mb-4">Login</h2>
        <hr />

        <div className="row justify-content-center">
          <div className="col-md-4 col-sm-8">
            <div className="card shadow p-4">
              <form onSubmit={handleSubmit}>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Register link */}
                <p className="text-center">
                  New here?{" "}
                  <Link to="/register" className="text-decoration-none text-primary">
                    Register
                  </Link>
                </p>

                {/* Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-dark">
                    Login
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;