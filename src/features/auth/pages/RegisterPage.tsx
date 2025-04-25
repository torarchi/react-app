import { RegisterForm } from '../components/RegisterForm';
import { Navbar } from '../../../shared/components/layout/Navbar';
import { Container } from '../../../shared/components/ui/Container';

export const RegisterPage = () => (
    <>
        <Navbar />
        <Container>
            <RegisterForm />
        </Container>
    </>
);
