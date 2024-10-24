import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import useCustomUpload from '@Hooks/useCustomUpload';
import { FlexColumn, FlexRow } from '@Components/common/Layouts';
import Icon from '@Components/common/Icon';
import Image from '@Components/RadixComponents/Image';
import Input from '../Input';
export default function FileUpload({ name, register, setValue, multiple, fileAccept = 'image/*', data, placeholder, onChange, }) {
    const [inputRef, onFileUpload] = useCustomUpload();
    const [uploadedFiles, setUploadedFiles] = useState([]);
    // for edit
    useEffect(() => {
        // @ts-ignore
        if (!data || (data && typeof data?.[0] !== 'string'))
            return;
        const uploaded = data.map((url) => {
            const urlArray = url?.split('/');
            return {
                id: uuidv4(),
                previewURL: url,
                file: { name: urlArray?.[urlArray.length - 1] || null },
            };
        });
        //   @ts-ignore
        setUploadedFiles(uploaded);
    }, [data]);
    // register form element to useForm
    useEffect(() => {
        register(name);
        setValue(name, []);
    }, [register, name, setValue]);
    const handleFileUpload = (event) => {
        const { files } = event.target;
        const uploaded = Array.from(files).map(file => ({
            id: uuidv4(),
            previewURL: URL.createObjectURL(file),
            file,
        }));
        const uploadedFilesState = multiple
            ? [...uploadedFiles, ...uploaded]
            : uploaded;
        //   @ts-ignore
        setUploadedFiles(uploadedFilesState);
        setValue(name, uploadedFilesState, { shouldDirty: true });
        onChange?.(uploadedFiles);
    };
    function downloadBlob(blobURL, fileName) {
        const link = document.createElement('a');
        link.href = blobURL;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    const handleDeleteFile = (id) => {
        const updatedData = uploadedFiles.filter(file => file.id !== id);
        setUploadedFiles(updatedData);
        setValue(name, updatedData, { shouldDirty: true });
    };
    return (_jsxs(FlexColumn, { gap: 2, children: [_jsxs(FlexColumn, { className: "naxatw-cursor-pointer naxatw-items-center naxatw-justify-center naxatw-rounded-lg naxatw-border-2\n          naxatw-border-dashed  naxatw-bg-grey-100 naxatw-py-2.5 ", 
                //   @ts-ignore
                onClick: onFileUpload, children: [_jsx(Icon, { name: "cloud_upload", className: "naxatw-text-3xl naxatw-text-primary-400 " }), _jsx("p", { className: "naxatw-text-xs naxatw-text-grey-600", children: placeholder || 'Please upload picture (jpeg, png file format)' }), _jsx(Input, { ref: inputRef, type: "file", className: "naxatw-hidden", multiple: multiple, onChange: handleFileUpload, accept: fileAccept })] }), _jsx(FlexColumn, { gap: 2, className: "scrollbar naxatw-max-h-52 naxatw-overflow-auto ", children: uploadedFiles.map(({ file, id, previewURL }) => (_jsxs(FlexRow, { className: "naxatw-items-center naxatw-justify-between naxatw-rounded-lg naxatw-border naxatw-px-4 naxatw-py-2", children: [_jsxs(FlexRow, { gap: 4, className: "naxatw-items-center", children: [_jsx(Image, { src: previewURL, width: 40, alt: "" }), _jsxs(FlexColumn, { children: [_jsx("h5", { className: "naxatw-text-sm", children: file?.name }), file && file?.lastModified && (_jsxs("p", { className: "naxatw-text-xs naxatw-text-grey-600", children: ["Uploaded on", format(new Date(file.lastModifiedDate), 'MMM dd yyyy')] }))] })] }), _jsxs(FlexRow, { gap: 2, children: [_jsx(Icon, { name: "download", className: "naxatw-text-grey-400", onClick: () => downloadBlob(previewURL, file?.name) }), _jsx(Icon, { name: "delete", className: "naxatw-text-red-500", onClick: () => handleDeleteFile(id) })] })] }, id))) })] }));
}
