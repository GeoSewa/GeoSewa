import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable react/prop-types */
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@Utils/index";
import Icon from "@Components/common/Icon";
import Spinner from "@Components/common/Spinner";
const buttonVariants = cva(`naxatw-inline-flex naxatw-items-center naxatw-justify-center naxatw-rounded-md naxatw-text-sm 
  naxatw-font-bold naxatw-transition-colors focus-visible:naxatw-outline-none focus-visible:naxatw-ring-2 
  focus-visible:ring-ring focus-visible:naxatw-ring-offset-2 disabled:naxatw-opacity-50 disabled:naxatw-pointer-events-none`, {
    variants: {
        variant: {
            default: "naxatw-bg-primary naxatw-text-white hover:naxatw-shadow-top hover:naxatw-shadow-primary",
            destructive: "naxatw-bg-red-500 naxatw-text-white hover:naxatw-shadow-top hover:naxatw-shadow-red-500",
            outline: `naxatw-border naxatw-text-primary naxatw-border- hover:naxatw-bg-primary hover:naxatw-text-white naxatw-border-input 
        hover:naxatw-shadow-top naxatw-bg-white`,
            secondary: "naxatw-bg-white naxatw-text-primary naxatw-border naxatw-border-primary hover:naxatw-shadow-top",
            ghost: "naxatw-text-primary naxatw-font-bold disabled:naxatw-text-grey-600 hover:naxatw-text-red-500",
            link: `naxatw-text-primary naxatw-font-bold naxatw-underline-offset-4 naxatw-underline hover:naxatw-no-underline
         naxatw-text-primarycolor hover:naxatw-shadow hover:naxatw-shadow-primary`,
        },
        size: {
            default: "naxatw-h-9 naxatw-py-2 naxatw-px-3",
            sm: "naxatw-h-7 naxatw-px-2 naxatw-rounded-lg",
            lg: "naxatw-h-11 naxatw-px-8 naxatw-rounded-md",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
const ButtonContent = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (_jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref: ref, ...props }));
});
ButtonContent.displayName = "Button";
function Button({ leftIcon, rightIcon, children, iconClassname, withLoader, isLoading, className, ...rest }) {
    return (_jsxs(ButtonContent, { ...rest, className: `naxatw-flex naxatw-items-center naxatw-gap-1 ${className}`, children: [leftIcon && (_jsx(Icon, { className: `${iconClassname} !naxatw-text-icon-sm`, name: leftIcon })), children, rightIcon && (_jsx(Icon, { className: `${iconClassname} !naxatw-text-icon-sm`, name: rightIcon })), withLoader && isLoading && (_jsx(Spinner, { className: "naxatw-fill-primary-500" }))] }));
}
export { Button, buttonVariants };
