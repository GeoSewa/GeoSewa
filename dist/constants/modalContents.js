import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import LoginModal from "@Components/Home/LoginModal";
export function getModalContent(content) {
    switch (content) {
        case "login":
            return {
                title: "",
                content: _jsx(LoginModal, {}),
                className: "naxatw-w-[28rem]",
            };
        default:
            return {
                title: "",
                content: _jsx(_Fragment, {}),
            };
    }
}
export function getPromptDialogContent(content) {
    switch (content) {
        case "delete-layer":
            return {
                title: "",
                content: _jsx(_Fragment, {}),
            };
        default:
            return {
                title: "",
                content: _jsx(_Fragment, {}),
            };
    }
}
