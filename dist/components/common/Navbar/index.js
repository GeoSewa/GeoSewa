import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTypedDispatch } from "@Store/hooks";
import { NavLink, useNavigate } from "react-router-dom";
import { navigationLinks } from "@Constants/index";
import { Button } from "@Components/RadixComponents/Button";
import { toggleModal } from "@Store/actions/common";
import Icon from "../Icon";
import { FlexRow } from "../Layouts";
import ToggledNavbar from "./ToggledNavbar";
import { useRef } from "react";
export default function Navbar() {
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();
    const mobileViewNav = useRef(null);
    return (_jsx("nav", { className: "naxatw-bg-primary naxatw-sticky naxatw-top-0 naxatw-z-10", children: _jsx("nav", { className: "naxatw-container naxatw-py-3", children: _jsxs(FlexRow, { className: "naxatw-items-center naxatw-justify-between", children: [_jsxs(FlexRow, { className: "naxatw-text-white naxatw-items-center", gap: 2, children: [_jsx(Icon, { name: "public" }), _jsx("div", { className: "naxatw-cursor-pointer", role: "presentation", onClick: () => navigate("/"), children: _jsx("h3", { className: "naxatw-text-white naxatw-font-medium", children: "GeoSewa" }) })] }), _jsx(FlexRow, { className: "naxatw-hidden md:naxatw-flex naxatw-gap-4 naxatw-mt-1 naxatw-text-white", children: navigationLinks.map((nav) => (_jsx(NavLink, { to: nav.path, className: ({ isActive }) => `${isActive && "naxatw-text-red-500"} naxatw-px-3 naxatw-py-2 naxatw-tracking-wide naxatw-text-[1rem] hover:naxatw-text-red-500`, children: nav.label }, nav.path))) }), _jsxs(FlexRow, { className: "naxatw-hidden md:naxatw-flex naxatw-items-center", gap: 2, children: [_jsx(Button, { variant: "outline", className: "naxatw-w-24 naxatw-text-body-lg", onClick: () => dispatch(toggleModal("login")), children: "Login" }), _jsx(Button, { variant: "default", className: "naxatw-w-24 naxatw-border !naxatw-border-white naxatw-text-body-lg hover:naxatw-bg-white hover:naxatw-text-primary", children: "Sign Up" })] }), _jsx(ToggledNavbar, { navItems: navigationLinks, mobileViewNavRef: mobileViewNav })] }) }) }));
}
