import { jsx as _jsx } from "react/jsx-runtime";
export default function Image({ aspectRation, styleClass, src, alt, width, className, }) {
    return (_jsx("div", { className: `image-cover naxatw-aspect-${aspectRation} ${styleClass}}  `, style: { aspectRatio: aspectRation }, children: _jsx("img", { src: src, alt: alt, width: width, className: className }) }));
}
