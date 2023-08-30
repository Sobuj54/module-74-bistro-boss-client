import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextApi/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../shared/SocialLogin/SocialLogin";
import authentication from "../../assets/others/authentication2.png";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photo)
          .then(() => {
            const saveUser = { name: data.name, email: data.email };
            fetch("https://bistro-boss-server-theta-virid.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User has been created successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | SignUp</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2">
            <img src={authentication} alt="signup" />
          </div>
          <div className="card  w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h3 className="text-3xl font-bold text-center">SignUp Now !</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  name="name"
                  required
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  {...register("photo")}
                  name="photo"
                  required
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email")}
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    pattern:
                      /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}/,
                  })}
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                {/* showing error depending on the user password input */}
                {errors.password?.type === "pattern" && (
                  <p>
                    Minimum 8 characters Maximum 20 characters At least one
                    uppercase character At least one lowercase character At
                    least one digit At least one special character{" "}
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="signup"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <p className="text-center">
              <small>
                Already Have an Account?
                <Link to="/login" className="text-orange-500 ml-2">
                  Login
                </Link>
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
