import { Link } from "react-router-dom";
import signUp from "../../assets/signup.svg";
import { useForm } from "react-hook-form";

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div
      onSubmit={handleSubmit(onSubmit)}
      className="container mx-auto my-10 min-h-[calc(100vh-246px)] flex justify-center gap-6"
    >
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
              name="email"
              placeholder="Your Email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white">Registration</button>
          </div>
          <p className=" text-center">
            Already account? Please
            <Link to="/login">
              <button className="btn btn-link">Login</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
