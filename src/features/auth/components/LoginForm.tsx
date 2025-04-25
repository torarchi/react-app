import { useState } from 'react';
import { AuthService } from '../../../shared/services/authService';
import { useAuth } from '../../../shared/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../../shared/components/buttons/PrimaryButton';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { data } = await AuthService.login(email, password);
            login(data.access_token);
            navigate('/');
        } catch {
            alert('Ошибка авторизации');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold text-center mb-6">Вход</h2>
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
            <PrimaryButton type="submit">Войти</PrimaryButton>
        </form>
    );
};
