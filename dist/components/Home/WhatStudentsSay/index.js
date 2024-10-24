import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { studentsQuote } from "@Constants/home";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { containerAnimationVariant, fadeUpVariant, } from "@Constants/animations";
export default function WhatStudentsSay() {
    return (_jsx("section", { className: "what-students-say naxatw-bg-[#FBF8F3]", children: _jsxs("div", { className: "naxatw-py-10 md:naxatw-py-20 naxatw-container", children: [_jsxs("p", { className: "naxatw-text-[3rem] naxatw-text-gray-800 naxatw-text-center", children: ["Our Students", _jsx("span", { className: "naxatw-text-[3rem] naxatw-ml-2 naxatw-text-[#59AAFB]", children: "Say !" })] }), _jsx(motion.div, { variants: containerAnimationVariant, initial: "hidden", whileInView: "visible", viewport: { once: true }, className: "naxatw-grid naxatw-grid-cols-1 naxatw-gap-10 naxatw-mt-8 md:naxatw-grid-cols-2 xl:naxatw-grid-cols-3", children: studentsQuote.slice(1, 4).map((card) => (_jsx(motion.div, { variants: fadeUpVariant, children: _jsx(TestimonialCard, { ...card }, card.id) }, card.id))) })] }) }));
}
