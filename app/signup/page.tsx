
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">

          <h1 className="text-3xl font-bold text-center">
            Create Account
          </h1>

          <p className="text-center text-base-content/60">
            Join Chatter today
          </p>

          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="input input-bordered w-full"
            />
          </div>

          <button className="btn btn-primary w-full mt-5">
            Sign Up
          </button>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link href="/login" className="link link-primary">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}
