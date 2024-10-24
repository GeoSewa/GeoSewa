import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "@Components/common/Icon";
import { FlexRow } from "@Components/common/Layouts";
export default function Exams() {
    const handleClick = () => {
        window.open("https://forms.gle/GKfsJFVb8ACvhPbn9", "_blank");
    };
    return (_jsx("main", { className: "notes naxatw-h-screen-nav naxatw-w-full naxatw-bg-white", children: _jsxs("div", { className: "naxatw-container naxatw-py-14", children: [_jsx("h4", { className: "naxatw-mb-4", children: "One Exam Form Currently Open :" }), _jsx("div", { title: "Click to fill the form", onClick: handleClick, className: "naxatw-rounded-md hover:naxatw-scale-105 naxatw-duration-300 naxatw-border naxatw-cursor-pointer naxatw-bg-grey-50 naxatw-border-black naxatw-w-full naxatw-py-4 naxatw-px-3", children: _jsxs(FlexRow, { className: "naxatw-justify-between", children: [_jsxs(FlexRow, { className: "naxatw-items-center", children: [_jsx(Icon, { name: "quiz", className: "naxatw-w-10" }), _jsx("p", { children: "NEC License Mock Exam" })] }), _jsx("p", { children: "Kartik 04, 2081" })] }) })] }) }));
}
