import FaqAccordion from "@Components/common/FaqAccordion";
import { faqsDataList } from "@Constants/home";

export default function FAQsSection() {
  return (
    <section className="faq-section naxatw-bg-[#FBF8F3]">
      <div className="naxatw-container naxatw-py-20">
        <p className="naxatw-text-[3rem] naxatw-text-gray-800">FAQs</p>
        <div className="faqs-container">
          <FaqAccordion faqsDataList={faqsDataList} />
        </div>
      </div>
    </section>
  );
}
