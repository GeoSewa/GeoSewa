import { useEffect, useState } from "react";
import Icon from "../Icon";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const winScroll = document.documentElement.scrollTop;
    if (winScroll > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div
      className={`scroll-to-top-wrapper naxatw-fixed naxatw-bottom-4 naxatw-right-4 ${visible ? "naxatw-opacity-full naxatw-pointer-events-auto" : "naxatw-pointer-events-none naxatw-opacity-0"} common-btn-transition`}
    >
      <button
        className="naxatw-relative naxatw-cursor-pointer"
        type="button"
        onClick={scrollTop}
      >
        <div className="naxatw-bg-primary hover:naxatw-bg-opacity-100 hover:naxatw-animate-none -naxatw-z-10 naxatw-bg-opacity-50 naxatw-w-12 naxatw-animate-pulse naxatw-h-12 naxatw-rounded-full naxatw-flex naxatw-items-center naxatw-justify-center">
          <div className="button-circle naxatw-bg-primary naxatw-z-20 naxatw-bg-opacity-90 naxatw-rounded-full naxatw-relative naxatw-flex naxatw-h-10 naxatw-w-10 -naxatw-rotate-90 naxatw-items-center naxatw-justify-end naxatw-overflow-hidden before:naxatw-absolute before:naxatw-h-full before:naxatw-w-full before:naxatw-scale-100  before:naxatw-rounded-full before:naxatw-bg-main before:naxatw-transition-transform  before:naxatw-duration-500 before:naxatw-ease-out before:naxatw-content-[''] hover:before:naxatw-scale-[0.85]">
            <div className="button-cirlce-svgs naxatw-absolute naxatw-z-[2] naxatw-inline-flex naxatw-w-[200%] naxatw-translate-x-0 naxatw-justify-center naxatw-overflow-hidden naxatw-transition-transform naxatw-duration-500 naxatw-ease-out hover:naxatw-translate-x-[50%]">
              <Icon
                name="east"
                className="!naxatw-w-1/2 !naxatw-overflow-hidden naxatw-align-middle !naxatw-text-[1.25rem] !naxatw-text-[#fbf8f3] "
              />
              <Icon
                name="east"
                className="!naxatw-w-1/2 !naxatw-overflow-hidden naxatw-align-middle !naxatw-text-[1.25rem] !naxatw-text-[#fbf8f3] "
              />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ScrollToTop;
