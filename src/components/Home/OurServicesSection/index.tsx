import { servicesContent } from "@Constants/home";
import ServiceCard from "./ServiceCard";

export default function OurServicesSection() {
  return (
    <section className="services naxatw-w-full naxatw-bg-[#F7EEE0]">
      <div className="naxatw-container naxatw-py-20">
        <p className="naxatw-text-[3rem] naxatw-text-primary naxatw-text-center naxatw-mb-8">
          Our Services
        </p>
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
