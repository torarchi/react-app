import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
            <Link to="/" className="text-2xl font-bold">MyApp</Link>
            <div className="space-x-4">
                <Link to="/login" className="text-gray-700 hover:text-gray-900">Вход</Link>
                <Link to="/register" className="text-gray-700 hover:text-gray-900">Регистрация</Link>
            </div>
        </nav>
    );
};
