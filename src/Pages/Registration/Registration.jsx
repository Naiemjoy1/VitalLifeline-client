import { Link } from "react-router-dom";
import signUp from "../../assets/signup.svg";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import useDivisions from "../../Hooks/useDivisions";
import useDistrict from "../../Hooks/useDistrict";
import useUpazila from "../../Hooks/useUpazila";
import useUnion from "../../Hooks/useUnion";
import { bloodGroup } from "../../../utils/data/bloodGroup.js";
import useAuth from "../../Hooks/useAuth.jsx";

const Registration = () => {
  const [divisions] = useDivisions();
  const [districs] = useDistrict();
  const [upazilas] = useUpazila();
  const [unions] = useUnion();

  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { createUser } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    const selectedDivision = divisions.find((div) => div.id === data.division);
    const selectedDistrict = districs.find((dis) => dis.id === data.district);
    const selectedUpazila = upazilas.find((upz) => upz.id === data.upazila);
    const selectedUnion = unions.find((uni) => uni.id === data.union);

    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.error("Error during registration:", error);
      });

    const userInfo = {
      name: data.name,
      email: data.email,
      image: "adding soon",
      blood: data.bloodGroup,
      division: selectedDivision?.name,
      district: selectedDistrict?.name,
      upazila: selectedUpazila?.name,
      union: selectedUnion?.name,
      role: "donor",
    };
    console.log("userInfo", userInfo);
  };

  const password = watch("password");

  const handleDivision = (event) => {
    setDivision(event.target.value);
    setDistrict("");
    setUpazila("");
  };

  const handleDistrict = (event) => {
    setDistrict(event.target.value);
    setUpazila("");
  };

  const handleUpazilaChange = (event) => {
    setUpazila(event.target.value);
  };

  const filteredDistricts = districs.filter(
    (district) => district.division_id === division
  );

  const filteredUpazilas = upazilas.filter(
    (upazila) => upazila.district_id === district
  );

  const filteredUnions = unions.filter(
    (union) => union.upazilla_id === upazila
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-screen-lg w-full mx-4 md:mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-1/2">
            <img src={signUp} alt="" />
          </div>
          <div className="w-1/2">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
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
                {/* <div className="form-control w-1/2">
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
            </div> */}
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
                      <option key={index} value={blood.group}>
                        {blood.group}
                      </option>
                    ))}
                  </select>
                  {errors.bloodGroup && <span>This field is required</span>}
                </div>
              </div>
              {/* row 3 */}
              <div className="flex justify-center items-center gap-4">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Divisions</span>
                  </label>
                  <select
                    name="division"
                    className="input input-bordered"
                    {...register("division", { required: true })}
                    onChange={handleDivision}
                  >
                    <option value="">Select Division</option>
                    {divisions.map((division, id) => (
                      <option key={id} value={division.id}>
                        {division.name}
                      </option>
                    ))}
                  </select>
                  {errors.division && <span>This field is required</span>}
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">District</span>
                  </label>
                  <select
                    name="district"
                    className="input input-bordered"
                    {...register("district", { required: true })}
                    onChange={handleDistrict}
                    disabled={!division}
                  >
                    <option value="">Select District</option>
                    {filteredDistricts.map((district, id) => (
                      <option key={id} value={district.id}>
                        {district.name}
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
                    onChange={handleUpazilaChange}
                    disabled={!district}
                  >
                    <option value="">Select Upazila</option>
                    {filteredUpazilas.map((upazila, id) => (
                      <option key={id} value={upazila.id}>
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
                    disabled={!upazila}
                    {...register("union")}
                  >
                    <option value="">Select Union</option>
                    {filteredUnions.map((union, id) => (
                      <option key={id} value={union.id}>
                        {union.name}
                      </option>
                    ))}
                  </select>
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
                      Password must have one uppercase, one lowercase, one
                      number, and one special character
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
                    <p className="text-red-600">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary text-white">
                  Registration
                </button>
              </div>

              <p className="text-center text-sm">
                Already have an account? Please{" "}
                <Link to="/login" className="text-blue-500">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/">
            <button className="btn btn-sm btn-primary text-white">
              Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
