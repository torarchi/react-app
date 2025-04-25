import { useAuth } from '../../../shared/hooks/useAuth';
import { Container } from '../../../shared/components/ui/Container';
import { PrimaryButton } from '../../../shared/components/buttons/PrimaryButton';
import { Navbar } from '../../../shared/components/layout/Navbar';

export const HomePage = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <>
            <Navbar />
            <Container>
                <div className="flex flex-col items-center justify-center min-h-[80vh]">
                    <h1 className="text-4xl font-bold mb-8">Добро пожаловать!</h1>
                    {isAuthenticated ? (
                        <PrimaryButton onClick={logout}>Выйти</PrimaryButton>
                    ) : (
                        <div className="space-x-4">
                            <PrimaryButton to="/login">Войти</PrimaryButton>
                            <PrimaryButton to="/register">Регистрация</PrimaryButton>
                        </div>
                    )}
                </div>
            </Container>
        </>
    );
};
