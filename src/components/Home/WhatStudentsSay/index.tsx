import { studentsQuote } from "@Constants/home";
import TestimonialCard from "./TestimonialCard";

export default function WhatStudentsSay() {
  return (
    <section className="what-students-say naxatw-bg-[#FBF8F3]">
      <div className="naxatw-py-20 naxatw-container">
        <p className="naxatw-text-[3rem] naxatw-text-gray-800 naxatw-text-center">
          Our Students
          <span className="naxatw-text-[3rem] naxatw-ml-2 naxatw-text-[#59AAFB]">
            Say !
          </span>
        </p>
        <div className="naxatw-grid naxatw-grid-cols-1 naxatw-gap-10 naxatw-mt-8 md:naxatw-grid-cols-2 xl:naxatw-grid-cols-3">
          {studentsQuote.slice(1, 4).map((card) => (
            <TestimonialCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
