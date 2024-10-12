import { FlexColumn, FlexRow } from "@Components/common/Layouts";
import LandingPageImage from "@Assets/images/landing-image.svg";
import Image from "@Components/RadixComponents/Image";

export default function LandingSection() {
  return (
    <section className="home naxatw-bg-primary naxatw-w-full naxatw-h-[35rem]">
      <FlexRow className="naxatw-container naxatw-h-full naxatw-items-center naxatw-justify-between">
        <FlexColumn gap={10}>
          <div className="naxatw-animate-fade-up">
            <h1 className="naxatw-text-white naxatw-text-[5rem]">GeoSewa</h1>
            <p className="naxatw-text-white naxatw-tracking-widest naxatw-text-[1.15rem] naxatw-mt-3 naxatw-ml-3">
              Your Spatial Reference!
            </p>
          </div>
          <p className="naxatw-text-white naxatw-text-[1.5rem] naxatw-ml-3 naxatw-animate-fade-up">
            Unlock your potential with notes and mock exam mastery!!
          </p>
        </FlexColumn>
        <Image
          src={LandingPageImage}
          width={400}
          className="naxatw-animate-fade-up naxatw-hidden md:naxatw-flex"
        />
      </FlexRow>
    </section>
  );
}
