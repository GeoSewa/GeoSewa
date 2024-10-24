import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTypedSelector } from "@Store/hooks";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import NavDropDownMenu from "../NavDropdownMenu";
import { setToggleNavbar } from "@Store/actions/common";
import Icon from "@Components/common/Icon";
const ToggledNavbar = ({ navItems, mobileViewNavRef }) => {
    const dispatch = useDispatch();
    const toggleNavbar = useTypedSelector((state) => state.common.navbarToggled);
    // toggle menu items
    const handleToggle = () => {
        if (toggleNavbar) {
            document.body.style.overflow = "auto";
            mobileViewNavRef?.current?.classList?.remove("nav-open");
        }
        else {
            document.body.style.overflow = "hidden";
            mobileViewNavRef?.current?.classList?.add("nav-open");
        }
        dispatch(setToggleNavbar(!toggleNavbar));
    };
    return (_jsxs("div", { className: "mobile-view-navbar", children: [_jsx("button", { type: "button", onClick: handleToggle, className: "md:naxatw-hidden", children: toggleNavbar ? (_jsx("div", { className: "close-btn naxatw-mt-2 naxatw-flex naxatw-cursor-pointer naxatw-items-center", children: _jsx(Icon, { name: "close", className: "naxatw-text-white naxatw-text-2xl" }) })) : (_jsx("div", { className: "naxatw-flex naxatw-mt-2 naxatw-cursor-pointer naxatw-items-center", children: _jsx(Icon, { name: "menu", className: "naxatw-text-white naxatw-text-2xl" }) })) }), toggleNavbar && (_jsx("nav", { className: "primary-navigation naxatw-fixed naxatw-inset-x-0 naxatw-bottom-0 naxatw-top-[70px] naxatw-z-[99] naxatw-block naxatw-bg-[#FBF8F3] md:naxatw-hidden", ref: mobileViewNavRef, children: _jsxs("div", { className: "naxatw-flex naxatw-h-full naxatw-flex-col", children: [_jsx("div", { className: "naxatw-flex naxatw-flex-1 naxatw-flex-col naxatw-px-4 naxatw-pt-5", children: navItems?.map((nav) => {
                                return nav?.children ? (_jsx(NavDropDownMenu, { subLinks: nav }, nav.id)) : (_jsx(NavLink, { to: nav.path, onClick: () => dispatch(setToggleNavbar(false)), children: _jsx("p", { className: "naxatw-border-b naxatw-border-solid naxatw-border-b-[#D9D9D9] naxatw-py-3 naxatw-text-2xl naxatw-font-medium naxatw-capitalize", children: nav.label }) }, nav.path));
                            }) }), _jsxs("p", { className: "naxatw-border-t naxatw-border-solid naxatw-border-t-[#EDEDED] naxatw-py-6 naxatw-text-center naxatw-text-base naxatw-leading-[1.575rem] naxatw-tracking-[-0.00563rem] naxatw-text-[#000]", children: ["\u00A9 GeoSewa ", new Date().getFullYear(), ". All Rights Reserved."] })] }) }))] }));
};
export default ToggledNavbar;
