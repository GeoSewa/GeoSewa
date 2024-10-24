import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@Components/RadixComponents/Accordion";
import Icon from "@Components/common/Icon";
const FaqAccordion = ({ faqsDataList }) => {
    const [activeItem, setActiveItem] = useState(null);
    return (_jsx("div", { className: "accordion-wrapper", children: _jsx(Accordion, { type: "single", collapsible: true, className: "naxatw-transition-all naxatw-duration-300 naxatw-ease-out", children: faqsDataList.map((item) => {
                return (_jsxs(AccordionItem, { value: `item-${item.id}`, className: "naxatw-border-b naxatw-border-b-[#A9A9A9]", onClick: () => {
                        if (activeItem === item.id) {
                            setActiveItem(null);
                            return;
                        }
                        setActiveItem(item.id);
                    }, children: [_jsxs(AccordionTrigger, { className: "naxatw-flex naxatw-w-full  naxatw-items-center naxatw-justify-between naxatw-gap-4 naxatw-py-6 naxatw-text-left", children: [_jsx("p", { className: "naxatw-text-xl naxatw-font-medium naxatw-leading-6 naxatw-tracking-[-0.01125rem] naxatw-text-[#2B2B2B] ", children: item.question }), activeItem === item.id ? (_jsx(Icon, { name: "remove_circle_outline", className: "naxatw-text-main" })) : (_jsx(Icon, { name: "add_circle_outline", className: "hover:naxatw-text-main" }))] }), activeItem === item.id && (_jsx(AccordionContent, { className: "data-[state=closed]:naxatw-animate-accordion-up", children: _jsx("p", { className: "naxatw-overflow-hidden naxatw-pb-6 naxatw-text-lg naxatw-font-normal naxatw-tracking-[-0.01125rem] naxatw-text-[#4E4E4E]", children: item.answer }) }))] }, item.id));
            }) }) }));
};
export default FaqAccordion;
