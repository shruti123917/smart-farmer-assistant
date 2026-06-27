import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { useAuth } from "../../context/AuthContext";

function RegisterPage() {
  const navigate = useNavigate();
  const { register: registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    registerUser(values);
    navigate("/otp-verification");
  };

  return (
    <div>
      <p className="text-sm uppercase tracking-[0.24em] text-primary">Create Account</p>
      <h2 className="mt-3 text-3xl font-semibold text-ink dark:text-white">Set up your digital farm workspace</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
        <Input label="Full Name" error={errors.name?.message} {...register("name", { required: "Name is required" })} />
        <Input label="Phone" error={errors.phone?.message} {...register("phone", { required: "Phone is required" })} />
        <Input label="Email" type="email" error={errors.email?.message} {...register("email", { required: "Email is required" })} />
        <Input label="Password" type="password" error={errors.password?.message} {...register("password", { required: "Password is required" })} />
        <Button className="w-full">Create account</Button>
      </form>
      <p className="mt-6 text-sm text-slate-500 dark:text-slate-300">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-primary">
          Login
        </Link>
      </p>
    </div>
  );
}

export default RegisterPage;
