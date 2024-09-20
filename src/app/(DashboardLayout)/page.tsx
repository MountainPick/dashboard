'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect directly to camera dashboard
    router.push('/camera-dashboard');
  }, [router]);

  return null; // No need to render anything as we are redirecting
}

export default Dashboard;
