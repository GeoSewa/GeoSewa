import { FlexRow } from "@Components/common/Layouts";
import Image from "@Components/RadixComponents/Image";
import AboutImage from "@Assets/images/about-image.svg";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="about naxatw-bg-white naxatw-h-[25rem]">
      <FlexRow className="naxatw-container naxatw-py-20 naxatw-text-gray-800 naxatw-items-center">
        <motion.div
          initial={{ translateX: -200, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="naxatw-w-1/2"
        >
          <Image src={AboutImage} width={350} />
        </motion.div>
        <motion.div
          initial={{ translateX: 200, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="naxatw-flex naxatw-flex-col naxatw-gap-8 naxatw-w-1/2"
        >
          <p className="naxatw-text-[3rem]">About Us</p>
          <p>
            At Geosewa, we provide essential resources for geomatics engineers,
            including mock tests and past exam questions for the NEC Geomatics
            Engineering License. Our services also encompass professional
            mapping and IT solutions. Join us to access top-tier study
            materials, expert guidance, and advanced mapping services, all
            designed to help you excel in your geomatics engineering career.
          </p>
        </motion.div>
      </FlexRow>
    </section>
  );
}
