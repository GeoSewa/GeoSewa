import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react-hooks/rules-of-hooks */
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Fallback from '@Components/common/Fallback';
import useAuth from '@Hooks/useAuth';
import ProtectedRoute from './ProtectedRoute';
export default function generateRoutes({ routes, fallback = _jsx(Fallback, {}), }) {
    const { isAuthenticated } = useAuth();
    return (_jsx(Suspense, { fallback: fallback, children: _jsx(Routes, { children: routes?.map(route => {
                if (route.authenticated) {
                    return (_jsx(Route, { element: _jsx(ProtectedRoute, { isAuthenticated: isAuthenticated() }), children: route?.children ? (_jsx(Route, { path: route.path, children: route?.children?.map(child => (_jsx(Route, { path: child.path, element: _jsx(child.component, {}) }, child.name))) }, route.name)) : (_jsx(Route, { path: route.path, element: _jsx(route.component, {}) }, route.name)) }, route.name));
                }
                return route?.children ? (_jsx(Route, { path: route.path, children: route?.children?.map(child => (_jsx(Route, { path: child.path, element: _jsx(child.component, {}) }, child.name))) }, route.name)) : (_jsx(Route, { path: route.path, element: _jsx(route.component, {}) }, route.name));
            }) }) }));
}
