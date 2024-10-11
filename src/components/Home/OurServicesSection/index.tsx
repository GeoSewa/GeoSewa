import { servicesContent } from "@Constants/home";
import ServiceCard from "./ServiceCard";
import { FlexRow } from "@Components/common/Layouts";

export default function OurServicesSection() {
  return (
    <section className="services naxatw-w-full naxatw-bg-[#F5FAFF]">
      <div className="naxatw-container naxatw-py-20">
        <FlexRow gap={2}>
          <p className="naxatw-text-[3rem] naxatw-text-gray-800 naxatw-text-center naxatw-mb-8">
            Our
          </p>
          <p className="naxatw-text-[3rem] naxatw-text-[#59AAFB] naxatw-text-center naxatw-mb-8">
            Services
          </p>
        </FlexRow>
        <div className="naxatw-grid naxatw-grid-cols-2 naxatw-gap-14">
          {servicesContent.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
