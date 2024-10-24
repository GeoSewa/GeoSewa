import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { FormControl, Input, Label } from "@Components/common/FormUI";
import Icon from "@Components/common/Icon";
import { Flex, FlexRow } from "@Components/common/Layouts";
import { Button } from "@Components/RadixComponents/Button";
import Image from "@Components/RadixComponents/Image";
import Person from "@Assets/images/Social-Icons/person.svg";
import googleIcon from "@Assets/images/Social-Icons/google-icon.svg";
import { useForm } from "react-hook-form";
const initialState = {
    username: "",
    password: "",
};
export default function LoginModal() {
    const [showPassword, setShowPassword] = useState(false);
    // toggle the password visibility
    const handleShow = () => {
        return setShowPassword((prev) => !prev);
    };
    const { register, handleSubmit } = useForm({
        defaultValues: initialState,
    });
    const onSubmit = (data) => {
        console.log(data);
    };
    return (_jsx(_Fragment, { children: _jsxs(Flex, { gap: 4, className: "naxatw-w-full naxatw-flex-col naxatw-items-center naxatw-justify-center naxatw-pb-4", children: [_jsx(Image, { src: Person, width: 60 }), _jsx("h3", { children: "Login" }), _jsxs("div", { className: "naxatw-flex naxatw-w-[60%] naxatw-cursor-pointer naxatw-items-center naxatw-justify-center naxatw-gap-2 naxatw-rounded-lg naxatw-border naxatw-border-grey-800 naxatw-px-5 naxatw-py-2 hover:naxatw-shadow-md", children: [_jsx(Image, { src: googleIcon }), _jsx("span", { className: "naxatw-text-body-btn", children: "Continue with Google" })] }), _jsxs(FlexRow, { className: "naxatw-w-full naxatw-items-center naxatw-justify-center", gap: 3, children: [_jsx("hr", { className: "naxatw-w-[26%]" }), _jsx("span", { children: "or" }), _jsx("hr", { className: "naxatw-w-[26%]" })] }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "naxatw-flex naxatw-w-full naxatw-flex-col naxatw-gap-4", children: [_jsxs(FormControl, { children: [_jsx(Label, { htmlFor: "username", required: true, children: "Email" }), _jsx(Input, { id: "username", type: "text", placeholder: "Username", className: "naxatw-mt-1 !naxatw-rounded-lg !naxatw-border-grey-400 !naxatw-p-3", ...register("username", { required: true }) })] }), _jsxs(FormControl, { className: "naxatw-relative", children: [_jsx(Label, { htmlFor: "password", required: true, children: "Password" }), _jsx(Input, { id: "password", placeholder: "*******", className: "naxatw-mt-1 !naxatw-rounded-lg !naxatw-border-grey-400 !naxatw-p-3", type: showPassword ? "text" : "password", ...register("password", { required: true }) }), _jsx(Icon, { name: showPassword ? "visibility" : "visibility_off", className: "naxatw-absolute naxatw-right-2 naxatw-top-[55%] naxatw-cursor-pointer naxatw-text-sm naxatw-text-grey-600", onClick: () => handleShow() })] }), _jsxs(FlexRow, { className: "naxatw-items-center naxatw-justify-between", children: [_jsxs(FlexRow, { className: "naxatw-items-center naxatw-gap-2 naxatw-pl-3", children: [_jsx(Input, { type: "checkbox", id: "check" }), _jsx(Label, { htmlFor: "check", children: "Remember Me" })] }), _jsx(Button, { variant: "ghost", className: "naxatw-text-body-btn !naxatw-text-red", onClick: () => { }, type: "button", children: "Forgot Your Password?" })] }), _jsx(Button, { className: "!naxatw-bg-red naxatw-py-5", type: "submit", withLoader: true, children: "Log In" })] })] }) }));
}
