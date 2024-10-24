import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FaqAccordion from "@Components/common/FaqAccordion";
import { faqsDataList } from "@Constants/home";
export default function FAQsSection() {
    return (_jsx("section", { className: "faq-section naxatw-bg-[#F5FAFF]", children: _jsxs("div", { className: "naxatw-container naxatw-py-10 md:naxatw-py-20", children: [_jsx("p", { className: "naxatw-text-[3rem] naxatw-text-gray-800", children: "FAQs" }), _jsx("div", { className: "faqs-container", children: _jsx(FaqAccordion, { faqsDataList: faqsDataList }) })] }) }));
}
