import { useAuthContext } from '../../features/auth/context/AuthContext';

export const useAuth = () => {
  const context = useAuthContext();
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

