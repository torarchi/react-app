import { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface PrimaryButtonProps extends ButtonProps {
    to?: string;
    href?: string;
}

export const PrimaryButton = ({ children, to, href, ...props }: PrimaryButtonProps) => {
    if (to) {
        return (
            <Link to={to} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a
                href={href}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
                {children}
            </a>
        );
    }

    return (
        <button
            {...props}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
            {children}
        </button>
    );
};
