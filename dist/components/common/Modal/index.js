import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
export default function Modal({ title, subtitle, show, onClose, children, className, headerContent, zIndex = 1111, hideCloseButton, }) {
    const nodeRef = useRef(null);
    return (_jsx(CSSTransition, { nodeRef: nodeRef, in: show, timeout: 150, unmountOnExit: true, classNames: {
            enter: "naxatw-opacity-0 naxatw-scale-95",
            enterActive: "naxatw-opacity-100 naxatw-scale-100 naxatw-transition-all naxatw-ease-in naxatw-duration-150",
            enterDone: "naxatw-opacity-100 naxatw-scale-100",
            exit: "naxatw-opacity-50 naxatw-scale-75 naxatw-transition-all naxatw-ease-out naxatw-duration-150",
            exitActive: "naxatw-opacity-0 naxatw-scale-50",
        }, children: _jsx("div", { tabIndex: -1, className: `${show ? "" : ""} naxatw-h-modal naxatw-fixed naxatw-inset-0 naxatw-z-[11111] naxatw-flex 
          naxatw-h-screen naxatw-w-screen naxatw-justify-center naxatw-overflow-y-auto naxatw-overflow-x-hidden
          naxatw-bg-black naxatw-bg-opacity-30 naxatw-p-4 md:naxatw-inset-0 md:naxatw-h-full
      `, style: { zIndex }, children: _jsx("div", { ref: nodeRef, className: "naxatw-fixed naxatw-inset-0 naxatw-overflow-y-auto", children: _jsx("div", { className: "naxatw-flex naxatw-min-h-full naxatw-items-center \n            naxatw-justify-center naxatw-p-4", children: _jsx("div", { className: "naxatw-relative naxatw-flex naxatw-h-full naxatw-w-full\n              naxatw-max-w-2xl naxatw-flex-col naxatw-items-center naxatw-justify-center md:naxatw-h-auto", children: _jsxs("div", { className: `naxatw-relative naxatw-max-h-[calc(100vh-4rem)] naxatw-w-[42rem] naxatw-overflow-hidden
                   naxatw-rounded-[20px] naxatw-bg-white naxatw-shadow ${className}`, children: [_jsxs("div", { className: `naxatw-flex naxatw-items-start naxatw-justify-between
                    naxatw-rounded-t-[20px] naxatw-px-7 ${!subtitle && title ? "naxatw-py-5" : "naxatw-py-5"}`, children: [headerContent || (_jsxs("div", { className: "naxatw-space-y-1", children: [_jsx("h3", { className: "naxatw-font-bold ", children: title }), _jsx("p", { className: "naxatw-text-body-lg", children: subtitle })] })), !hideCloseButton && (_jsxs("button", { type: "button", className: "naxatw-ml-auto naxatw-inline-flex naxatw-items-center \n                      naxatw-rounded-lg naxatw-bg-transparent naxatw-p-1.5 naxatw-text-sm\n                      naxatw-text-grey-800 hover:naxatw-bg-grey-200 hover:naxatw-text-grey-900", onClick: onClose, children: [_jsx("i", { className: "material-icons", children: "close" }), _jsx("span", { className: "naxatw-sr-only", children: "Close modal" })] }))] }), _jsx("div", { className: "naxatw-flex", children: _jsx("div", { className: "scrollbar naxatw-max-h-[calc(100vh-10rem)] naxatw-grow naxatw-overflow-y-auto\n                      naxatw-px-10 naxatw-pb-5", children: children }) })] }) }) }) }) }) }));
}
