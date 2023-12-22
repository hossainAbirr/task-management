import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Shared/Loading/Loading";

const PrivateRoute = ({ children }) => {
    const { user, authLoading } = useAuth();
    const location = useLocation();
    if (authLoading) {
        return <Loading></Loading>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to={'/login'} state={location.pathname} replace>
            {children}
        </Navigate>
    );
};

export default PrivateRoute;