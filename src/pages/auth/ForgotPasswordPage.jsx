import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

function ForgotPasswordPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <p className="text-sm uppercase tracking-[0.24em] text-primary">Account Recovery</p>
      <h2 className="mt-3 text-3xl font-semibold text-ink dark:text-white">Reset your password</h2>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-300">
        We’ll send a one-time verification code to continue securely.
      </p>
      <form onSubmit={handleSubmit(() => navigate("/otp-verification"))} className="mt-8 space-y-5">
        <Input
          label="Email or Phone"
          error={errors.identifier?.message}
          {...register("identifier", { required: "This field is required" })}
        />
        <Button className="w-full">Send verification code</Button>
      </form>
      <Link to="/login" className="mt-6 inline-block text-sm font-semibold text-primary">
        Back to login
      </Link>
    </div>
  );
}

export default ForgotPasswordPage;
