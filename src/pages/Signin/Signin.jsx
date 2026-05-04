import { Player } from "@lottiefiles/react-lottie-player";
import registerAnimation from "../../assets/lotte/Login icon.json";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";

const Signin = () => {
  const { signinUser } = useContext(AuthContext);
  const [err, setErr] = useState(null);

  const hndleSignin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    setErr("");

    if (!email) {
      setErr("Enter an email or phone number");
      return;
    }
    if (!password) {
      setErr("Enter a valid password");
      return;
    }

    signinUser(email, password)
      .then((result) => {
        console.log(result.user);
        setErr("");
      })
      .catch((error) => {
        setErr(error.message);
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setErr("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [err]);

  return (
    <div className=" bg-base-200 min-h-screen pt-20 max-w-5xl mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-5">Sign-In now!</h1>
          <Player
            autoplay
            loop
            src={registerAnimation}
            style={{ height: "200px", width: "200px" }}
          />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={hndleSignin} className="form">
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
                Sign-in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
