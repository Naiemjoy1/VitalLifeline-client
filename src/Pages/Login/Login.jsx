import { Link } from "react-router-dom";
import signUp from "../../assets/signup.svg";
const Login = () => {
  return (
    <div className="container mx-auto my-10 min-h-[calc(100vh-246px)] flex justify-center gap-6">
      <div className="w-1/2">
        <img src={signUp} alt="" />
      </div>
      <div className="w-1/2">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white">Login</button>
          </div>
          <p className=" text-center">
            New to here? Please
            <Link to="/registration">
              <button className="btn btn-link">Register</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
