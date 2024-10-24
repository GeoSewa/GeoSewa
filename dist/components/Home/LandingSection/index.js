import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FlexColumn, FlexRow } from "@Components/common/Layouts";
import LandingPageImage from "@Assets/images/landing-image.svg";
import Image from "@Components/RadixComponents/Image";
export default function LandingSection() {
    return (_jsx("section", { className: "home naxatw-bg-primary naxatw-w-full naxatw-h-[35rem]", children: _jsxs(FlexRow, { className: "naxatw-container naxatw-h-full naxatw-items-center naxatw-justify-between", children: [_jsxs(FlexColumn, { gap: 10, children: [_jsxs("div", { className: "naxatw-animate-fade-up", children: [_jsx("h1", { className: "naxatw-text-white naxatw-text-[5rem]", children: "GeoSewa" }), _jsx("p", { className: "naxatw-text-white naxatw-tracking-widest naxatw-text-[1.15rem] naxatw-mt-3 naxatw-ml-3", children: "Your Spatial Reference!" })] }), _jsx("p", { className: "naxatw-text-white naxatw-text-[1.5rem] naxatw-ml-3 naxatw-animate-fade-up", children: "Unlock your potential with notes and mock exam mastery!!" })] }), _jsx(Image, { src: LandingPageImage, width: 400, className: "naxatw-animate-fade-up naxatw-hidden md:naxatw-flex" })] }) }));
}
