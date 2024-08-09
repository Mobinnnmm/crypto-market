import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { isAuthenticated } from '../useAuth';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
    }
  }, [router]);

  if (!isAuthenticated()) {
    return null; // or a loading spinner
  }

  return children;
};

export default ProtectedRoute;
