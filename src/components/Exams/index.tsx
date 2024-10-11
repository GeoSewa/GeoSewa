import Icon from "@Components/common/Icon";
import { FlexRow } from "@Components/common/Layouts";

export default function Exams() {
  const handleClick = () => {
    window.open("https://forms.gle/LWxHJy1ms8jLJTbe6", "_blank");
  };
  return (
    <main className="notes naxatw-h-screen-nav naxatw-w-full naxatw-bg-white">
      <div className="naxatw-container naxatw-py-14">
        <h4 className="naxatw-mb-4">One Exam Form Currently Open :</h4>
        <div
          title="Click to fill the form"
          onClick={handleClick}
          className="naxatw-rounded-md hover:naxatw-scale-105 naxatw-duration-300 naxatw-border naxatw-cursor-pointer naxatw-bg-grey-50 naxatw-border-black naxatw-w-full naxatw-py-4 naxatw-px-3"
        >
          <FlexRow className="naxatw-justify-between">
            <FlexRow className="naxatw-items-center">
              <Icon name="quiz" className="naxatw-w-10" />
              <p>NEC License Mock Exam</p>
            </FlexRow>
            <p>Ashad 28, 2081</p>
          </FlexRow>
        </div>
      </div>
    </main>
  );
}
