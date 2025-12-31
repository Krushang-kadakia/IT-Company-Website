import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import { Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-600">
                404
            </h1>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                Page Not Found
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-md">
                Oops! The page you are looking for doesn't exist or has been moved.
            </p>

            <div className="mt-8">
                <Link to="/">
                    <Button>
                        <span className="flex items-center gap-2">
                            <Home size={20} />
                            Back to Home
                        </span>
                    </Button>
                </Link>
            </div>
        </div>
    );
}
