import { Input } from "@Components/common/FormUI";
import Icon from "@Components/common/Icon";

function ContactForm() {
  return (
    <div className="contact-form animation-area">
      <div className="title naxatw-mb-12 md:naxatw-mb-16">
        <p className="naxatw-text-[2.75rem] naxatw-leading-[3.75rem] naxatw-tracking-[-0.04125rem] naxatw-text-[#07090D]">
          Get in Touch with Us{" "}
        </p>
      </div>
      <form action="">
        <div className="naxatw-grid naxatw-grid-cols-2 naxatw-gap-x-7 naxatw-gap-y-4">
          <div className="form-control naxatw-flex naxatw-w-full naxatw-flex-col naxatw-gap-2">
            <p className="naxatw-text-[0.875rem] naxatw-leading-4 naxatw-text-[#343434]">
              Name
            </p>
            <Input
              type="text"
              name="name"
              className="naxatw-w-full !naxatw-rounded-lg naxatw-border !naxatw-border-b naxatw-border-solid !naxatw-border-[#969696] !naxatw-text-[0.875rem] naxatw-leading-5 !naxatw-text-[#343434] hover:!naxatw-border-[#969696] focus:!naxatw-border-[#343434]"
              placeholder="Name"
            />
          </div>

          <div className="form-control naxatw-flex naxatw-w-full naxatw-flex-col naxatw-gap-2">
            <p className="naxatw-text-[0.875rem] naxatw-leading-4 naxatw-text-[#343434]">
              Email
            </p>
            <Input
              type="text"
              className=" naxatw-w-full !naxatw-rounded-lg naxatw-border !naxatw-border-b naxatw-border-solid !naxatw-border-[#969696]  !naxatw-text-[0.875rem] naxatw-leading-5 !naxatw-text-[#343434] hover:!naxatw-border-[#969696] focus:!naxatw-border-[#343434]"
              placeholder="Email"
            />
          </div>
          <div className="form-control naxatw-flex naxatw-w-full naxatw-flex-col naxatw-gap-2">
            <p className="naxatw-text-[0.875rem] naxatw-leading-4 naxatw-text-[#343434]">
              Phone
            </p>
            <Input
              type="text"
              className="naxatw-w-full !naxatw-rounded-lg naxatw-border !naxatw-border-b naxatw-border-solid !naxatw-border-[#969696] !naxatw-text-[0.875rem] naxatw-leading-5 !naxatw-text-[#343434] hover:!naxatw-border-[#969696] focus:!naxatw-border-[#343434]"
              placeholder="Phone"
            />
          </div>
          <div className="form-control naxatw-flex naxatw-w-full naxatw-flex-col naxatw-gap-2">
            <p className="naxatw-text-[0.875rem] naxatw-leading-4 naxatw-text-[#343434]">
              College/Organization
            </p>
            <Input
              type="text"
              className="naxatw-w-full !naxatw-rounded-lg naxatw-border !naxatw-border-b naxatw-border-solid !naxatw-border-[#969696] !naxatw-text-[0.875rem] naxatw-leading-5 !naxatw-text-[#343434] hover:!naxatw-border-[#969696] focus:!naxatw-border-[#343434]"
              placeholder="College/Organization"
            />
          </div>
        </div>

        <div className="naxatw-my-6">
          <textarea
            placeholder="Describe to us how you would use GeoSewa"
            className="naxatw-h-[7.75rem] naxatw-w-full  naxatw-resize-none naxatw-rounded-lg !naxatw-border !naxatw-border-solid !naxatw-border-[#969696] naxatw-p-3  naxatw-text-[#343434] focus:!naxatw-border-[#343434] focus:!naxatw-outline-none"
          />
        </div>
        {/* -- btn --- */}
        <button
          className="btn hover:naxatw-bg-primary naxatw-relative naxatw-z-10 naxatw-flex naxatw-h-14 naxatw-items-center naxatw-justify-start naxatw-gap-4 naxatw-overflow-hidden naxatw-rounded-[2.4375rem] naxatw-bg-[#39CDF2] naxatw-px-5 naxatw-py-3 naxatw-no-underline naxatw-shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] naxatw-w-[12.5rem]"
          type="button"
        >
          <span className="naxatw-text-base naxatw-font-semibold naxatw-leading-6 naxatw-tracking-[-0.011rem] naxatw-text-white">
            Send message
          </span>
          <Icon name="east" className="naxatw-text-white" />
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
