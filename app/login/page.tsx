
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          
          <h1 className="text-3xl font-bold text-center">
            Welcome Back
          </h1>

          <p className="text-center text-base-content/60">
            Login to your Chatter account
          </p>

          <div className="form-control mt-4">
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
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>

          <button className="btn btn-primary w-full mt-5">
            Login
          </button>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link href="/signup" className="link link-primary">
              Create account
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

