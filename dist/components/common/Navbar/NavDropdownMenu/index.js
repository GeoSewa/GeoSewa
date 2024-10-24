import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Icon from "@Components/common/Icon";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const NavDropDownMenu = ({ subLinks }) => {
    const [extend, setExtend] = useState(false);
    return (_jsxs("div", { className: "naxatw-border-b naxatw-border-solid naxatw-border-b-[#D9D9D9]", children: [_jsxs("div", { className: "naxatw-flex naxatw-items-center naxatw-justify-between naxatw-gap-1", onClick: () => setExtend(!extend), children: [_jsx("p", { className: "naxatw-py-3 naxatw-text-2xl naxatw-font-medium naxatw-capitalize", children: subLinks.label }), _jsx(Icon, { name: extend ? "keyboard_arrow_up" : "keyboard_arrow_down", className: "custom-btn-transition naxatw-h-4 !naxatw-text-2xl naxatw-text-[#131417]" })] }), _jsx("div", { className: `common-btn-transition naxatw-flex naxatw-flex-col naxatw-gap-4 naxatw-overflow-hidden naxatw-px-4  ${extend ? "naxatw-pointer-events-auto naxatw-h-[245px]  naxatw-pt-3" : "naxatw-pointer-events-none naxatw-h-0"} `, children: subLinks?.children?.map((navChild) => (_jsxs(NavLink, { to: navChild.link, className: "naxatw-flex naxatw-cursor-pointer naxatw-items-center naxatw-gap-5", children: [_jsx("div", { className: "icon-container naxatw-h-9 naxatw-w-9 naxatw-rounded-lg naxatw-bg-[#cde5fd80] naxatw-p-2", children: _jsx("img", { src: navChild.icon, alt: navChild.label }) }), _jsx("p", { className: "naxatw-text-lg naxatw-font-medium naxatw-leading-6 naxatw-tracking-[-0.0225rem]", children: navChild.label })] }, navChild.id))) })] }));
};
export default NavDropDownMenu;
