import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

function OtpVerificationPage() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <p className="text-sm uppercase tracking-[0.24em] text-primary">OTP Verification</p>
      <h2 className="mt-3 text-3xl font-semibold text-ink dark:text-white">Verify your identity</h2>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-300">
        Enter the 6-digit code sent to your registered mobile number.
      </p>
      <form onSubmit={handleSubmit(() => navigate("/login"))} className="mt-8 space-y-5">
        <Input label="Verification Code" maxLength={6} {...register("otp")} />
        <Button className="w-full">Verify code</Button>
      </form>
    </div>
  );
}

export default OtpVerificationPage;
