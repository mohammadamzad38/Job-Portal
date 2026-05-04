import { Player } from "@lottiefiles/react-lottie-player";
import registerAnimation from "../../assets/lotte/Register.json";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import GoogleSign from "../Shared/GoogleSign";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [err, setErr] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setErr("");

    if (!email) {
      setErr("Enter an email or phone number");
      return;
    }

    if (!password) {
      setErr("Enter a valid password");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;

    if (passwordRegex.test(password)) {
      setErr(
        "Password must be 8+ chars with uppercase, lowercase, number & special char",
      );
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setErr("");
      })
      .catch((error) => {
        setErr(error.message);
      });
  };

  useEffect(() => {
    if (err) {
      const timer = setTimeout(() => {
        setErr("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [err]);

  return (
    <div className=" bg-base-200 min-h-screen pt-20 max-w-5xl mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <Player
            autoplay
            loop
            src={registerAnimation}
            style={{ height: "200px", width: "200px" }}
          />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister} className="form">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <p className="text-red-400 transition-opacity duration-300">
                {err}
              </p>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <GoogleSign />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
