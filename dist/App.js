import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { initDomToCode } from "dom-to-code";
import { ToastContainer } from "react-toastify";
import { useTypedDispatch, useTypedSelector } from "@Store/hooks";
import generateRoutes from "@Routes/generateRoutes";
import appRoutes from "@Routes/appRoutes";
import testRoutes from "@Routes/testRoutes";
import { setModalContent, setPromptDialogContent, toggleModal, togglePromptDialog, } from "@Store/actions/common";
import "react-toastify/dist/ReactToastify.css";
import Modal from "@Components/common/Modal";
import PromptDialog from "@Components/common/PromptDialog";
import Navbar from "@Components/common/Navbar";
import { getModalContent, getPromptDialogContent, } from "@Constants/modalContents";
import ScrollToTop from "@Components/common/ScrollToTop";
export default function App() {
    const dispatch = useTypedDispatch();
    const showModal = useTypedSelector((state) => state.common.showModal);
    const modalContent = useTypedSelector((state) => state.common.modalContent);
    const showPromptDialog = useTypedSelector((state) => state.common.showPromptDialog);
    const promptDialogContent = useTypedSelector((state) => state.common.promptDialogContent);
    const handleModalClose = () => {
        dispatch(toggleModal());
        setTimeout(() => {
            dispatch(setModalContent(null));
        }, 150);
    };
    const handlePromptDialogClose = () => {
        dispatch(togglePromptDialog());
        setTimeout(() => {
            dispatch(setPromptDialogContent(null));
        }, 150);
    };
    return (_jsxs(_Fragment, { children: [process.env.NODE_ENV !== "production" &&
                !process.env.DISABLE_DOM_TO_CODE &&
                initDomToCode(), _jsxs("div", { className: "app-root naxatw-flex naxatw-flex-col", children: [_jsx(Navbar, {}), _jsx(ToastContainer, {}), _jsx(Modal, { show: showModal, className: getModalContent(modalContent)?.className || "", title: getModalContent(modalContent)?.title, onClose: handleModalClose, hideCloseButton: !!getModalContent(modalContent)?.hideCloseButton, children: getModalContent(modalContent)?.content }), _jsx(PromptDialog, { show: showPromptDialog, title: getPromptDialogContent(promptDialogContent)?.title, onClose: handlePromptDialogClose, children: getPromptDialogContent(promptDialogContent)?.content }), generateRoutes({
                        routes: process.env.NODE_ENV !== "production"
                            ? [...testRoutes, ...appRoutes]
                            : appRoutes,
                    }), _jsx(ScrollToTop, {})] })] }));
}
