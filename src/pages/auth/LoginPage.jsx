import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiArrowRight } from "react-icons/fi";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { useAuth } from "../../context/AuthContext";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "farmer@example.com",
      password: "password123",
    },
  });

  const onSubmit = (values) => {
    login(values);
    navigate("/app/dashboard");
  };

  return (
    <div>
      <p className="text-sm uppercase tracking-[0.24em] text-primary">Welcome Back</p>
      <h2 className="mt-3 text-3xl font-semibold text-ink dark:text-white">Log in to your farm command center</h2>
      <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-300">
        Monitor crop health, market prices, and weather advisories in one unified workspace.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
        <Input
          label="Email"
          type="email"
          error={errors.email?.message}
          {...register("email", { required: "Email is required" })}
        />
        <Input
          label="Password"
          type="password"
          error={errors.password?.message}
          {...register("password", { required: "Password is required" })}
        />
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-500 dark:text-slate-300">
            <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
            Remember me
          </label>
          <Link to="/forgot-password" className="font-medium text-primary">
            Forgot password?
          </Link>
        </div>
        <Button className="w-full">
          Login <FiArrowRight />
        </Button>
      </form>

      <p className="mt-6 text-sm text-slate-500 dark:text-slate-300">
        New here?{" "}
        <Link to="/register" className="font-semibold text-primary">
          Create account
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
