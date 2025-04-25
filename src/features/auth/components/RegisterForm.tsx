import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../../shared/services/authService';
import { PrimaryButton } from '../../../shared/components/buttons/PrimaryButton';


export const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await AuthService.register(email, password);
            alert('Успешная регистрация');
            navigate('/login');
        } catch {
            alert('Ошибка регистрации');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold text-center mb-6">Регистрация</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="border rounded-lg p-2 w-full"
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="border rounded-lg p-2 w-full"
            />
            <PrimaryButton type="submit">Зарегистрироваться</PrimaryButton>
        </form>
    );
};
