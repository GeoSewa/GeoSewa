import Icon from "@Components/common/Icon";
import { FlexColumn, FlexRow } from "@Components/common/Layouts";
import Image from "@Components/RadixComponents/Image";
import TwitterLogo from "@Assets/images/Social-Icons/twitter-icon.svg";
import FacebookLogo from "@Assets/images/Social-Icons/facebook-icon.svg";
import LinkedInLogo from "@Assets/images/Social-Icons/linkedin-icon.svg";
import InstagramLogo from "@Assets/images/Social-Icons/instagram-icon.svg";
import EsewaLogo from "@Assets/images/Social-Icons/esewa-icon.svg";

export default function FooterSection() {
  return (
    <section className="footer naxatw-bg-primary">
      <div className="naxatw-container naxatw-py-20 naxatw-flex naxatw-justify-between naxatw-flex-col md:naxatw-flex-row naxatw-items-center naxatw-gap-14 naxatw-animate-fade-up">
        <FlexColumn gap={2.5}>
          <FlexRow className="naxatw-text-white naxatw-items-center" gap={2}>
            <Icon name="public" />
            <div className="naxatw-cursor-pointer" role="presentation">
              <h3 className="naxatw-text-white naxatw-font-medium">GeoSewa</h3>
            </div>
          </FlexRow>
          <FlexColumn gap={1} className="naxatw-ml-3">
            <p className="naxatw-text-white naxatw-text-body-lg">
              geosewa7@gmail.com
            </p>
            <p className="naxatw-text-white naxatw-text-body-lg">
              +977-9763252325
            </p>
          </FlexColumn>
        </FlexColumn>
        <FlexColumn gap={2.5}>
          <h4 className="naxatw-text-white naxatw-font-medium">Follow Us On</h4>
          <FlexRow gap={2}>
            <Image src={TwitterLogo} width={20} />
            <Image src={FacebookLogo} width={20} />
            <Image src={LinkedInLogo} width={20} />
            <Image src={InstagramLogo} width={20} />
          </FlexRow>
        </FlexColumn>
        <FlexColumn>
          <h4 className="naxatw-text-white naxatw-font-medium naxatw-mb-2">
            Payment Partners
          </h4>
          <FlexRow>
            <Image src={EsewaLogo} width={20} />
          </FlexRow>
        </FlexColumn>
      </div>
    </section>
  );
}
