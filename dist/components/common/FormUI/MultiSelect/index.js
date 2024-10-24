import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useRef, useState } from 'react';
import Icon from '@Components/common/Icon';
import Input from '../Input';
export default function MultiSelect({ options, selectedOptions, onChange, placeholder = 'Select', labelKey = 'label', valueKey = 'value', className, }) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [selected, setSelected] = useState(selectedOptions || []);
    const dropdownRef = useRef(null);
    useEffect(() => {
        setSelected(selectedOptions || []);
    }, [selectedOptions]);
    const toggleOption = (optionValue) => {
        const updatedSelected = selectedOptions?.includes(optionValue)
            ? selected.filter(item => item !== optionValue)
            : [...selected, optionValue];
        // setSelected(updatedSelected);
        onChange?.(updatedSelected);
    };
    function getPlaceholderText() {
        const selectedLength = selected.length;
        let placeholderText = '';
        if (!selectedLength) {
            placeholderText = placeholder;
        }
        else if (selectedLength === 1) {
            const selectedLabel = options.find(item => item[valueKey] === selected[0])?.[labelKey];
            placeholderText = selectedLabel || '';
        }
        else {
            placeholderText = `${selectedLength} Selected`;
        }
        return placeholderText;
    }
    const handleClickOutside = (event) => {
        if (dropdownRef.current &&
            !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        if (isOpen) {
            dropdownRef?.current?.focus();
        }
        else {
            setSearchText('');
        }
    }, [isOpen]);
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    const filterOptions = options?.filter(opt => opt[labelKey]?.toString()?.toLowerCase().includes(searchText.toLowerCase()));
    const showClearIcon = !!searchText.length;
    return (_jsxs("div", { ref: dropdownRef, className: `naxatw-group naxatw-relative naxatw-flex  naxatw-h-11 naxatw-w-full
       naxatw-cursor-pointer  naxatw-items-center naxatw-justify-between ${className}`, onClick: () => {
            setIsOpen(true);
        }, children: [_jsx(Input, { type: "text", placeholder: getPlaceholderText(), className: `naxatw-w-full  ${selected.length ? 'placeholder:naxatw-text-grey-800' : ''} focus:placeholder:naxatw-text-grey-400 `, value: searchText, onClick: e => {
                    setIsOpen(true);
                }, onChange: e => {
                    setSearchText(e.target.value);
                } }), showClearIcon ? (_jsx(Icon, { name: "clear", className: "naxatw-absolute naxatw-right-0 naxatw-items-center \n        !naxatw-text-base hover:naxatw-text-primary-400", onClick: () => setSearchText('') })) : (_jsx(Icon, { name: !isOpen ? 'expand_more' : 'search', className: "naxatw-absolute naxatw-right-0 naxatw-items-center group-hover:naxatw-text-primary-400" })), isOpen && (_jsx("ul", { className: "scrollbar naxatw-absolute naxatw-top-[44px] naxatw-z-20 naxatw-flex naxatw-max-h-[160px]\n         naxatw-w-full naxatw-animate-flip-down naxatw-flex-col naxatw-gap-1 naxatw-overflow-auto naxatw-border\n         naxatw-bg-white naxatw-py-1 naxatw-shadow-lg naxatw-duration-300", children: options && filterOptions.length > 0 ? (filterOptions.map(option => (_jsxs("li", { className: "naxatw-flex naxatw-cursor-pointer naxatw-list-none naxatw-items-start \n                naxatw-px-2 naxatw-py-2 naxatw-text-sm hover:naxatw-bg-primary-50", onClick: e => {
                        e.stopPropagation();
                        toggleOption(option[valueKey]);
                    }, children: [_jsx("input", { type: "checkbox", className: "naxatw-mr-2 naxatw-h-5", value: option[valueKey], checked: selected.includes(option[valueKey]), onChange: () => toggleOption(option[valueKey]) }), _jsx("div", { children: option[labelKey] })] }, option[valueKey])))) : (_jsx("li", { className: "naxatw-cursor-default naxatw-px-1 naxatw-py-1 naxatw-text-sm", children: "No options available" })) }))] }));
}
