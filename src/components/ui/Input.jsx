import { cn } from "../../utils/cn";

function Input({ label, error, as = "input", className, ...props }) {
  const Component = as;

  return (
    <label className="block space-y-2">
      {label ? <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{label}</span> : null}
      <Component className={cn("input-base", className)} {...props} />
      {error ? <span className="text-xs text-rose-500">{error}</span> : null}
    </label>
  );
}

export default Input;
