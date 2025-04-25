import { LoginForm } from '../components/LoginForm';
import { Navbar } from '../../../shared/components/layout/Navbar';
import { Container } from '../../../shared/components/ui/Container';

export const LoginPage = () => (
    <>
        <Navbar />
        <Container>
            <LoginForm />
        </Container>
    </>
);
