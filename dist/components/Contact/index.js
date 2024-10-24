import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ContactForm from "./ContactForm";
import ContactMap from "./Map";
export default function Contact() {
    return (_jsx("main", { className: "contact naxatw-w-full", children: _jsxs("div", { className: "naxatw-flex naxatw-flex-col md:naxatw-flex-row naxatw-container naxatw-py-6 md:naxatw-py-14 naxatw-gap-8", children: [_jsx("div", { className: "naxatw-w-full md:naxatw-w-[55%]", children: _jsx(ContactForm, {}) }), _jsx("div", { className: "naxatw-w-full md:naxatw-w-[45%] naxatw-rounded-xl naxatw-overflow-hidden naxatw-border naxatw-border-primary", children: _jsx(ContactMap, {}) })] }) }));
}
