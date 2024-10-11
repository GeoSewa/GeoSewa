import { FlexColumn, FlexRow } from "@Components/common/Layouts";
import Image from "@Components/RadixComponents/Image";
import AboutImage from "@Assets/images/about-image.svg";

export default function AboutSection() {
  return (
    <section className="about naxatw-bg-white naxatw-h-[25rem]">
      <FlexRow className="naxatw-container naxatw-py-20 naxatw-text-gray-800 naxatw-items-center">
        <div className="naxatw-w-1/2">
          <Image src={AboutImage} width={350} />
        </div>
        <FlexColumn gap={8} className="naxatw-w-1/2">
          <p className="naxatw-text-[3rem]">About Us</p>
          <p>
            At Geosewa, we provide essential resources for geomatics engineers,
            including mock tests and past exam questions for the NEC Geomatics
            Engineering License. Our services also encompass professional
            mapping and IT solutions. Join us to access top-tier study
            materials, expert guidance, and advanced mapping services, all
            designed to help you excel in your geomatics engineering career.
          </p>
        </FlexColumn>
      </FlexRow>
    </section>
  );
}
