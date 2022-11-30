import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useSellers from '../hooks/useSellers';
import Sppiner from '../Pages/Shared/Sppiner/Sppiner';

const SellersRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSellers, isSellersLoading] = useSellers(user?.email);
    const location = useLocation();

    if (loading || isSellersLoading) {
        return <Sppiner></Sppiner>
    }

    if (user && isSellers) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellersRoute;