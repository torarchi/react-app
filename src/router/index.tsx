import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../features/auth/pages/LoginPage';
import { RegisterPage } from '../features/auth/pages/RegisterPage';
import { HomePage } from '../features/home/pages/HomePage';
import { useAuth } from '../shared/hooks/useAuth';
import { ReactElement } from 'react';

const PrivateRoute = ({ children }: { children: ReactElement }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    </BrowserRouter>
);
