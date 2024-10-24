import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate, Outlet } from 'react-router-dom';
export default function ProtectedRoute({ isAuthenticated, redirectPath = '/login', children, }) {
    if (!isAuthenticated) {
        return _jsx(Navigate, { to: redirectPath, replace: true });
    }
    return children || _jsx(Outlet, {});
}
