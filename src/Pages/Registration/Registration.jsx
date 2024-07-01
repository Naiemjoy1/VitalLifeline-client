import { Link } from "react-router-dom";
import signUp from "../../assets/signup.svg";
import { useForm } from "react-hook-form";
import { bloodGroup } from "../../../utils/data/bloodGroup.js";
import useDivisions from "../../Hooks/useDivisions.jsx";
import useUnion from "../../Hooks/useUnion.jsx";
import useDistrict from "../../Hooks/useDistrict.jsx";
import useUpazila from "../../Hooks/useUpazila.jsx";

const Registration = () => {
  const [divisions] = useDivisions();
  console.log("divisions", divisions);

  const [districs] = useDistrict();
  console.log("districs", districs);

  const [upazilas] = useUpazila();
  console.log("upazilas", upazilas);

  const [unions] = useUnion();
  console.log("unions", unions);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const password = watch("password");

  return (
    <div
      onSubmit={handleSubmit(onSubmit)}
      className="container mx-auto my-10 min-h-[calc(100vh-246px)] flex justify-center gap-6 items-center"
    >
      <div className="w-1/2">
        <img src={signUp} alt="" />
      </div>
      <div className="w-1/2">
        <form className="card-body">
          {/* row 1 */}
          <div className="flex justify-center items-center gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Your Email</span>
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
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
          </div>
          {/* row 2 */}
          <div className="flex justify-center items-center gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Profile Image</span>
              </label>
              <input
                type="file"
                name="image"
                className="file-input w-full max-w-xs"
                {...register("image", { required: true })}
              />
              {errors.image && <span>This field is required</span>}
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Your Blood Group</span>
              </label>
              <select
                name="bloodGroup"
                className="input input-bordered"
                {...register("bloodGroup", { required: true })}
              >
                <option value="">Select Blood Group</option>
                {bloodGroup.map((blood, index) => (
                  <option key={index} value={blood}>
                    {blood.group}
                  </option>
                ))}
              </select>
              {errors.blood && <span>This field is required</span>}
            </div>
          </div>
          {/* row 3 */}
          <div className="flex justify-center items-center gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Divisions</span>
              </label>
              <select
                name="divisions"
                className="input input-bordered"
                {...register("district", { required: true })}
              >
                <option value="">Select Divisions</option>
                {divisions.map((division, id) => (
                  <option key={id} value={division}>
                    {division.name}
                  </option>
                ))}
              </select>
              {errors.divisions && <span>This field is required</span>}
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">District</span>
              </label>
              <select
                name="district"
                className="input input-bordered"
                {...register("district", { required: true })}
              >
                <option value="">Select District</option>
                {districs.map((distric, id) => (
                  <option key={id} value={distric}>
                    {distric.name}
                  </option>
                ))}
              </select>
              {errors.district && <span>This field is required</span>}
            </div>
          </div>
          {/* row 4 */}
          <div className="flex justify-center items-center gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Upazila</span>
              </label>
              <select
                name="upazila"
                className="input input-bordered"
                {...register("upazila", { required: true })}
              >
                <option value="">Select Upazila</option>
                {upazilas.map((upazila, id) => (
                  <option key={id} value={upazila}>
                    {upazila.name}
                  </option>
                ))}
              </select>
              {errors.upazila && <span>This field is required</span>}
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Union</span>
              </label>
              <select
                name="union"
                className="input input-bordered"
                {...register("union", { required: true })}
              >
                <option value="">Select Union</option>
                {unions.map((union, id) => (
                  <option key={id} value={union}>
                    {union.name}
                  </option>
                ))}
              </select>
              {errors.union && <span>This field is required</span>}
            </div>
          </div>
          {/* row 5 */}
          <div className="flex justify-center items-center gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-__+.])(?=.*[a-z])/,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">
                  Password must be at least 6 characters
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one uppercase, one lowercase, one number,
                  and one special character
                </p>
              )}
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                className="input input-bordered"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === password || "The passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>
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
