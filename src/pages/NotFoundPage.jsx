import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="text-sm uppercase tracking-[0.24em] text-primary">404</p>
      <h1 className="mt-4 text-5xl font-semibold text-ink dark:text-white">Page not found</h1>
      <p className="mt-4 max-w-md text-sm text-slate-500 dark:text-slate-300">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Link to="/login" className="mt-8">
        <Button>Go to login</Button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
