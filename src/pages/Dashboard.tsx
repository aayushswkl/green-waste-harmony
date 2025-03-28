
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { useAuth } from '@/contexts/AuthContext';
import UserDashboard from '@/components/dashboard/UserDashboard';
import AdminDashboard from '@/components/dashboard/AdminDashboard';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

const Dashboard = () => {
  const { isAdmin } = useAuth();
  
  return (
    <ProtectedRoute>
      <MainLayout>
        {isAdmin() ? <AdminDashboard /> : <UserDashboard />}
      </MainLayout>
    </ProtectedRoute>
  );
};

export default Dashboard;
