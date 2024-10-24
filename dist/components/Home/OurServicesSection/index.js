import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { servicesContent } from "@Constants/home";
import ServiceCard from "./ServiceCard";
import { FlexRow } from "@Components/common/Layouts";
import { motion } from "framer-motion";
import { containerAnimationVariant, fadeUpVariant, } from "@Constants/animations";
export default function OurServicesSection() {
    return (_jsx("section", { className: "services naxatw-w-full naxatw-bg-[#F5FAFF]", children: _jsxs("div", { className: "naxatw-container naxatw-py-10 md:naxatw-py-20", children: [_jsxs(FlexRow, { gap: 2, children: [_jsx("p", { className: "naxatw-text-[3rem] naxatw-text-gray-800 naxatw-text-center naxatw-mb-8", children: "Our" }), _jsx("p", { className: "naxatw-text-[3rem] naxatw-text-[#59AAFB] naxatw-text-center naxatw-mb-8", children: "Services" })] }), _jsx(motion.div, { variants: containerAnimationVariant, initial: "hidden", whileInView: "visible", viewport: { once: true }, className: "naxatw-grid naxatw-grid-cols-1 md:naxatw-grid-cols-2 naxatw-gap-14", children: servicesContent.map((service) => (_jsx(motion.div, { variants: fadeUpVariant, children: _jsx(ServiceCard, { image: service.image, title: service.title, description: service.description }, service.id) }, service.id))) })] }) }));
}
