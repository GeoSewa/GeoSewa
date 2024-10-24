import { jsx as _jsx } from "react/jsx-runtime";
import Modal from '../Modal';
export default function PromptDialog({ title = '', show = false, onClose = () => { }, children, }) {
    return (_jsx(Modal, { show: show, title: title, onClose: onClose, zIndex: 111111, children: children }));
}
