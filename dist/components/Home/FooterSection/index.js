import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "@Components/common/Icon";
import { FlexColumn, FlexRow } from "@Components/common/Layouts";
import Image from "@Components/RadixComponents/Image";
import TwitterLogo from "@Assets/images/Social-Icons/twitter-icon.svg";
import FacebookLogo from "@Assets/images/Social-Icons/facebook-icon.svg";
import LinkedInLogo from "@Assets/images/Social-Icons/linkedin-icon.svg";
import InstagramLogo from "@Assets/images/Social-Icons/instagram-icon.svg";
export default function FooterSection() {
    return (_jsx("section", { className: "footer naxatw-bg-primary", children: _jsxs("div", { className: "naxatw-container naxatw-py-10 md:naxatw-py-20 naxatw-flex naxatw-justify-between naxatw-flex-col md:naxatw-flex-row naxatw-items-center naxatw-gap-14 naxatw-animate-fade-up", children: [_jsxs(FlexColumn, { gap: 2.5, children: [_jsxs(FlexRow, { className: "naxatw-text-white naxatw-items-center", gap: 2, children: [_jsx(Icon, { name: "public" }), _jsx("div", { className: "naxatw-cursor-pointer", role: "presentation", children: _jsx("h3", { className: "naxatw-text-white naxatw-font-medium", children: "GeoSewa" }) })] }), _jsxs(FlexColumn, { gap: 1, className: "naxatw-ml-3", children: [_jsx("p", { className: "naxatw-text-white naxatw-text-body-lg", children: "geosewa7@gmail.com" }), _jsx("p", { className: "naxatw-text-white naxatw-text-body-lg", children: "+977-9763252325" })] })] }), _jsxs(FlexColumn, { gap: 2.5, children: [_jsx("h4", { className: "naxatw-text-white naxatw-font-medium", children: "Follow Us On" }), _jsxs(FlexRow, { gap: 2, children: [_jsx(Image, { src: TwitterLogo, width: 20 }), _jsx(Image, { src: FacebookLogo, width: 20 }), _jsx(Image, { src: LinkedInLogo, width: 20 }), _jsx(Image, { src: InstagramLogo, width: 20 })] })] }), _jsxs(FlexColumn, { children: [_jsx("h4", { className: "naxatw-text-white naxatw-font-medium naxatw-mb-2", children: "Payment Partners" }), _jsx(FlexRow, { children: _jsx("p", { className: "naxatw-text-white naxatw-text-xl", children: "Khalti" }) })] })] }) }));
}
