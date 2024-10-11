import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@Components/RadixComponents/Accordion";
import Icon from "@Components/common/Icon";

interface IFaqAccordionProps {
  faqsDataList: Record<string, any>[];
}

const FaqAccordion = ({ faqsDataList }: IFaqAccordionProps) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="accordion-wrapper">
      <Accordion
        type="single"
        collapsible
        className="naxatw-transition-all naxatw-duration-300 naxatw-ease-out"
      >
        {faqsDataList.map((item: Record<string, any>) => {
          return (
            <AccordionItem
              value={`item-${item.id}`}
              key={item.id}
              className="naxatw-border-b naxatw-border-b-[#A9A9A9]"
              onClick={() => {
                if (activeItem === item.id) {
                  setActiveItem(null);
                  return;
                }

                setActiveItem(item.id);
              }}
            >
              <AccordionTrigger className="naxatw-flex naxatw-w-full  naxatw-items-center naxatw-justify-between naxatw-gap-4 naxatw-py-6 naxatw-text-left">
                <p className="naxatw-text-xl naxatw-font-medium naxatw-leading-6 naxatw-tracking-[-0.01125rem] naxatw-text-[#2B2B2B] ">
                  {item.question}
                </p>
                {activeItem === item.id ? (
                  <Icon
                    name="remove_circle_outline"
                    className="naxatw-text-main"
                  />
                ) : (
                  <Icon
                    name="add_circle_outline"
                    className="hover:naxatw-text-main"
                  />
                )}
              </AccordionTrigger>
              <AccordionContent className="data-[state=closed]:naxatw-animate-accordion-up">
                <p className="naxatw-overflow-hidden naxatw-pb-6 naxatw-text-lg naxatw-font-normal naxatw-tracking-[-0.01125rem] naxatw-text-[#4E4E4E]">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
